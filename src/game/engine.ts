import * as THREE from 'three';
import { buildWorld, makeMinimapBase, ROADS, ROAD, BLOCKS, CELL, HALF, SPAN, GROUND, type AABB } from './world';
import { AudioFx } from './audio';

/* ================= типы ================= */
export interface HudState {
  money: number; health: number; wanted: number; speed: number;
  mode: 'foot' | 'car'; time: number; prompt: string;
}
export interface RunStats { money: number; time: number; wanted: number }
export type GameEvent =
  | { type: 'toast'; text: string; color: string }
  | { type: 'busted'; stats: RunStats }
  | { type: 'wasted'; stats: RunStats }
  | { type: 'passed'; stats: RunStats }
  | { type: 'pause'; paused: boolean }
  | { type: 'mute'; muted: boolean };

interface Car {
  group: THREE.Group; wheels: THREE.Mesh[];
  x: number; z: number; h: number; vx: number; vz: number;
  axis: 'x' | 'z'; dir: 1 | -1; road: number; lane: number; nextCross: number;
  speed: number; baseSpeed: number; panic: number;
  isPlayer: boolean; isCop: boolean;
  barR?: THREE.Mesh; barB?: THREE.Mesh;
}
interface Ped {
  group: THREE.Group; x: number; z: number; h: number;
  tx: number; tz: number; state: 'walk' | 'flee' | 'down'; downT: number; sink: number;
}
interface Pickup { group: THREE.Group; x: number; z: number; kind: 'cash' | 'health'; value: number; phase: number }
interface Particle { x: number; y: number; z: number; vx: number; vy: number; vz: number; life: number; max: number; grav: number; scale: number; c: number }

const GOAL = 5000;
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function lerpAngle(a: number, b: number, t: number) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * clamp(t, 0, 1);
}
function nearestRoad(v: number) {
  let best = ROADS[0], bd = 1e9;
  for (const r of ROADS) { const d = Math.abs(r - v); if (d < bd) { bd = d; best = r; } }
  return best;
}
function nextCrossing(v: number, dir: number): number | null {
  if (dir > 0) { for (const r of ROADS) if (r > v + 0.5) return r; return null; }
  for (let i = ROADS.length - 1; i >= 0; i--) if (ROADS[i] < v - 0.5) return ROADS[i];
  return null;
}
const laneFor = (axis: 'x' | 'z', dir: number) => (axis === 'x' ? 3.6 * dir : -3.6 * dir);
const headingFor = (axis: 'x' | 'z', dir: number) => (axis === 'x' ? (dir > 0 ? Math.PI / 2 : -Math.PI / 2) : dir > 0 ? 0 : Math.PI);

const TRAFFIC_COLORS = [0x3fa7d6, 0xd64545, 0xe8e4da, 0x37474f, 0xf2b134, 0x6a8f3f, 0x8e5ac8, 0x2ec4b6, 0xd97ba0];

/* ================= игра ================= */
export class Game {
  private container: HTMLElement;
  private minimap: HTMLCanvasElement;
  private onHud: (h: HudState) => void;
  private onEvent: (e: GameEvent) => void;

  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private colliders: AABB[] = [];
  private raf = 0;
  private lastT = 0;
  private destroyed = false;
  audio = new AudioFx();

  state: 'menu' | 'playing' | 'paused' | 'over' = 'menu';

  /* игрок */
  private player = { x: 0, z: 0, y: 0, vy: 0, h: 0, vx: 0, vz: 0, health: 100, mode: 'foot' as 'foot' | 'car' };
  private playerCar: Car | null = null;
  private playerMesh!: THREE.Group;
  private camPos = new THREE.Vector3(0, 80, 160);
  private camYaw = 0;
  private fov = 62;
  private shake = 0;

  /* сущности */
  private traffic: Car[] = [];
  private cops: Car[] = [];
  private peds: Ped[] = [];
  private pickups: Pickup[] = [];
  private particles: Particle[] = [];
  private pMesh!: THREE.InstancedMesh;
  private readonly PMAX = 240;

  /* прогресс */
  private money = 0;
  private wanted = 0;
  private time = 0;
  private passed = false;
  private crimeCd = 0;
  private decayT = 0;
  private bustT = 0;
  private smokeT = 0;
  private copTimer = 0;
  private prompt = '';
  private lastHudJson = '';

  private keys = new Set<string>();
  private onKeyDown: (e: KeyboardEvent) => void;
  private onKeyUp: (e: KeyboardEvent) => void;
  private onResize: () => void;

  constructor(container: HTMLElement, minimap: HTMLCanvasElement, cb: { onHud: (h: HudState) => void; onEvent: (e: GameEvent) => void }) {
    this.container = container;
    this.minimap = minimap;
    this.onHud = cb.onHud;
    this.onEvent = cb.onEvent;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(62, container.clientWidth / container.clientHeight, 0.1, 1400);
    this.camera.position.copy(this.camPos);

    const world = buildWorld(this.scene);
    this.colliders = world.colliders;

    this.buildPlayerMesh();
    this.buildParticles();
    for (let i = 0; i < 22; i++) this.traffic.push(this.makeTrafficCar());
    for (let i = 0; i < 36; i++) this.peds.push(this.makePed());
    for (let i = 0; i < 24; i++) this.pickups.push(this.makePickup('cash'));
    for (let i = 0; i < 6; i++) this.pickups.push(this.makePickup('health'));

    /* ввод */
    this.onKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.state === 'playing') this.setPaused(true);
        else if (this.state === 'paused') this.setPaused(false);
      }
      if (e.code === 'KeyM') this.onEvent({ type: 'mute', muted: this.audio.toggleMute() });
      if (this.state !== 'playing') return;
      if (e.code === 'KeyF') this.tryEnterExit();
      if (e.code === 'KeyH' && this.player.mode === 'car') this.audio.horn();
    };
    this.onKeyUp = (e) => this.keys.delete(e.code);
    this.onResize = () => {
      const w = this.container.clientWidth, h = this.container.clientHeight;
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    };
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('resize', this.onResize);

    this.lastT = performance.now();
    const loop = (t: number) => {
      if (this.destroyed) return;
      this.raf = requestAnimationFrame(loop);
      const dt = clamp((t - this.lastT) / 1000, 0.001, 0.05);
      this.lastT = t;
      this.update(dt, t / 1000);
      this.renderer.render(this.scene, this.camera);
    };
    this.raf = requestAnimationFrame(loop);
  }

  /* ================= публичное API ================= */
  start() {
    this.audio.init();
    this.audio.ui();
    this.resetRun(true);
    this.state = 'playing';
    this.toast('СОБЕРИ $' + GOAL, '#2de1fc');
  }
  toggleMute() { this.onEvent({ type: 'mute', muted: this.audio.toggleMute() }); }
  resume() { if (this.state === 'paused') this.setPaused(false); }
  private setPaused(p: boolean) {
    this.state = p ? 'paused' : 'playing';
    if (p) { this.audio.setEngine(0, false); this.audio.setSiren(0); this.audio.setSkid(false); }
    this.onEvent({ type: 'pause', paused: p });
  }
  respawn() {
    this.audio.init();
    this.resetRun(false);
    this.state = 'playing';
  }
  continueAfterPassed() { this.state = 'playing'; }
  restartFull() { this.start(); }
  toMenu() {
    this.audio.setEngine(0, false); this.audio.setSiren(0); this.audio.setSkid(false);
    this.resetRun(true);
    this.state = 'menu';
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('resize', this.onResize);
    this.audio.destroy();
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement === this.container) this.container.removeChild(this.renderer.domElement);
  }

  private resetRun(full: boolean) {
    if (!full) {
      // штраф за арест/смерть
      this.money = Math.floor(this.money * (this.player.health <= 0 ? 0.85 : 0.9));
    } else {
      this.money = 0; this.time = 0; this.passed = false;
    }
    this.wanted = 0; this.decayT = 0; this.bustT = 0; this.crimeCd = 0;
    this.player.health = 100; this.player.mode = 'foot';
    this.player.x = 10; this.player.z = 10; this.player.h = 0; this.player.vx = 0; this.player.vz = 0; this.player.y = 0;
    if (this.playerCar) { this.returnCarToTraffic(this.playerCar); this.playerCar = null; }
    for (const c of this.cops) this.scene.remove(c.group);
    this.cops = [];
    this.playerMesh.visible = true;
    this.shake = 0.4;
  }

  /* ================= фабрики сущностей ================= */
  private makeCarMesh(color: number, cop: boolean, sport: boolean): { group: THREE.Group; wheels: THREE.Mesh[]; barR?: THREE.Mesh; barB?: THREE.Mesh } {
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshLambertMaterial({ color });
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.85, 4.4), bodyMat);
    body.position.y = 0.78;
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.68, 2.3), new THREE.MeshLambertMaterial({ color: 0x181828 }));
    cabin.position.set(0, 1.5, -0.25);
    group.add(body, cabin);
    const wheels: THREE.Mesh[] = [];
    const wGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.34, 10);
    const wMat = new THREE.MeshLambertMaterial({ color: 0x15151c });
    for (const [wx, wz] of [[-1.02, 1.45], [1.02, 1.45], [-1.02, -1.45], [1.02, -1.45]]) {
      const pivot = new THREE.Group();
      pivot.position.set(wx, 0.42, wz);
      const w = new THREE.Mesh(wGeo, wMat);
      w.rotation.z = Math.PI / 2;
      pivot.add(w);
      group.add(pivot);
      wheels.push(w);
    }
    const lightMat = new THREE.MeshBasicMaterial({ color: 0xfff3c4, toneMapped: false });
    for (const sx of [-0.65, 0.65]) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.12), lightMat);
      hl.position.set(sx, 0.85, 2.22);
      const tl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.12), new THREE.MeshBasicMaterial({ color: 0xff3344, toneMapped: false }));
      tl.position.set(sx, 0.85, -2.22);
      group.add(hl, tl);
    }
    let barR: THREE.Mesh | undefined, barB: THREE.Mesh | undefined;
    if (cop) {
      barR = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.26, 0.5), new THREE.MeshBasicMaterial({ color: 0xff2233, toneMapped: false }));
      barR.position.set(-0.35, 2.0, -0.25);
      barB = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.26, 0.5), new THREE.MeshBasicMaterial({ color: 0x2266ff, toneMapped: false }));
      barB.position.set(0.35, 2.0, -0.25);
      group.add(barR, barB);
    }
    if (sport) {
      const spoiler = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.12, 0.5), new THREE.MeshLambertMaterial({ color: 0x181828 }));
      spoiler.position.set(0, 1.35, -2.1);
      group.add(spoiler);
    }
    /* тень-клякса */
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(2.7, 18),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.03;
    group.add(shadow);
    return { group, wheels, barR, barB };
  }

  private spawnCarAt(axis: 'x' | 'z', dir: 1 | -1, road: number, along: number, cop: boolean): Car {
    const color = cop ? 0x101018 : TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)];
    const { group, wheels, barR, barB } = this.makeCarMesh(color, cop, false);
    const lane = laneFor(axis, dir);
    const x = axis === 'x' ? along : road + lane;
    const z = axis === 'x' ? road + lane : along;
    const nc = nextCrossing(axis === 'x' ? x : z, dir) ?? nearestRoad(along);
    const car: Car = {
      group, wheels, x, z, h: headingFor(axis, dir), vx: 0, vz: 0,
      axis, dir, road, lane, nextCross: nc,
      speed: 0, baseSpeed: cop ? 40 : 9 + Math.random() * 7, panic: 0,
      isPlayer: false, isCop: cop, barR, barB,
    };
    group.position.set(x, 0, z);
    group.rotation.y = car.h;
    this.scene.add(group);
    return car;
  }

  private makeTrafficCar(): Car {
    const axis: 'x' | 'z' = Math.random() < 0.5 ? 'x' : 'z';
    const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
    const road = ROADS[Math.floor(Math.random() * ROADS.length)];
    const along = -HALF + 20 + Math.random() * (SPAN - 40);
    return this.spawnCarAt(axis, dir, road, along, false);
  }

  private buildPlayerMesh() {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.85, 4, 10), new THREE.MeshLambertMaterial({ color: 0x2de1fc }));
    body.position.y = 1.05;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 12), new THREE.MeshLambertMaterial({ color: 0xf0c8a0 }));
    head.position.y = 1.95;
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 8, 0, Math.PI * 2, 0, 1.2), new THREE.MeshLambertMaterial({ color: 0x241a18 }));
    hair.position.y = 1.98;
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.7, 14), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
    g.add(body, head, hair, shadow);
    g.position.set(this.player.x, 0, this.player.z);
    this.scene.add(g);
    this.playerMesh = g;
  }

  private makePed(): Ped {
    const g = new THREE.Group();
    const shirts = [0xd64570, 0x3fa7d6, 0xf2b134, 0x6a8f3f, 0x8e5ac8, 0xe8e4da, 0x2ec4b6];
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.62, 4, 8), new THREE.MeshLambertMaterial({ color: shirts[Math.floor(Math.random() * shirts.length)] }));
    body.position.y = 0.9;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 10), new THREE.MeshLambertMaterial({ color: 0xe0b48c }));
    head.position.y = 1.62;
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.02;
    g.add(body, head, shadow);
    const p: Ped = { group: g, x: 0, z: 0, h: 0, tx: 0, tz: 0, state: 'walk', downT: 0, sink: 0 };
    this.pedWaypoint(p, true);
    g.position.set(p.x, 0, p.z);
    this.scene.add(g);
    return p;
  }
  private pedWaypoint(p: Ped, teleport: boolean) {
    const b = 2; // радиус тротуара
    const bx = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
    const bz = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
    const half = (CELL - ROAD) / 2 + b;
    const side = Math.floor(Math.random() * 4);
    const t = (Math.random() * 2 - 1) * half;
    if (side === 0) { p.tx = bx + t; p.tz = bz - half; }
    else if (side === 1) { p.tx = bx + t; p.tz = bz + half; }
    else if (side === 2) { p.tx = bx - half; p.tz = bz + t; }
    else { p.tx = bx + half; p.tz = bz + t; }
    if (teleport) { p.x = p.tx; p.z = p.tz; }
  }

  private makePickup(kind: 'cash' | 'health'): Pickup {
    const g = new THREE.Group();
    if (kind === 'cash') {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.55, 0.55), new THREE.MeshBasicMaterial({ color: 0x35e06b, toneMapped: false }));
      const band = new THREE.Mesh(new THREE.BoxGeometry(0.87, 0.2, 0.57), new THREE.MeshBasicMaterial({ color: 0xbaffd0, toneMapped: false }));
      g.add(box, band);
    } else {
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), new THREE.MeshBasicMaterial({ color: 0xf5f5f5, toneMapped: false }));
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.18, 0.2), new THREE.MeshBasicMaterial({ color: 0xff3344, toneMapped: false }));
      const c2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.72), new THREE.MeshBasicMaterial({ color: 0xff3344, toneMapped: false }));
      g.add(box, c1, c2);
    }
    const p: Pickup = { group: g, x: 0, z: 0, kind, value: kind === 'cash' ? [100, 150, 250, 500][Math.floor(Math.random() * 4)] : 35, phase: Math.random() * 9 };
    this.relocatePickup(p, true);
    this.scene.add(g);
    return p;
  }
  private relocatePickup(p: Pickup, anywhere = false) {
    for (let tries = 0; tries < 20; tries++) {
      const bx = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
      const bz = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
      const x = bx + (Math.random() * 2 - 1) * 24;
      const z = bz + (Math.random() * 2 - 1) * 24;
      const d = Math.hypot(x - this.player.x, z - this.player.z);
      if (!anywhere && d < 60) continue;
      p.x = x; p.z = z;
      p.group.position.set(x, 1, z);
      return;
    }
    p.x = 0; p.z = 0; p.group.position.set(0, 1, 0);
  }

  private buildParticles() {
    const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const mat = new THREE.MeshBasicMaterial({ toneMapped: false });
    this.pMesh = new THREE.InstancedMesh(geo, mat, this.PMAX);
    const m = new THREE.Matrix4();
    m.makeScale(0, 0, 0);
    for (let i = 0; i < this.PMAX; i++) this.pMesh.setMatrixAt(i, m);
    this.pMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.pMesh.frustumCulled = false;
    this.scene.add(this.pMesh);
    for (let i = 0; i < this.PMAX; i++) this.particles.push({ x: 0, y: -99, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, grav: 0, scale: 0, c: 0xffffff });
  }
  private burst(x: number, y: number, z: number, color: number, count: number, speed: number, life: number, grav: number, scale = 1) {
    let spawned = 0;
    for (const p of this.particles) {
      if (p.life > 0) continue;
      p.x = x; p.y = y; p.z = z;
      const a = Math.random() * Math.PI * 2;
      const v = (0.3 + Math.random() * 0.7) * speed;
      p.vx = Math.cos(a) * v; p.vz = Math.sin(a) * v;
      p.vy = Math.random() * speed * 0.7 + 1;
      p.life = p.max = life * (0.6 + Math.random() * 0.7);
      p.grav = grav; p.scale = scale * (0.6 + Math.random() * 0.8); p.c = color;
      if (++spawned >= count) break;
    }
  }

  /* ================= ввод / действия ================= */
  private tryEnterExit() {
    const P = this.player;
    if (P.mode === 'foot') {
      let best: Car | null = null, bd = 5;
      for (const c of this.traffic) {
        const d = Math.hypot(c.x - P.x, c.z - P.z);
        if (d < bd) { bd = d; best = c; }
      }
      if (best) {
        this.traffic.splice(this.traffic.indexOf(best), 1);
        best.isPlayer = true;
        this.playerCar = best;
        P.mode = 'car';
        P.x = best.x; P.z = best.z; P.h = best.h;
        best.vx = 0; best.vz = 0; best.speed = 0;
        this.playerMesh.visible = false;
        this.audio.carjack();
        this.toast('ТАЧКА УГНАНА', '#ffb14e');
        this.crime(1, 4);
        this.shake = Math.max(this.shake, 0.25);
      }
    } else if (this.playerCar) {
      const c = this.playerCar;
      const side = 3.2;
      let ex = c.x + Math.cos(c.h) * side, ez = c.z - Math.sin(c.h) * side;
      if (this.hitsBuilding(ex, ez, 0.6)) { ex = c.x - Math.cos(c.h) * side; ez = c.z + Math.sin(c.h) * side; }
      if (this.hitsBuilding(ex, ez, 0.6)) { ex = c.x + Math.sin(c.h) * side; ez = c.z + Math.cos(c.h) * side; }
      P.x = clamp(ex, -HALF + 3, HALF - 3); P.z = clamp(ez, -HALF + 3, HALF - 3);
      P.h = c.h; P.vx = 0; P.vz = 0; P.y = 0;
      P.mode = 'foot';
      this.playerMesh.visible = true;
      this.returnCarToTraffic(c);
      this.playerCar = null;
      this.audio.ui();
    }
  }
  private returnCarToTraffic(c: Car) {
    c.isPlayer = false;
    c.axis = Math.abs(Math.sin(c.h)) > Math.abs(Math.cos(c.h)) ? 'x' : 'z';
    c.dir = (c.axis === 'x' ? Math.sin(c.h) : Math.cos(c.h)) >= 0 ? 1 : -1;
    c.road = nearestRoad(c.axis === 'x' ? c.z : c.x);
    c.lane = laneFor(c.axis, c.dir);
    const along = c.axis === 'x' ? c.x : c.z;
    c.nextCross = nextCrossing(along, c.dir) ?? nearestRoad(along);
    c.baseSpeed = 10; c.speed = 4; c.panic = 0;
    this.traffic.push(c);
  }

  private hitsBuilding(x: number, z: number, r: number): boolean {
    for (const b of this.colliders) {
      if (Math.abs(x - b.x) < b.hw + r && Math.abs(z - b.z) < b.hd + r) return true;
    }
    return false;
  }
  private collideCircle(pos: { x: number; z: number; vx: number; vz: number }, r: number): number {
    // возвращает силу удара
    let impact = 0;
    for (const b of this.colliders) {
      const cx = clamp(pos.x, b.x - b.hw, b.x + b.hw);
      const cz = clamp(pos.z, b.z - b.hd, b.z + b.hd);
      let dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        let d = Math.sqrt(d2);
        if (d < 0.001) { dx = 0; dz = 1; d = 1; }
        const nx = dx / d, nz = dz / d;
        const pen = r - d;
        pos.x += nx * pen; pos.z += nz * pen;
        const vn = pos.vx * nx + pos.vz * nz;
        if (vn < 0) {
          impact = Math.max(impact, -vn);
          pos.vx -= nx * vn * 1.35;
          pos.vz -= nz * vn * 1.35;
        }
      }
    }
    return impact;
  }

  private crime(stars: number, cooldown = 2.5) {
    if (this.crimeCd > 0) return;
    this.crimeCd = cooldown;
    this.decayT = 0;
    if (this.wanted < 5) {
      this.wanted = Math.min(5, this.wanted + stars);
      this.toast('РОЗЫСК +' + stars + '★', '#ff2d78');
      this.audio.starUp();
    }
  }
  private toast(text: string, color: string) { this.onEvent({ type: 'toast', text, color }); }
  private stats(): RunStats { return { money: this.money, time: this.time, wanted: this.wanted }; }

  /* ================= главный апдейт ================= */
  private update(dt: number, t: number) {
    if (this.state === 'menu') {
      this.updateTraffic(dt);
      this.updatePeds(dt);
      this.updatePickups(dt, t, false);
      const a = t * 0.07;
      const target = new THREE.Vector3(Math.cos(a) * 170, 78, Math.sin(a) * 170);
      this.camPos.lerp(target, 1 - Math.exp(-1.2 * dt));
      this.camera.position.copy(this.camPos);
      this.camera.lookAt(0, 6, 0);
      return;
    }
    if (this.state === 'over') {
      this.updateParticles(dt);
      return;
    }
    if (this.state !== 'playing') return;

    this.time += dt;
    this.crimeCd = Math.max(0, this.crimeCd - dt);

    if (this.player.mode === 'car' && this.playerCar) this.updateDriving(dt, t);
    else this.updateOnFoot(dt);

    this.updateTraffic(dt);
    this.updateCops(dt);
    this.updatePeds(dt);
    this.updatePickups(dt, t, true);
    this.updateWanted(dt);
    this.updateParticles(dt);
    this.updateCamera(dt);
    this.drawMinimap(t);
    this.pushHud();

    /* победа */
    if (!this.passed && this.money >= GOAL) {
      this.passed = true;
      this.money += 1000;
      this.audio.cash();
      this.burst(this.player.x, 2, this.player.z, 0x8dff57, 50, 12, 1.4, -4);
      this.onEvent({ type: 'passed', stats: this.stats() });
      this.state = 'over';
    }
  }

  /* ------- пешком ------- */
  private updateOnFoot(dt: number) {
    const P = this.player;
    const k = this.keys;
    const turn = (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0) - (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0);
    const move = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    const run = k.has('ShiftLeft') || k.has('ShiftRight');
    P.h += turn * 3.0 * dt;
    const spd = run ? 9.5 : 5.2;
    const fx = Math.sin(P.h), fz = Math.cos(P.h);
    P.vx = lerp(P.vx, fx * move * spd, 1 - Math.exp(-14 * dt));
    P.vz = lerp(P.vz, fz * move * spd, 1 - Math.exp(-14 * dt));
    P.x += P.vx * dt; P.z += P.vz * dt;
    if (k.has('Space') && P.y <= 0) { P.vy = 7.2; }
    P.vy -= 20 * dt;
    P.y = Math.max(0, P.y + P.vy * dt);
    if (P.y === 0) P.vy = Math.max(0, P.vy);

    const impact = this.collideCircle(P, 0.6);
    if (impact > 0) this.audio.thud();
    const B = HALF - 3;
    P.x = clamp(P.x, -B, B); P.z = clamp(P.z, -B, B);

    this.playerMesh.position.set(P.x, P.y, P.z);
    this.playerMesh.rotation.y = P.h;
    const moving = Math.hypot(P.vx, P.vz) > 1;
    this.playerMesh.position.y = P.y + (moving ? Math.abs(Math.sin(this.time * (run ? 13 : 9))) * 0.09 : 0);

    /* подсказка входа в машину */
    let near = false;
    for (const c of this.traffic) if (Math.hypot(c.x - P.x, c.z - P.z) < 5) { near = true; break; }
    this.prompt = near ? 'F — УГНАТЬ ТАЧКУ' : '';
    this.audio.setEngine(0, false);
    this.audio.setSiren(this.wanted > 0 ? 0.4 : 0);
  }

  /* ------- вождение ------- */
  private updateDriving(dt: number, t: number) {
    const P = this.player;
    const c = this.playerCar!;
    const k = this.keys;
    const throttle = k.has('KeyW') || k.has('ArrowUp');
    const brake = k.has('KeyS') || k.has('ArrowDown');
    const steer = (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0) - (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0);
    const hand = k.has('Space');

    const fx = Math.sin(c.h), fz = Math.cos(c.h);
    let speed = c.vx * fx + c.vz * fz;

    if (throttle) { const f = 30 * dt; c.vx += fx * f; c.vz += fz * f; }
    if (brake) {
      if (speed > 1.5) { c.vx -= fx * 42 * dt; c.vz -= fz * 42 * dt; }
      else { c.vx -= fx * 14 * dt; c.vz -= fz * 14 * dt; }
    }
    /* трение качения */
    const roll = Math.exp(-(0.55 + (hand ? 1.5 : 0)) * dt);
    c.vx *= roll; c.vz *= roll;
    /* сцепление: гасим боковую составляющую */
    speed = c.vx * fx + c.vz * fz;
    const latX = c.vx - fx * speed, latZ = c.vz - fz * speed;
    const grip = Math.exp(-(hand ? 2.1 : 9.5) * dt);
    c.vx = fx * speed + latX * grip;
    c.vz = fz * speed + latZ * grip;
    /* лимит скорости */
    speed = c.vx * fx + c.vz * fz;
    const top = 47;
    if (speed > top) { c.vx *= top / speed; c.vz *= top / speed; speed = top; }
    if (speed < -13) { c.vx *= -13 / speed; c.vz *= -13 / speed; }

    const steerK = (hand ? 3.1 : 2.45) * clamp(Math.abs(speed) / 13, 0, 1) * (speed < 0 ? -1 : 1);
    c.h += steer * steerK * dt;

    c.x += c.vx * dt; c.z += c.vz * dt;
    P.x = c.x; P.z = c.z; P.h = c.h;

    /* столкновения со зданиями */
    const impact = this.collideCircle(c, 2.5);
    if (impact > 3) {
      const dmg = Math.min(34, (impact - 7) * 1.25);
      if (impact > 7) this.damagePlayer(dmg);
      this.burst(c.x + fx * 2, 1, c.z + fz * 2, 0xffc46b, 10 + impact, 9, 0.5, 14, 0.8);
      this.audio.crash(clamp(impact / 26, 0.15, 1));
      this.shake = Math.max(this.shake, clamp(impact / 30, 0.1, 0.8));
    }
    const B = HALF - 3;
    if (Math.abs(c.x) > B || Math.abs(c.z) > B) {
      c.x = clamp(c.x, -B, B); c.z = clamp(c.z, -B, B);
      c.vx *= 0.6; c.vz *= 0.6;
    }

    /* столкновения с машинами */
    const allCars = [...this.traffic, ...this.cops];
    for (const o of allCars) {
      const dx = o.x - c.x, dz = o.z - c.z;
      const d = Math.hypot(dx, dz);
      if (d < 4.4 && d > 0.001) {
        const nx = dx / d, nz = dz / d;
        const push = (4.4 - d) / 2;
        c.x -= nx * push; c.z -= nz * push;
        o.x += nx * push; o.z += nz * push;
        const rel = Math.abs((c.vx - (o.isCop ? Math.sin(o.h) * o.speed : o.vx)) * nx + (c.vz - (o.isCop ? Math.cos(o.h) * o.speed : o.vz)) * nz);
        if (!o.isCop) {
          o.vx = c.vx * 0.35; o.vz = c.vz * 0.35;
          o.panic = 3;
          if (rel > 13) {
            this.damagePlayer((rel - 12) * 0.8);
            this.crime(1, 3.5);
          }
        } else if (rel > 8) {
          this.damagePlayer((rel - 7) * 1.3);
        }
        if (rel > 6) {
          this.burst((c.x + o.x) / 2, 1, (c.z + o.z) / 2, 0xffe08a, 8, 8, 0.45, 14, 0.7);
          this.audio.crash(clamp(rel / 28, 0.12, 0.8));
          this.shake = Math.max(this.shake, clamp(rel / 40, 0.08, 0.6));
        }
      }
    }

    /* сбитые пешеходы */
    const sp = Math.hypot(c.vx, c.vz);
    if (sp > 6) {
      for (const p of this.peds) {
        if (p.state === 'down') continue;
        if (Math.hypot(p.x - c.x, p.z - c.z) < 2.6) {
          p.state = 'down'; p.downT = 0; p.sink = 0;
          this.crime(1, 3);
          this.audio.thud();
          this.burst(p.x, 1, p.z, 0xe8e4da, 8, 7, 0.5, 12);
          this.shake = Math.max(this.shake, 0.3);
        }
      }
    }

    /* визуал */
    c.group.position.set(c.x, 0, c.z);
    c.group.rotation.y = c.h;
    for (const w of c.wheels) w.rotation.y += (speed * dt) / 0.42;
    const drift = Math.hypot(latX, latZ);
    this.audio.setSkid((hand && Math.abs(speed) > 9) || drift > 7);
    if ((hand && Math.abs(speed) > 9) || drift > 7) {
      this.burst(c.x - fx * 1.6, 0.25, c.z - fz * 1.6, 0x9a9aa8, 2, 2.5, 0.7, -3, 0.9);
    }
    this.audio.setEngine(Math.abs(speed) / top, true);

    /* дым при поломке */
    this.smokeT -= dt;
    if (P.health < 35 && this.smokeT <= 0) {
      this.smokeT = 0.12;
      this.burst(c.x, 1.4, c.z, P.health < 15 ? 0xff6a3d : 0x666675, 2, 2, 1.1, -3, 1.2);
    }

    this.prompt = Math.abs(speed) < 4 ? 'F — ВЫЙТИ ИЗ МАШИНЫ' : '';
    void t;
  }

  private damagePlayer(d: number) {
    if (d <= 0) return;
    this.player.health = Math.max(0, this.player.health - d);
    if (this.player.health <= 0) {
      this.audio.explosion();
      this.burst(this.player.x, 1.5, this.player.z, 0xff7a3d, 60, 16, 1.3, 10, 1.4);
      this.burst(this.player.x, 2, this.player.z, 0x555560, 40, 8, 1.8, -3, 1.6);
      this.shake = 1.4;
      this.audio.setEngine(0, false);
      this.state = 'over';
      this.onEvent({ type: 'wasted', stats: this.stats() });
    }
  }

  /* ------- трафик ------- */
  private updateTraffic(dt: number) {
    const cars = [...this.traffic, ...this.cops];
    if (this.playerCar) cars.push(this.playerCar);
    for (const c of this.traffic) {
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      /* торможение перед препятствием */
      let target = c.baseSpeed * (c.panic > 0 ? 1.5 : 1);
      c.panic = Math.max(0, c.panic - dt);
      const px = c.x + fx * 7, pz = c.z + fz * 7;
      for (const o of cars) {
        if (o === c) continue;
        if (Math.hypot(o.x - px, o.z - pz) < 4.6) { target = 0; break; }
      }
      if (this.player.mode === 'foot' && Math.hypot(this.player.x - px, this.player.z - pz) < 4) target = 0;
      c.speed += clamp(target - c.speed, -34 * dt, 9 * dt);

      if (c.axis === 'x') c.x += c.dir * c.speed * dt;
      else c.z += c.dir * c.speed * dt;

      /* поперечное выравнивание в полосу */
      const latTarget = c.road + c.lane;
      if (c.axis === 'x') c.z = lerp(c.z, latTarget, 1 - Math.exp(-5 * dt));
      else c.x = lerp(c.x, latTarget, 1 - Math.exp(-5 * dt));

      /* перекрёсток: повернуть или ехать прямо */
      const along = c.axis === 'x' ? c.x : c.z;
      if (c.dir > 0 ? along >= c.nextCross : along <= c.nextCross) {
        const cross = c.nextCross;
        const canKeep = nextCrossing(cross, c.dir) !== null;
        const roll = Math.random();
        if (canKeep && roll < 0.45) {
          c.nextCross = nextCrossing(cross, c.dir)!;
        } else {
          const nd: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
          c.axis = c.axis === 'x' ? 'z' : 'x';
          c.dir = nd;
          c.road = cross;
          if (c.axis === 'x') { c.z = cross; c.lane = laneFor('x', nd); }
          else { c.x = cross; c.lane = laneFor('z', nd); }
          c.nextCross = nextCrossing(c.axis === 'x' ? c.x : c.z, nd) ?? cross;
        }
      }

      const th = headingFor(c.axis, c.dir);
      c.h = lerpAngle(c.h, th, 1 - Math.exp(-6 * dt));
      c.group.position.set(c.x, 0, c.z);
      c.group.rotation.y = c.h;
      for (const w of c.wheels) w.rotation.y += (c.speed * dt) / 0.42;

      /* респаун вдали */
      if (this.state === 'playing' && Math.hypot(c.x - this.player.x, c.z - this.player.z) > 260) {
        this.scene.remove(c.group);
        const idx = this.traffic.indexOf(c);
        if (idx >= 0) { this.traffic[idx] = this.makeTrafficCar(); }
      }
    }
  }

  /* ------- полиция ------- */
  private updateCops(dt: number) {
    this.copTimer -= dt;
    const want = this.wanted > 0 ? Math.min(5, this.wanted + 1) : 0;
    if (this.cops.length < want && this.copTimer <= 0) {
      this.copTimer = 1.2;
      const axis: 'x' | 'z' = Math.random() < 0.5 ? 'x' : 'z';
      const road = nearestRoad(axis === 'x' ? this.player.z : this.player.x);
      const off = 60 + Math.random() * 50;
      const along = clamp((axis === 'x' ? this.player.x : this.player.z) + (Math.random() < 0.5 ? off : -off), -HALF + 14, HALF - 14);
      const cop = this.spawnCarAt(axis, Math.random() < 0.5 ? 1 : -1, road, along, true);
      this.cops.push(cop);
    }
    if (this.cops.length > want) {
      const c = this.cops.pop()!;
      this.scene.remove(c.group);
    }

    const P = this.player;
    const pSpeed = P.mode === 'car' && this.playerCar ? Math.hypot(this.playerCar.vx, this.playerCar.vz) : Math.hypot(P.vx, P.vz);
    let sirenLevel = 0;
    const blink = Math.floor(this.time * 5) % 2 === 0;

    for (const c of this.cops) {
      if (c.barR) c.barR.visible = blink;
      if (c.barB) c.barB.visible = !blink;
      const dx = P.x - c.x, dz = P.z - c.z;
      const dist = Math.hypot(dx, dz);
      const targetH = Math.atan2(dx, dz);
      c.h = lerpAngle(c.h, targetH, 1 - Math.exp(-3.1 * dt));
      const maxSp = 30 + this.wanted * 3.4;
      const diff = Math.abs(lerpAngle(c.h, targetH, 1) - c.h);
      const sp = dist > 12 ? maxSp : maxSp * 0.85;
      c.speed += clamp(sp * (diff > 1.1 ? 0.45 : 1) - c.speed, -30 * dt, 16 * dt);
      c.x += Math.sin(c.h) * c.speed * dt;
      c.z += Math.cos(c.h) * c.speed * dt;
      const pos = { x: c.x, z: c.z, vx: Math.sin(c.h) * c.speed, vz: Math.cos(c.h) * c.speed };
      this.collideCircle(pos, 2.5);
      c.x = pos.x; c.z = pos.z;
      c.x = clamp(c.x, -HALF + 3, HALF - 3); c.z = clamp(c.z, -HALF + 3, HALF - 3);

      /* расталкивание с другими копами */
      for (const o of this.cops) {
        if (o === c) continue;
        const d = Math.hypot(o.x - c.x, o.z - c.z);
        if (d < 4.4 && d > 0.001) {
          const push = (4.4 - d) / 2;
          c.x -= ((o.x - c.x) / d) * push; c.z -= ((o.z - c.z) / d) * push;
        }
      }

      c.group.position.set(c.x, 0, c.z);
      c.group.rotation.y = c.h;
      for (const w of c.wheels) w.rotation.y += (c.speed * dt) / 0.42;

      sirenLevel = Math.max(sirenLevel, 1 - dist / 110);

      /* наезд на пешего игрока */
      if (P.mode === 'foot' && dist < 2.7 && c.speed > 5) {
        this.damagePlayer(c.speed * 0.8);
        P.x += (dx / (dist || 1)) * 2.2;
        P.z += (dz / (dist || 1)) * 2.2;
      }

      /* задержание */
      if (this.state === 'playing') {
        if (P.mode === 'car') {
          if (dist < 7.5 && pSpeed < 4.5) this.bustT += dt;
          else this.bustT = Math.max(0, this.bustT - dt * 1.6);
          if (this.bustT > 1.9) this.bust();
        } else if (dist < 4.2) {
          this.bustT += dt * 1.5;
          if (this.bustT > 1.2) this.bust();
        }
      }
    }
    this.audio.setSiren(this.wanted > 0 ? sirenLevel : 0);
    if (this.wanted === 0) this.bustT = 0;
  }
  private bust() {
    this.audio.setSiren(0);
    this.audio.setEngine(0, false);
    this.state = 'over';
    this.onEvent({ type: 'busted', stats: this.stats() });
  }

  /* ------- пешеходы ------- */
  private updatePeds(dt: number) {
    const P = this.player;
    const carNear = P.mode === 'car' && this.playerCar && Math.hypot(this.playerCar.vx, this.playerCar.vz) > 8;
    for (const p of this.peds) {
      if (p.state === 'down') {
        p.downT += dt;
        p.group.rotation.x = Math.min(Math.PI / 2, p.group.rotation.x + dt * 7);
        if (p.downT > 3.5) {
          p.sink -= dt * 0.8;
          p.group.position.y = p.sink;
          if (p.sink < -1.4) {
            p.group.rotation.x = 0; p.group.position.y = 0;
            p.state = 'walk';
            this.pedWaypoint(p, true);
            p.group.position.set(p.x, 0, p.z);
          }
        }
        continue;
      }
      /* угроза рядом — разбегаются */
      if (carNear && Math.hypot(p.x - P.x, p.z - P.z) < 10) {
        p.state = 'flee';
        p.tx = p.x + (p.x - P.x) * 2;
        p.tz = p.z + (p.z - P.z) * 2;
      }
      const dx = p.tx - p.x, dz = p.tz - p.z;
      const d = Math.hypot(dx, dz);
      if (d < 1.2) {
        if (p.state === 'flee') p.state = 'walk';
        this.pedWaypoint(p, false);
      }
      const sp = p.state === 'flee' ? 7.5 : 1.6;
      p.x += (dx / (d || 1)) * sp * dt;
      p.z += (dz / (d || 1)) * sp * dt;
      p.h = Math.atan2(dx, dz);
      p.group.position.set(p.x, 0, p.z);
      p.group.rotation.y = p.h;
    }
  }

  /* ------- пикапы ------- */
  private updatePickups(dt: number, t: number, collect: boolean) {
    const P = this.player;
    for (const p of this.pickups) {
      p.group.rotation.y += dt * 2.4;
      p.group.position.y = 1 + Math.sin(t * 2.6 + p.phase) * 0.22;
      if (!collect) continue;
      const d = Math.hypot(p.x - P.x, p.z - P.z);
      if (d < (P.mode === 'car' ? 3.4 : 2)) {
        if (p.kind === 'cash') {
          this.money += p.value;
          this.toast('+$' + p.value, '#8dff57');
          this.audio.cash();
          this.burst(p.x, 1.2, p.z, 0x35e06b, 14, 7, 0.8, 10);
        } else {
          P.health = Math.min(100, P.health + p.value);
          this.toast('+' + p.value + ' ЗДОРОВЬЕ', '#ff8a9e');
          this.audio.health();
          this.burst(p.x, 1.2, p.z, 0xff5566, 12, 6, 0.8, 8);
        }
        this.relocatePickup(p);
      }
    }
  }

  /* ------- розыск ------- */
  private updateWanted(dt: number) {
    if (this.wanted === 0) return;
    let nearest = 1e9;
    for (const c of this.cops) nearest = Math.min(nearest, Math.hypot(c.x - this.player.x, c.z - this.player.z));
    if (this.crimeCd <= 0 && nearest > 75) {
      this.decayT += dt;
      if (this.decayT > 6) {
        this.decayT = 0;
        this.wanted--;
        if (this.wanted > 0) this.toast('РОЗСК СНИЖЕН: ' + this.wanted + '★', '#2de1fc');
        else this.toast('ТЫ УШЁЛ ОТ ПОГОНИ', '#2de1fc');
      }
    } else this.decayT = 0;
  }

  /* ------- частицы ------- */
  private updateParticles(dt: number) {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const pos = new THREE.Vector3();
    const scl = new THREE.Vector3();
    const col = new THREE.Color();
    for (let i = 0; i < this.PMAX; i++) {
      const p = this.particles[i];
      if (p.life > 0) {
        p.life -= dt;
        p.vy -= p.grav * dt * (p.grav > 0 ? 1 : -0.4);
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        if (p.y < 0.1 && p.grav > 0) { p.y = 0.1; p.vy *= -0.4; p.vx *= 0.7; p.vz *= 0.7; }
        const k = clamp(p.life / p.max, 0, 1) * p.scale;
        pos.set(p.x, p.y, p.z); scl.set(k, k, k);
        m.compose(pos, q, scl);
        this.pMesh.setMatrixAt(i, m);
        this.pMesh.setColorAt(i, col.setHex(p.c));
      } else {
        m.makeScale(0, 0, 0);
        this.pMesh.setMatrixAt(i, m);
      }
    }
    this.pMesh.instanceMatrix.needsUpdate = true;
    if (this.pMesh.instanceColor) this.pMesh.instanceColor.needsUpdate = true;
  }

  /* ------- камера ------- */
  private updateCamera(dt: number) {
    const P = this.player;
    let targetPos: THREE.Vector3;
    let lookAt: THREE.Vector3;
    let targetFov = 62;
    if (P.mode === 'car' && this.playerCar) {
      const c = this.playerCar;
      const sp = Math.hypot(c.vx, c.vz);
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      const back = 8.5 + sp * 0.055;
      targetPos = new THREE.Vector3(c.x - fx * back, 4.6 + sp * 0.012, c.z - fz * back);
      lookAt = new THREE.Vector3(c.x + fx * 5, 1.4, c.z + fz * 5);
      targetFov = 62 + (sp / 47) * 17;
    } else {
      this.camYaw = lerpAngle(this.camYaw, P.h, 1 - Math.exp(-5 * dt));
      const fx = Math.sin(this.camYaw), fz = Math.cos(this.camYaw);
      targetPos = new THREE.Vector3(P.x - fx * 6.4, 3.4 + P.y * 0.5, P.z - fz * 6.4);
      lookAt = new THREE.Vector3(P.x + fx * 2, 1.6 + P.y, P.z + fz * 2);
    }
    const kk = 1 - Math.exp(-5.5 * dt);
    this.camPos.lerp(targetPos, kk);
    /* не даём камере провалиться под землю */
    if (this.camPos.y < 1.6) this.camPos.y = 1.6;
    this.camera.position.copy(this.camPos);
    if (this.shake > 0.002) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.7;
      this.camera.position.z += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.exp(-5.5 * dt);
    }
    this.camera.lookAt(lookAt);
    this.fov = lerp(this.fov, targetFov, 1 - Math.exp(-4 * dt));
    if (Math.abs(this.camera.fov - this.fov) > 0.05) {
      this.camera.fov = this.fov;
      this.camera.updateProjectionMatrix();
    }
  }

  /* ------- миникарта ------- */
  private mmBase: HTMLCanvasElement | null = null;
  private drawMinimap(t: number) {
    const cv = this.minimap;
    const g = cv.getContext('2d');
    if (!g) return;
    const W = cv.width, H = cv.height;
    if (!this.mmBase) this.mmBase = makeMinimapBase(W);
    g.clearRect(0, 0, W, H);
    g.drawImage(this.mmBase, 0, 0, W, H);
    const map = (v: number) => ((v + GROUND / 2) / GROUND) * W;

    /* пикапы */
    for (const p of this.pickups) {
      g.fillStyle = p.kind === 'cash' ? '#8dff57' : '#ff5566';
      g.beginPath();
      g.arc(map(p.x), map(p.z), p.kind === 'cash' ? 2 : 2.6, 0, Math.PI * 2);
      g.fill();
    }
    /* трафик */
    g.fillStyle = 'rgba(230,230,240,0.7)';
    for (const c of this.traffic) g.fillRect(map(c.x) - 1.5, map(c.z) - 1.5, 3, 3);
    /* копы */
    if (Math.floor(t * 5) % 2 === 0) {
      g.fillStyle = '#ff3355';
      for (const c of this.cops) { g.beginPath(); g.arc(map(c.x), map(c.z), 3.4, 0, Math.PI * 2); g.fill(); }
    }
    /* игрок */
    const px = map(this.player.x), pz = map(this.player.z);
    g.save();
    g.translate(px, pz);
    g.rotate(Math.PI - this.player.h);
    g.fillStyle = '#2de1fc';
    g.strokeStyle = '#0c0720';
    g.lineWidth = 1.4;
    g.beginPath();
    g.moveTo(0, -6.5); g.lineTo(4.6, 5.5); g.lineTo(0, 2.8); g.lineTo(-4.6, 5.5);
    g.closePath(); g.fill(); g.stroke();
    g.restore();
  }

  /* ------- HUD ------- */
  private pushHud() {
    const P = this.player;
    const sp = P.mode === 'car' && this.playerCar ? Math.hypot(this.playerCar.vx, this.playerCar.vz) : 0;
    const hud: HudState = {
      money: this.money,
      health: Math.ceil(P.health),
      wanted: this.wanted,
      speed: Math.round(sp * 3.6),
      mode: P.mode,
      time: Math.floor(this.time),
      prompt: this.prompt,
    };
    const json = JSON.stringify(hud);
    if (json !== this.lastHudJson) {
      this.lastHudJson = json;
      this.onHud(hud);
    }
  }
}
