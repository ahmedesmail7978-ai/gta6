/* WebAudio sound engine — все синтезируется на лету, без ассетов */

export class AudioFx {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineSub: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private sirenOsc: OscillatorNode | null = null;
  private sirenLfo: OscillatorNode | null = null;
  private sirenGain: GainNode | null = null;
  private skidSrc: AudioBufferSourceNode | null = null;
  private skidGain: GainNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private musicTimer: number | null = null;
  private step = 0;
  private nextNoteTime = 0;
  muted = false;

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.9;
    this.master.connect(this.ctx.destination);

    // noise buffer for crashes / skid / hats
    const len = this.ctx.sampleRate;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    // engine
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineSub = this.ctx.createOscillator();
    this.engineSub.type = 'square';
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.value = 0;
    const subGain = this.ctx.createGain();
    subGain.gain.value = 0.4;
    this.engineOsc.connect(this.engineFilter);
    this.engineSub.connect(subGain);
    subGain.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.master);
    this.engineOsc.start();
    this.engineSub.start();

    // siren
    this.sirenOsc = this.ctx.createOscillator();
    this.sirenOsc.type = 'triangle';
    this.sirenOsc.frequency.value = 720;
    this.sirenLfo = this.ctx.createOscillator();
    this.sirenLfo.type = 'square';
    this.sirenLfo.frequency.value = 1.4;
    const lfoDepth = this.ctx.createGain();
    lfoDepth.gain.value = 210;
    this.sirenLfo.connect(lfoDepth);
    lfoDepth.connect(this.sirenOsc.frequency);
    this.sirenGain = this.ctx.createGain();
    this.sirenGain.gain.value = 0;
    this.sirenOsc.connect(this.sirenGain);
    this.sirenGain.connect(this.master);
    this.sirenOsc.start();
    this.sirenLfo.start();

    // skid loop
    this.skidSrc = this.ctx.createBufferSource();
    this.skidSrc.buffer = this.noiseBuf;
    this.skidSrc.loop = true;
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 900;
    bp.Q.value = 0.8;
    this.skidGain = this.ctx.createGain();
    this.skidGain.gain.value = 0;
    this.skidSrc.connect(bp);
    bp.connect(this.skidGain);
    this.skidGain.connect(this.master);
    this.skidSrc.start();

    this.startMusic();
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.9, this.ctx.currentTime, 0.05);
    }
    return this.muted;
  }

  setEngine(norm: number, on: boolean) {
    if (!this.ctx || !this.engineOsc) return;
    const t = this.ctx.currentTime;
    const n = Math.max(0, Math.min(1, norm));
    this.engineOsc.frequency.setTargetAtTime(55 + n * 165, t, 0.06);
    this.engineSub!.frequency.setTargetAtTime(27 + n * 82, t, 0.06);
    this.engineFilter!.frequency.setTargetAtTime(320 + n * 900, t, 0.08);
    this.engineGain!.gain.setTargetAtTime(on ? 0.05 + n * 0.055 : 0, t, 0.09);
  }

  setSiren(level: number) {
    if (!this.ctx || !this.sirenGain) return;
    this.sirenGain.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * 0.075, this.ctx.currentTime, 0.15);
  }

  setSkid(on: boolean) {
    if (!this.ctx || !this.skidGain) return;
    this.skidGain.gain.setTargetAtTime(on ? 0.09 : 0, this.ctx.currentTime, 0.06);
  }

  private burst(dur: number, freq: number, gain: number, type: BiquadFilterType = 'lowpass') {
    if (!this.ctx || !this.noiseBuf || !this.master) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(60, freq * 0.15), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + dur + 0.02);
  }

  private tone(freq: number, dur: number, gain: number, type: OscillatorType = 'sine', when = 0, slideTo?: number) {
    if (!this.ctx || !this.master) return;
    const t = this.ctx.currentTime + when;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  crash(intensity: number) {
    const v = Math.min(1, intensity);
    this.burst(0.28 + v * 0.2, 700 + v * 500, 0.25 + v * 0.3);
    this.tone(70, 0.22, 0.25 + v * 0.2, 'sine', 0, 40);
  }
  thud() { this.burst(0.14, 400, 0.18); }
  cash() {
    this.tone(988, 0.09, 0.14, 'square');
    this.tone(1319, 0.14, 0.14, 'square', 0.07);
    this.tone(1976, 0.18, 0.1, 'square', 0.14);
  }
  health() { this.tone(523, 0.12, 0.12, 'triangle'); this.tone(784, 0.2, 0.12, 'triangle', 0.1); }
  starUp() { this.tone(420, 0.3, 0.16, 'sawtooth', 0, 130); this.burst(0.2, 900, 0.1, 'highpass'); }
  carjack() { this.tone(196, 0.16, 0.16, 'square'); this.tone(262, 0.22, 0.14, 'square', 0.12); }
  horn() { this.tone(392, 0.4, 0.1, 'square'); this.tone(494, 0.4, 0.1, 'square'); }
  explosion() {
    this.burst(0.9, 500, 0.5);
    this.tone(55, 0.8, 0.4, 'sine', 0, 28);
  }
  ui() { this.tone(660, 0.07, 0.08, 'square'); }

  /* ---- крошечный synthwave-луп ---- */
  private startMusic() {
    if (!this.ctx) return;
    this.nextNoteTime = this.ctx.currentTime + 0.1;
    const bass = [55, 55, 0, 55, 65.4, 0, 49, 55, 55, 55, 0, 55, 82.4, 0, 73.4, 65.4];
    const schedule = () => {
      if (!this.ctx) return;
      while (this.nextNoteTime < this.ctx.currentTime + 0.25) {
        const s = this.step % 16;
        const f = bass[s];
        if (f > 0) {
          this.tone(f, 0.22, 0.055, 'sawtooth', this.nextNoteTime - this.ctx.currentTime);
          this.tone(f / 2, 0.24, 0.05, 'triangle', this.nextNoteTime - this.ctx.currentTime);
        }
        if (s % 2 === 0) this.burstAt(this.nextNoteTime - this.ctx.currentTime, 0.03, 5000, s % 8 === 4 ? 0.05 : 0.022, 'highpass');
        if (s === 0 || s === 8) {
          const chord = s === 0 ? [220, 261.6, 329.6] : [196, 246.9, 293.7];
          for (const c of chord) this.tone(c, 1.6, 0.016, 'sawtooth', this.nextNoteTime - this.ctx.currentTime, c * 1.005);
        }
        this.nextNoteTime += 0.165;
        this.step++;
      }
    };
    this.musicTimer = window.setInterval(schedule, 90);
  }

  private burstAt(when: number, dur: number, freq: number, gain: number, type: BiquadFilterType) {
    if (!this.ctx || !this.noiseBuf || !this.master) return;
    const t = this.ctx.currentTime + Math.max(0, when);
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + dur + 0.02);
  }

  destroy() {
    if (this.musicTimer !== null) window.clearInterval(this.musicTimer);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
  }
}
