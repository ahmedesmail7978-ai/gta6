import * as THREE from 'three';

/* ------- константы сетки города ------- */
export const GRID = 6;            // кварталов по стороне
export const ROAD = 16;           // ширина дороги
export const CELL = 72;           // квартал + дорога
export const SPAN = GRID * CELL + ROAD; // 448
export const HALF = SPAN / 2;
export const GROUND = SPAN + 26;  // песчаная кромка

export const ROADS: number[] = [];
for (let i = 0; i <= GRID; i++) ROADS.push(-HALF + ROAD / 2 + i * CELL);
export const BLOCKS: number[] = [];
for (let i = 0; i < GRID; i++) BLOCKS.push(ROADS[i] + ROAD / 2 + (CELL - ROAD) / 2);

export interface AABB { x: number; z: number; hw: number; hd: number }

/* детерминированный рандом, чтобы город был одинаковым */
function mulberry(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PASTELS = [0xf7a8c4, 0x8fd6d0, 0xf6d488, 0xb5a8e0, 0x9ad0a0, 0xf0937e, 0x8fc3e8, 0xefd9c0, 0xf8c1d8, 0x9fe0b8];
const NEONS = [0xff2d78, 0x2de1fc, 0xffd23f, 0x8dff57, 0xc06bff, 0xff7a3d];

/* ------- карта (одна функция и для текстуры земли, и для миникарты) ------- */
function drawMap(size: number, detailed: boolean): HTMLCanvasElement {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d')!;
  const u = (v: number) => ((v + GROUND / 2) / GROUND) * size;
  const s = (v: number) => (v / GROUND) * size;

  g.fillStyle = '#e2cf9e'; // песок
  g.fillRect(0, 0, size, size);

  // кварталы
  const rnd = mulberry(42);
  for (const bx of BLOCKS) for (const bz of BLOCKS) {
    const park = rnd() < 0.18;
    const x0 = u(bx - (CELL - ROAD) / 2), y0 = u(bz - (CELL - ROAD) / 2), w = s(CELL - ROAD);
    g.fillStyle = park ? '#4f9e62' : '#c9c0b2';
    g.fillRect(x0, y0, w, w);
    if (!park) {
      g.fillStyle = '#b3a998';
      g.fillRect(x0 + s(4), y0 + s(4), w - s(8), w - s(8));
    } else {
      g.fillStyle = '#5fae6f';
      g.fillRect(x0 + s(3), y0 + s(3), w - s(6), w - s(6));
    }
  }

  // дороги
  g.fillStyle = '#262633';
  for (const c of ROADS) {
    g.fillRect(u(-GROUND / 2), u(c - ROAD / 2), size, s(ROAD));
    g.fillRect(u(c - ROAD / 2), u(-GROUND / 2), s(ROAD), size);
  }

  // разметка
  for (const c of ROADS) {
    g.strokeStyle = '#d8b93f';
    g.lineWidth = Math.max(1, s(0.5));
    g.setLineDash([s(5), s(5)]);
    g.beginPath(); g.moveTo(0, u(c)); g.lineTo(size, u(c)); g.stroke();
    g.beginPath(); g.moveTo(u(c), 0); g.lineTo(u(c), size); g.stroke();
  }
  g.setLineDash([]);

  // зебры на перекрёстках
  if (detailed) {
    g.fillStyle = 'rgba(235,235,240,0.75)';
    for (const ix of ROADS) for (const iz of ROADS) {
      for (let k = 0; k < 5; k++) {
        const off = -ROAD / 2 + 1.6 + k * 3.2;
        g.fillRect(u(ix + off), u(iz - ROAD / 2 - 3.4), s(1.6), s(3));
        g.fillRect(u(ix + off), u(iz + ROAD / 2 + 0.4), s(1.6), s(3));
        g.fillRect(u(ix - ROAD / 2 - 3.4), u(iz + off), s(3), s(1.6));
        g.fillRect(u(ix + ROAD / 2 + 0.4), u(iz + off), s(3), s(1.6));
      }
    }
  }
  return cv;
}

export function makeMinimapBase(size: number): HTMLCanvasElement {
  return drawMap(size, false);
}

/* ------- текстура окон для зданий ------- */
function windowTexture(): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = 64; cv.height = 128;
  const g = cv.getContext('2d')!;
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 64, 128);
  const rnd = mulberry(7);
  for (let y = 6; y < 128; y += 12) {
    for (let x = 5; x < 64; x += 11) {
      const lit = rnd();
      g.fillStyle = lit < 0.3 ? '#2a2440' : lit < 0.72 ? '#4a4262' : '#ffe6a8';
      g.fillRect(x, y, 7, 8);
    }
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export interface WorldRefs {
  colliders: AABB[];
  palmSpots: { x: number; z: number }[];
}

export function buildWorld(scene: THREE.Scene): WorldRefs {
  const colliders: AABB[] = [];
  const rnd = mulberry(2026);

  /* небо — градиентный купол заката */
  const skyCv = document.createElement('canvas');
  skyCv.width = 16; skyCv.height = 256;
  const sg = skyCv.getContext('2d')!;
  const grad = sg.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#1b0b3f');
  grad.addColorStop(0.42, '#5f1e78');
  grad.addColorStop(0.68, '#d94f8a');
  grad.addColorStop(0.86, '#ff8a5e');
  grad.addColorStop(1, '#ffc46b');
  sg.fillStyle = grad;
  sg.fillRect(0, 0, 16, 256);
  const skyTex = new THREE.CanvasTexture(skyCv);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(900, 24, 16),
    new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false })
  );
  scene.add(sky);

  /* солнце */
  const sunCv = document.createElement('canvas');
  sunCv.width = sunCv.height = 256;
  const sc = sunCv.getContext('2d')!;
  const sunGrad = sc.createRadialGradient(128, 128, 10, 128, 128, 128);
  sunGrad.addColorStop(0, 'rgba(255,246,214,1)');
  sunGrad.addColorStop(0.35, 'rgba(255,196,107,0.95)');
  sunGrad.addColorStop(0.7, 'rgba(255,120,140,0.35)');
  sunGrad.addColorStop(1, 'rgba(255,120,140,0)');
  sc.fillStyle = sunGrad;
  sc.fillRect(0, 0, 256, 256);
  const sunTex = new THREE.CanvasTexture(sunCv);
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, fog: false, depthWrite: false }));
  sun.position.set(-420, 95, -640);
  sun.scale.set(340, 340, 1);
  scene.add(sun);

  scene.fog = new THREE.Fog(0xe0795f, 150, 620);

  /* вода */
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(3200, 3200),
    new THREE.MeshLambertMaterial({ color: 0x1e5799, transparent: true, opacity: 0.94 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.42;
  scene.add(water);

  /* земля-остров */
  const groundTex = new THREE.CanvasTexture(drawMap(2048, true));
  groundTex.colorSpace = THREE.SRGBColorSpace;
  groundTex.anisotropy = 8;
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(GROUND, GROUND),
    new THREE.MeshLambertMaterial({ map: groundTex })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  /* свет */
  scene.add(new THREE.HemisphereLight(0xffc9e0, 0x4a2a6a, 1.0));
  const dir = new THREE.DirectionalLight(0xffd9a8, 1.55);
  dir.position.set(-180, 160, -220);
  scene.add(dir);

  /* ------- здания (instanced) ------- */
  interface B { x: number; z: number; w: number; d: number; h: number; c: number }
  const list: B[] = [];
  for (const bx of BLOCKS) for (const bz of BLOCKS) {
    if (rnd() < 0.18) continue; // парк
    const lots = 1 + Math.floor(rnd() * 2.4);
    const distC = Math.hypot(bx, bz);
    for (let i = 0; i < lots; i++) {
      const w = 13 + rnd() * 13;
      const d = 13 + rnd() * 13;
      const x = bx + (rnd() - 0.5) * (CELL - ROAD - w - 8);
      const z = bz + (rnd() - 0.5) * (CELL - ROAD - d - 8);
      const tall = Math.exp(-distC / 130);
      const h = 9 + rnd() * 14 + tall * (12 + rnd() * 26);
      const c = PASTELS[Math.floor(rnd() * PASTELS.length)];
      list.push({ x, z, w, d, h, c });
      colliders.push({ x, z, hw: w / 2 + 0.4, hd: d / 2 + 0.4 });
    }
  }
  const boxGeo = new THREE.BoxGeometry(1, 1, 1);
  boxGeo.translate(0, 0.5, 0);
  const bMat = new THREE.MeshLambertMaterial({ map: windowTexture() });
  const bMesh = new THREE.InstancedMesh(boxGeo, bMat, list.length);
  const m4 = new THREE.Matrix4();
  const col = new THREE.Color();
  list.forEach((b, i) => {
    m4.makeScale(b.w, b.h, b.d);
    m4.setPosition(b.x, 0, b.z);
    bMesh.setMatrixAt(i, m4);
    bMesh.setColorAt(i, col.setHex(b.c));
  });
  bMesh.instanceMatrix.needsUpdate = true;
  if (bMesh.instanceColor) bMesh.instanceColor.needsUpdate = true;
  scene.add(bMesh);

  /* неоновые вывески на фасадах */
  const neonCount = Math.min(40, list.length);
  const nMat = new THREE.MeshBasicMaterial({ toneMapped: false });
  const nMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), nMat, neonCount);
  const q = new THREE.Quaternion();
  const eul = new THREE.Euler();
  const scl = new THREE.Vector3();
  const pos = new THREE.Vector3();
  for (let i = 0; i < neonCount; i++) {
    const b = list[Math.floor(rnd() * list.length)];
    const side = Math.floor(rnd() * 4);
    const wSign = 3.5 + rnd() * 4.5;
    const hSign = 1 + rnd() * 1.1;
    const y = Math.min(b.h - 2, 3 + rnd() * Math.max(2, b.h * 0.7));
    scl.set(side % 2 === 0 ? wSign : 0.45, hSign, side % 2 === 0 ? 0.45 : wSign);
    pos.set(
      b.x + (side === 0 ? 0 : side === 1 ? b.w / 2 + 0.25 : side === 2 ? 0 : -b.w / 2 - 0.25),
      y,
      b.z + (side === 0 ? b.d / 2 + 0.25 : side === 1 ? 0 : side === 2 ? -b.d / 2 - 0.25 : 0)
    );
    eul.set(0, 0, 0);
    q.setFromEuler(eul);
    m4.compose(pos, q, scl);
    nMesh.setMatrixAt(i, m4);
    nMesh.setColorAt(i, col.setHex(NEONS[Math.floor(rnd() * NEONS.length)]));
  }
  nMesh.instanceMatrix.needsUpdate = true;
  if (nMesh.instanceColor) nMesh.instanceColor.needsUpdate = true;
  scene.add(nMesh);

  /* ------- пальмы ------- */
  const palmSpots: { x: number; z: number }[] = [];
  for (const bx of BLOCKS) for (const bz of BLOCKS) {
    const n = 2 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const edge = (CELL - ROAD) / 2 - 3;
      const px = bx + (rnd() - 0.5) * 2 * edge;
      const pz = bz + (rnd() - 0.5) * 2 * edge;
      palmSpots.push({ x: px, z: pz });
    }
  }
  // немного пальм на тротуарах у дорог
  for (let i = 0; i < 26; i++) {
    const rc = ROADS[Math.floor(rnd() * ROADS.length)];
    const along = -HALF + rnd() * SPAN;
    if (rnd() < 0.5) palmSpots.push({ x: along, z: rc + (rnd() < 0.5 ? 1 : -1) * (ROAD / 2 + 2.4) });
    else palmSpots.push({ x: rc + (rnd() < 0.5 ? 1 : -1) * (ROAD / 2 + 2.4), z: along });
  }
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.34, 6.4, 6);
  trunkGeo.translate(0, 3.2, 0);
  const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8a6242 });
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, palmSpots.length);
  const leafGeo = new THREE.PlaneGeometry(4.2, 1.25);
  leafGeo.translate(2.1, 0, 0);
  const leafMat = new THREE.MeshLambertMaterial({ color: 0x2f9e57, side: THREE.DoubleSide });
  const leaves = new THREE.InstancedMesh(leafGeo, leafMat, palmSpots.length * 3);
  palmSpots.forEach((p, i) => {
    const sc2 = 0.8 + rnd() * 0.5;
    const lean = (rnd() - 0.5) * 0.22;
    eul.set(lean, rnd() * Math.PI * 2, lean * 0.6);
    q.setFromEuler(eul);
    pos.set(p.x, 0, p.z);
    scl.set(sc2, sc2, sc2);
    m4.compose(pos, q, scl);
    trunks.setMatrixAt(i, m4);
    for (let l = 0; l < 3; l++) {
      eul.set(-0.28, rnd() * Math.PI * 2, 0.06);
      q.setFromEuler(eul);
      pos.set(p.x, 6.25 * sc2, p.z);
      m4.compose(pos, q, scl);
      leaves.setMatrixAt(i * 3 + l, m4);
    }
  });
  trunks.instanceMatrix.needsUpdate = true;
  leaves.instanceMatrix.needsUpdate = true;
  scene.add(trunks, leaves);

  /* ------- фонари на перекрёстках ------- */
  const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 7.4, 6);
  poleGeo.translate(0, 3.7, 0);
  const poleMat = new THREE.MeshLambertMaterial({ color: 0x3a3550 });
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, ROADS.length * ROADS.length);
  const headGeo = new THREE.SphereGeometry(0.42, 8, 8);
  const headMat = new THREE.MeshBasicMaterial({ color: 0xffe2a8, toneMapped: false });
  const heads = new THREE.InstancedMesh(headGeo, headMat, ROADS.length * ROADS.length);
  let li = 0;
  for (const ix of ROADS) for (const iz of ROADS) {
    const px = ix + ROAD / 2 + 1.6, pz = iz + ROAD / 2 + 1.6;
    m4.makeTranslation(px, 0, pz);
    poles.setMatrixAt(li, m4);
    m4.makeTranslation(px, 7.4, pz);
    heads.setMatrixAt(li, m4);
    li++;
  }
  poles.instanceMatrix.needsUpdate = true;
  heads.instanceMatrix.needsUpdate = true;
  scene.add(poles, heads);

  return { colliders, palmSpots };
}
