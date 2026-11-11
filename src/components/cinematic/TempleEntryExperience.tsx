import React, { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface TempleEntryExperienceProps {
  onEnter: () => void;
  onReplayJourney: () => void;
}

export const TempleEntryExperience: React.FC<TempleEntryExperienceProps> = ({ onEnter, onReplayJourney }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return <main
    className="fixed inset-0 z-50 overflow-hidden bg-[#030812] text-parchment"
    onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    onPointerMove={(event) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    }}
    aria-label="Ananta temple sanctuary"
  >
    <div className="absolute inset-0 overflow-hidden [perspective:1200px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#27436a_0%,#101c35_45%,#030812_100%)]" />
      {!imageFailed && <img
        src="/images/ananta-temple.png"
        alt=""
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageFailed(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[120ms] ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transform: `translate3d(${-pointer.x * 23}px, ${-pointer.y * 17}px, 0) rotateX(${pointer.y * 0.85}deg) rotateY(${-pointer.x * 1.15}deg) scale(1.09)`, transformOrigin: 'center center' }}
      />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/95 via-[#030812]/15 to-[#030812]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030812]/45 via-transparent to-[#030812]/10" />
      <div className="absolute inset-0 mix-blend-screen opacity-70 transition-opacity duration-300" style={{ background: `radial-gradient(ellipse at ${50 + pointer.x * 8}% ${43 + pointer.y * 8}%, rgba(255,190,106,.12), transparent 38%)` }} />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_35px_rgba(1,5,14,.6)]" />
    </div>

    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10">
      <div className="font-cinzel text-xs font-semibold tracking-[.34em] text-gold-light">ANANTA</div>
      <button onClick={onReplayJourney} className="flex items-center gap-2 border border-gold-light/25 bg-[#06101c]/30 px-3 py-2 text-[9px] uppercase tracking-[.2em] text-parchment/75 backdrop-blur-sm transition-colors hover:border-gold-light/60 hover:text-gold-light">
        <RotateCcw className="h-3 w-3" /> Replay the journey
      </button>
    </header>

    <section className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pb-12 sm:px-12 sm:pb-16 lg:px-20">
      <span className="mb-4 text-[9px] uppercase tracking-[.38em] text-gold-light/75">The living universe of Ananta</span>
      <h1 className="max-w-3xl font-cinzel text-3xl font-semibold leading-tight tracking-[.08em] text-[#fff3d6] drop-shadow-[0_2px_24px_rgba(0,0,0,.8)] sm:text-5xl lg:text-6xl">
        Enter the sanctuary
      </h1>
      <p className="mt-4 max-w-xl font-cormorant text-lg text-parchment/85 drop-shadow-[0_2px_14px_rgba(0,0,0,.9)] sm:text-xl">
        A living archive of sacred stories, cosmic worlds, and timeless wisdom.
      </p>
      <button onClick={onEnter} className="mt-7 inline-flex items-center gap-3 border border-gold-light/70 bg-[#130f10]/55 px-6 py-3 font-cinzel text-[10px] uppercase tracking-[.24em] text-gold-light backdrop-blur-sm transition-all hover:border-gold-radiant hover:bg-[#23180e]/80 hover:shadow-[0_0_35px_rgba(219,174,83,.22)]">
        Explore Ananta <ArrowRight className="h-4 w-4" />
      </button>
      {!imageLoaded && !imageFailed && <p className="mt-4 text-[9px] tracking-[.15em] text-parchment/45">Preparing the sanctuary…</p>}
    </section>
  </main>;
};
