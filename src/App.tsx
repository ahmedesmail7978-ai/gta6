import { useEffect, useRef, useState } from 'react';
import { Game, type HudState, type RunStats } from './game/engine';

type Screen = 'menu' | 'playing' | 'paused' | 'busted' | 'wasted' | 'passed';
interface Toast { id: number; text: string; color: string }

const fmtTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

/* ---------- иконки (inline SVG, без эмодзи) ---------- */
const StarIcon = ({ on, size = 26 }: { on: boolean; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={on ? 'star-anim' : ''}>
    <path
      d="M12 1.8l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z"
      fill={on ? '#ff2d78' : 'rgba(255,255,255,0.14)'}
      stroke={on ? '#ffd0e2' : 'rgba(255,255,255,0.25)'}
      strokeWidth="1"
      style={on ? { filter: 'drop-shadow(0 0 7px rgba(255,45,120,0.95))' } : undefined}
    />
  </svg>
);
const DollarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8dff57" strokeWidth="2.4" strokeLinecap="round">
    <path d="M12 2.5v19M16.5 6.5c-.8-1.6-2.5-2.3-4.5-2.3-2.5 0-4.3 1.3-4.3 3.4 0 4.7 9.4 2.4 9.4 7.3 0 2.3-2 3.6-4.9 3.6-2.3 0-4.2-.9-5-2.7" />
  </svg>
);
const SpeakerIcon = ({ muted }: { muted: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
    {muted ? <path d="M16 9l6 6M22 9l-6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a9 9 0 0 1 0 12" />}
  </svg>
);
const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 3.8v16.4L20.2 12z" /></svg>
);

const Palm = ({ x, flip = false, s = 1 }: { x: number; flip?: boolean; s?: number }) => (
  <svg
    className="absolute bottom-0"
    style={{ left: `${x}%`, transform: `scale(${flip ? -s : s}, ${s})`, transformOrigin: 'bottom center' }}
    width="120" height="150" viewBox="0 0 120 150" fill="none"
  >
    <path d="M56 150c4-38-6-66 4-104" stroke="#0c0720" strokeWidth="9" strokeLinecap="round" />
    <g stroke="#0c0720" strokeWidth="7" strokeLinecap="round">
      <path d="M60 46C44 30 24 26 8 34" />
      <path d="M60 46C50 24 34 14 16 14" />
      <path d="M60 46C62 22 74 8 94 6" />
      <path d="M60 46C78 32 98 30 114 40" />
      <path d="M60 46C72 52 84 64 88 80" />
      <path d="M60 46C48 52 38 62 34 78" />
    </g>
  </svg>
);

const CONTROLS: [string, string][] = [
  ['W A S D', 'движение / руль'],
  ['SHIFT', 'бег (пешком)'],
  ['SPACE', 'прыжок / ручник'],
  ['F', 'угнать тачку / выйти'],
  ['H', 'сигнал (в машине)'],
  ['ESC', 'пауза'],
  ['M', 'звук вкл/выкл'],
];

function KeyRow({ keys, label }: { keys: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1 min-w-[110px]">
        {keys.split(' ').map((k) => <span key={k} className="key-cap">{k}</span>)}
      </div>
      <span className="text-[13px] text-white/75 italic">{label}</span>
    </div>
  );
}

function StatBlock({ stats }: { stats: RunStats }) {
  return (
    <div className="vice-panel px-6 py-4">
      <div className="unskew flex items-center gap-8">
        <div>
          <div className="text-[11px] tracking-[0.22em] text-white/50 font-bold">НА СОБРАНИИ</div>
          <div className="font-display text-3xl text-vice-lime">${stats.money}</div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.22em] text-white/50 font-bold">ВРЕМЯ</div>
          <div className="font-display text-3xl text-vice-cyan">{fmtTime(stats.time)}</div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.22em] text-white/50 font-bold">РОЗЫСК</div>
          <div className="flex gap-0.5 mt-1">
            {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} on={i < stats.wanted} size={20} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- скорость ---------- */
function Speedo({ kmh }: { kmh: number }) {
  const a = -115 + (Math.min(kmh, 175) / 175) * 230;
  return (
    <div className="vice-panel px-4 pt-3 pb-2">
      <div className="unskew flex items-end gap-3">
        <svg width="104" height="64" viewBox="0 0 104 64">
          <path d="M10 58 A 44 44 0 1 1 94 58" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="7" strokeLinecap="round" />
          <path d="M10 58 A 44 44 0 1 1 94 58" fill="none" stroke="#ff2d78" strokeWidth="7" strokeLinecap="round"
            strokeDasharray={`${(Math.min(kmh, 175) / 175) * 150} 400`} style={{ filter: 'drop-shadow(0 0 5px rgba(255,45,120,0.8))' }} />
          <g transform={`rotate(${a} 52 56)`}>
            <rect x="50.6" y="18" width="2.8" height="38" rx="1.4" fill="#2de1fc" />
          </g>
          <circle cx="52" cy="56" r="5" fill="#2de1fc" />
        </svg>
        <div className="pb-1">
          <div className="font-display text-3xl leading-none text-white hud-shadow tabular-nums">{kmh}</div>
          <div className="text-[10px] tracking-[0.3em] text-vice-cyan font-bold">КМ/Ч</div>
        </div>
      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const minimapRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const toastId = useRef(0);

  const [screen, setScreen] = useState<Screen>('menu');
  const [hud, setHud] = useState<HudState>({ money: 0, health: 100, wanted: 0, speed: 0, mode: 'foot', time: 0, prompt: '' });
  const [stats, setStats] = useState<RunStats>({ money: 0, time: 0, wanted: 0 });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !minimapRef.current) return;
    const game = new Game(containerRef.current, minimapRef.current, {
      onHud: (h) => setHud(h),
      onEvent: (e) => {
        if (e.type === 'toast') {
          const id = ++toastId.current;
          setToasts((t) => [...t.slice(-3), { id, text: e.text, color: e.color }]);
          window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 1900);
        } else if (e.type === 'busted') { setStats(e.stats); setScreen('busted'); }
        else if (e.type === 'wasted') { setStats(e.stats); setScreen('wasted'); }
        else if (e.type === 'passed') { setStats(e.stats); setScreen('passed'); }
        else if (e.type === 'pause') setScreen(e.paused ? 'paused' : 'playing');
        else if (e.type === 'mute') setMuted(e.muted);
      },
    });
    gameRef.current = game;
    return () => { game.destroy(); gameRef.current = null; };
  }, []);

  const g = () => gameRef.current;

  return (
    <div className="relative h-full w-full overflow-hidden select-none bg-vice-navy font-body">
      {/* 3D-сцена */}
      <div ref={containerRef} className="absolute inset-0" />

      {/* атмосфера поверх */}
      <div className="vignette absolute inset-0 z-10 pointer-events-none" />
      <div className="scanlines absolute inset-0 z-10 pointer-events-none opacity-[0.22]" />

      {/* ================= HUD ================= */}
      <div className={`absolute inset-0 z-20 pointer-events-none ${screen === 'menu' ? 'hidden' : ''}`}>
        {/* деньги + здоровье */}
        <div className="absolute top-4 left-4 flex flex-col gap-2.5">
          <div className="vice-panel px-5 py-2.5">
            <div className="unskew flex items-center gap-2.5">
              <DollarIcon />
              <span className="font-display text-[30px] leading-none text-vice-lime hud-shadow tabular-nums">{hud.money}</span>
              <span className="text-[10px] font-bold tracking-widest text-white/40 self-end pb-0.5">/ 5000</span>
            </div>
          </div>
          <div className="vice-panel px-4 py-2.5" style={{ borderLeftColor: '#ff2d78' }}>
            <div className="unskew w-[190px]">
              <div className="flex justify-between text-[10px] font-bold tracking-[0.25em] text-white/55 mb-1">
                <span>ЗДОРОВЬЕ</span><span className="tabular-nums">{hud.health}</span>
              </div>
              <div className="h-[10px] bg-black/60 border border-white/15 overflow-hidden">
                <div
                  className={`h-full transition-all duration-200 ${hud.health < 30 ? 'pulse-warn' : ''}`}
                  style={{
                    width: `${hud.health}%`,
                    background: hud.health > 55 ? 'linear-gradient(90deg,#ff2d78,#ff7aa8)' : hud.health > 28 ? 'linear-gradient(90deg,#ffb14e,#ffd23f)' : 'linear-gradient(90deg,#ff3344,#ff6a3d)',
                    boxShadow: '0 0 12px rgba(255,45,120,0.6)',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-[11px] font-bold tracking-[0.25em] text-white/40 pl-1 tabular-nums">{fmtTime(hud.time)}</div>
        </div>

        {/* розыск + звук */}
        <div className="absolute top-4 right-4 flex items-start gap-2">
          <div className="vice-panel px-4 py-2.5">
            <div className="unskew">
              <div className="text-[10px] font-bold tracking-[0.25em] text-white/50 mb-1 text-right">РОЗЫСК</div>
              <div className="flex gap-1" key={hud.wanted}>
                {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} on={i < hud.wanted} />)}
              </div>
            </div>
          </div>
          <button
            onClick={() => g()?.toggleMute()}
            className={`vice-panel px-3 py-3 pointer-events-auto cursor-pointer text-white/80 hover:text-vice-cyan`}
            style={{ borderLeftColor: '#2de1fc' }}
            title="Звук (M)"
          >
            <div className="unskew"><SpeakerIcon muted={muted} /></div>
          </button>
        </div>

        {/* миникарта */}
        <div className="absolute bottom-4 left-4">
          <div className="vice-panel p-2" style={{ borderLeftColor: '#2de1fc' }}>
            <div className="unskew">
              <canvas ref={minimapRef} width={176} height={176} className="block w-[176px] h-[176px] border border-cyan-300/25" />
              <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-white/45 text-center">ВИЦЕ-СИТИ</div>
            </div>
          </div>
        </div>

        {/* скорость / режим */}
        <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2">
          {hud.mode === 'car' ? (
            <Speedo kmh={hud.speed} />
          ) : (
            <div className="vice-panel px-4 py-2">
              <div className="unskew font-display text-sm text-vice-cyan tracking-wide">ПЕШКОМ</div>
            </div>
          )}
        </div>

        {/* подсказка */}
        {hud.prompt && (
          <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2">
            <div className="vice-panel px-6 py-2.5" style={{ borderLeftColor: '#8dff57' }}>
              <div className="unskew font-display text-lg text-white hud-shadow whitespace-nowrap">{hud.prompt}</div>
            </div>
          </div>
        )}
      </div>

      {/* тосты */}
      <div className="absolute top-[12%] left-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className="toast-anim font-display text-2xl hud-shadow" style={{ color: t.color }}>
            {t.text}
          </div>
        ))}
      </div>

      {/* ================= СТАРТОВЫЙ ЭКРАН ================= */}
      {screen === 'menu' && (
        <div className="absolute inset-0 z-30 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(22,10,48,0.55) 0%, rgba(22,10,48,0.72) 55%, rgba(12,7,32,0.94) 100%)' }}>
          {/* солнце и пальмы */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-190px] w-[460px] h-[460px] rounded-full opacity-90"
            style={{ background: 'linear-gradient(180deg,#ffe3a3 0%,#ffb14e 45%,#ff5e8a 100%)' }}>
            <div className="sun-stripes absolute inset-0 rounded-full" />
          </div>
          <Palm x={3} s={1.15} />
          <Palm x={12} flip s={0.8} />
          <Palm x={86} flip s={1.2} />
          <Palm x={94} s={0.75} />

          <div className="relative z-10 h-full max-w-6xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* логотип */}
            <div className="float-slow text-center lg:text-left">
              <div className="font-display text-[13px] tracking-[0.55em] text-vice-cyan mb-2">GRAND THEFT AUTO</div>
              <h1 className="font-display title-vice text-white leading-[0.9] text-[88px] sm:text-[124px]">GTA&nbsp;VI</h1>
              <div className="inline-block mt-3 bg-vice-cyan text-vice-navy font-display text-xl sm:text-2xl px-5 py-1.5" style={{ transform: 'skewX(-8deg)' }}>
                <span className="inline-block" style={{ transform: 'skewX(8deg)' }}>VICE ROULETTE</span>
              </div>
              <p className="mt-5 max-w-md text-white/80 text-[15px] leading-relaxed italic mx-auto lg:mx-0">
                Фанатское 3D-демо по мотивам: угоняй тачки, собирай кэш по всему острову
                и уходи от погони под неоном закатного Vice-города.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="bg-vice-pink text-white font-display text-sm px-4 py-2" style={{ transform: 'skewX(-8deg)', boxShadow: '0 5px 0 rgba(0,0,0,0.4)' }}>
                  <span className="inline-block" style={{ transform: 'skewX(8deg)' }}>ЦЕЛЬ: СОБРАТЬ $5000</span>
                </div>
                <div className="bg-white/10 border border-white/25 text-white/85 font-display text-sm px-4 py-2" style={{ transform: 'skewX(-8deg)' }}>
                  <span className="inline-block" style={{ transform: 'skewX(8deg)' }}>5 ЗВЕЗД = ХАОС</span>
                </div>
              </div>
              <button
                onClick={() => { g()?.start(); setScreen('playing'); }}
                className="btn-vice mt-8 bg-vice-pink text-white text-2xl px-12 py-4 cursor-pointer"
              >
                <span className="flex items-center gap-3"><PlayIcon /> НАЧАТЬ ИГРУ</span>
              </button>
              <div className="mt-3 text-[11px] text-white/45 tracking-wider">звук включится после старта · M — без звука</div>
            </div>

            {/* управление */}
            <div className="vice-panel px-7 py-6 w-[340px] shrink-0">
              <div className="unskew">
                <div className="font-display text-vice-cyan text-lg mb-4 tracking-wide">УПРАВЛЕНИЕ</div>
                <div className="flex flex-col gap-2.5">
                  {CONTROLS.map(([k, l]) => <KeyRow key={k} keys={k} label={l} />)}
                </div>
                <div className="mt-5 pt-4 border-t border-white/15 text-[12px] text-white/60 italic leading-relaxed">
                  Подойди к любой тачке и жми <span className="key-cap !text-[9px]">F</span> — розыск растёт,
                  копы выезжают. Задержат — потеряешь 10% кэша.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= ПАУЗА ================= */}
      {screen === 'paused' && (
        <div className="absolute inset-0 z-30 bg-black/65 flex items-center justify-center">
          <div className="text-center">
            <div className="font-display text-7xl text-white title-vice mb-8">ПАУЗА</div>
            <div className="flex flex-col items-center gap-4">
              <button onClick={() => g()?.resume()} className="btn-vice bg-vice-pink text-white text-xl px-10 py-3.5 cursor-pointer">
                <span>ПРОДОЛЖИТЬ</span>
              </button>
              <button onClick={() => { g()?.toMenu(); setScreen('menu'); }} className="btn-vice bg-vice-cyan text-vice-navy text-xl px-10 py-3.5 cursor-pointer">
                <span>В МЕНЮ</span>
              </button>
            </div>
            <div className="mt-8 text-[12px] text-white/50 tracking-widest">ESC — ВЕРНУТЬСЯ В ИГРУ</div>
          </div>
        </div>
      )}

      {/* ================= ЗАДЕРЖАН ================= */}
      {screen === 'busted' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: 'rgba(8,18,58,0.8)' }}>
          <div className="text-center">
            <div className="stamp-anim font-display text-[84px] sm:text-[110px] leading-none text-[#9fc4ff] inline-block border-[6px] border-[#9fc4ff] px-8 py-3"
              style={{ textShadow: '0 0 34px rgba(90,140,255,0.9)' }}>
              ЗАДЕРЖАН
            </div>
            <div className="mt-6 text-white/70 italic">Копы прижали тебя к обочине. Штраф — 10% кэша.</div>
            <div className="mt-6 flex justify-center"><StatBlock stats={stats} /></div>
            <button onClick={() => { g()?.respawn(); setScreen('playing'); }} className="btn-vice mt-8 bg-[#4a7dff] text-white text-xl px-10 py-3.5 cursor-pointer">
              <span>ВЫЙТИ ИЗ УЧАСТКА</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= ПОТРАЧЕНО ================= */}
      {screen === 'wasted' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: 'rgba(48,4,12,0.82)' }}>
          <div className="text-center">
            <div className="stamp-anim font-display text-[84px] sm:text-[110px] leading-none text-[#ff4455] inline-block border-[6px] border-[#ff4455] px-8 py-3"
              style={{ textShadow: '0 0 34px rgba(255,50,70,0.9)' }}>
              ПОТРАЧЕНО
            </div>
            <div className="mt-6 text-white/70 italic">Тачка разбита, ты в больнице. Лечение — 15% кэша.</div>
            <div className="mt-6 flex justify-center"><StatBlock stats={stats} /></div>
            <button onClick={() => { g()?.respawn(); setScreen('playing'); }} className="btn-vice mt-8 bg-vice-pink text-white text-xl px-10 py-3.5 cursor-pointer">
              <span>РЕСПАВН</span>
            </button>
          </div>
        </div>
      )}

      {/* ================= МИССИЯ ВЫПОЛНЕНА ================= */}
      {screen === 'passed' && (
        <div className="absolute inset-0 z-30 flex items-center justify-center" style={{ background: 'rgba(6,34,18,0.82)' }}>
          <div className="text-center">
            <div className="stamp-anim font-display text-[52px] sm:text-[76px] leading-none text-vice-lime inline-block border-[6px] border-vice-lime px-8 py-4"
              style={{ textShadow: '0 0 34px rgba(141,255,87,0.9)' }}>
              МИССИЯ ВЫПОЛНЕНА
            </div>
            <div className="mt-6 text-white/75 italic">$5000 в кармане, плюс бонус $1000 за стиль. Город теперь твой.</div>
            <div className="mt-6 flex justify-center"><StatBlock stats={stats} /></div>
            <div className="mt-8 flex gap-4 justify-center">
              <button onClick={() => { g()?.continueAfterPassed(); setScreen('playing'); }} className="btn-vice bg-vice-lime text-vice-navy text-xl px-8 py-3.5 cursor-pointer">
                <span>ГУЛЯТЬ ДАЛЬШЕ</span>
              </button>
              <button onClick={() => { g()?.restartFull(); setScreen('playing'); }} className="btn-vice bg-white/15 text-white text-xl px-8 py-3.5 cursor-pointer" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
                <span>С НАЧАЛА</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
