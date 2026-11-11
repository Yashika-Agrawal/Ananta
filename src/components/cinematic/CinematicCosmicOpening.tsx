import React, { useState, useEffect, useRef } from 'react';
import { CosmicVoidCanvas } from './CosmicVoidCanvas';
import { SacredBowTrigger } from './SacredBowTrigger';
import { ScripturalDrawer } from './ScripturalDrawer';
import { soundEngine } from '../../services/soundEngine';
import { Volume2, VolumeX, Sparkles, BookOpen, RotateCcw, ArrowRight } from 'lucide-react';

interface CinematicCosmicOpeningProps {
  onEnterUniverse?: () => void;
  reducedMotion?: boolean;
}

export const CinematicCosmicOpening: React.FC<CinematicCosmicOpeningProps> = ({
  onEnterUniverse,
  reducedMotion = false,
}) => {
  const [stage, setStage] = useState<'void' | 'warping' | 'awakened'>('void');
  const [warpIntensity, setWarpIntensity] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundEngine.getMuted());
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [narrationIndex, setNarrationIndex] = useState<number>(0);
  const [isTextTransitioning, setIsTextTransitioning] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const awakenTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  const narrationLines = [
    {
      text: "Before creation, before time itself... there was neither light nor darkness, only infinite stillness.",
      subtext: "The primordial unmanifested realm — Rigveda 10.129",
    },
    {
      text: "From that silent depth, the first conscious vibration awoke. The cosmic breath breathed life into the universe.",
      subtext: "The awakening of cosmic creation — Chandogya Upanishad",
    },
    {
      text: "You have crossed the wheel of time. Welcome into the living universe of Ananta.",
      subtext: "Step into sacred sagas, timeless realms, and profound wisdom.",
    },
  ];

  useEffect(() => {
    const unsub = soundEngine.subscribe((muted) => setIsMuted(muted));
    return () => {
      unsub();
      soundEngine.stopNarration();
      if (awakenTimerRef.current) clearTimeout(awakenTimerRef.current);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);

  const handleTensionChange = (tension: number) => {
    if (stage === 'void') {
      setWarpIntensity(tension * 0.3);
    }
  };

  const handleAwaken = () => {
    setStage('warping');
    setWarpIntensity(1.0);

    soundEngine.speakNarration(narrationLines[0].text);

    if (awakenTimerRef.current) clearTimeout(awakenTimerRef.current);
    awakenTimerRef.current = window.setTimeout(() => {
      setStage('awakened');
      // Calm target: 0.05 gives a serene, slow starlight drift
      setWarpIntensity(0.05);
    }, 2400);
  };

  const handleToggleSound = () => {
    const active = soundEngine.toggleMute();
    setIsMuted(!active);
  };

  const handleNextNarration = () => {
    if (narrationIndex < narrationLines.length - 1) {
      setIsTextTransitioning(true);
      setTimeout(() => {
        const nextIdx = narrationIndex + 1;
        setNarrationIndex(nextIdx);
        setIsTextTransitioning(false);
        soundEngine.speakNarration(narrationLines[nextIdx].text);
      }, 350);
    } else if (onEnterUniverse) {
      soundEngine.stopNarration();
      setIsExiting(true);
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      exitTimerRef.current = window.setTimeout(() => {
        onEnterUniverse();
      }, 600);
    }
  };

  const handleReset = () => {
    soundEngine.stopNarration();
    if (awakenTimerRef.current) clearTimeout(awakenTimerRef.current);
    setStage('void');
    setWarpIntensity(0);
    setNarrationIndex(0);
  };

  return (
    <div className={`relative w-screen h-dvh overflow-hidden bg-cosmos-void text-parchment select-none transition-opacity duration-700 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* 1. Deep 3D Three.js Star Tunnel & Warp Canvas */}
      <CosmicVoidCanvas warpIntensity={warpIntensity} reducedMotion={reducedMotion} />

      {/* 2. Top Minimalist Controls Bar */}
      <header className="relative z-30 flex items-center justify-between p-6 sm:p-8">
        
        {/* Sacred Brand Mark */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-gold-antique/60 flex items-center justify-center bg-cosmos-midnight/80 backdrop-blur-md">
            <span className="font-cinzel text-gold-radiant text-xs font-semibold">A</span>
          </div>
          <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-sacred-gold uppercase">
            ANANTA
          </span>
        </div>

        {/* Ambient Audio & Scriptural Reference Toggle */}
        <div className="flex items-center space-x-3">
          {stage === 'awakened' && (
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-3 py-1.5 rounded-sm border border-gold-antique/40 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all shadow-gold-subtle"
            >
              <BookOpen className="w-3.5 h-3.5 text-gold-antique" />
              <span className="hidden sm:inline">Scriptural Sources</span>
            </button>
          )}

          <button
            onClick={handleToggleSound}
            className="p-2 rounded-full border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique transition-all"
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
            aria-label="Toggle ambient sound"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold-radiant" />}
          </button>
        </div>
      </header>

      {/* 3. Stage 1: The Cosmic Threshold & Interactive Bowstring */}
      {stage === 'void' && (
        <div className="relative z-20 h-[calc(100dvh-160px)] flex flex-col items-center justify-center px-4 animate-fade-in">
          
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="inline-block px-3 py-1 rounded-full border border-gold-antique/25 bg-cosmos-surface/80 text-[10px] font-sans tracking-[0.25em] text-gold-light uppercase mb-4">
              Prologue • Beyond Time
            </span>
            <h1 className="text-4xl sm:text-6xl font-cinzel font-black tracking-[0.22em] text-sacred-gold mb-3">
              ANANTA
            </h1>
            <p className="font-cormorant italic text-gold-deep text-lg sm:text-xl tracking-wider">
              "Beyond creation. Beyond time. The infinite universe of wisdom."
            </p>
          </div>

          {/* The Physical Interactive Bowstring */}
          <SacredBowTrigger
            onTensionChange={handleTensionChange}
            onAwaken={handleAwaken}
          />
        </div>
      )}

      {/* 4. Stage 2: Hyperspace Warp Transition Overlay */}
      {stage === 'warping' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none animate-fade-in">
          <div className="w-48 h-48 rounded-full bg-gold-radiant/20 blur-3xl animate-ping" />
          <span className="font-cinzel text-lg sm:text-2xl text-sacred-gold tracking-[0.4em] uppercase animate-pulse">
            Crossing Time...
          </span>
        </div>
      )}

      {/* 5. Stage 3: The Awakened Cosmic Narrative Experience */}
      {stage === 'awakened' && (
        <div className="relative z-20 h-[calc(100dvh-160px)] flex flex-col items-center justify-center px-4 text-center max-w-3xl mx-auto">
          
          <div className="p-8 sm:p-12 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/30 backdrop-blur-xl shadow-gold-glow animate-fade-in">
            
            <span className="inline-flex items-center gap-1.5 text-xs text-gold-deep font-sans tracking-[0.3em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
              <span>Cosmic Prologue • Part {narrationIndex + 1} of {narrationLines.length}</span>
            </span>

            {/* Narrated Text with crossfade & aria-live for screen readers */}
            <div 
              aria-live="polite" 
              className={`transition-all duration-300 ${isTextTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
            >
              <p className="font-cinzel text-xl sm:text-3xl text-gold-radiant font-bold leading-relaxed mb-4">
                "{narrationLines[narrationIndex].text}"
              </p>

              <p className="font-cormorant italic text-sm sm:text-base text-parchment-muted mb-8">
                {narrationLines[narrationIndex].subtext}
              </p>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleNextNarration}
                className="w-full sm:w-auto px-7 py-3 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-gold-subtle transition-all flex items-center justify-center space-x-2"
              >
                <span>{narrationIndex < narrationLines.length - 1 ? 'Continue Journey' : 'Enter Sacred Sagas'}</span>
                <ArrowRight className="w-4 h-4 text-cosmos-void" />
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-sm border border-cosmos-border text-parchment-muted hover:border-gold-antique/40 hover:text-parchment text-xs font-sans tracking-wide transition-all flex items-center justify-center space-x-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-draw the Chord</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Scriptural Evidence Drawer */}
      <ScripturalDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Nasadiya Sukta — The Hymn of Creation"
        devanagariTitle="नासदीय सूक्तम् — ऋग्वेद मण्डल १०, सूक्त १२९"
        sanskritVerse={`नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।
किमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥ १ ॥

nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat |
kim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṃ gabhīram || 1 ||`}
        sourceText="Rigveda Samhita, Mandala 10, Sukta 129, Verse 1"
        traditionalPurport="There was neither non-existence nor existence then; there was neither the realm of space, nor the sky beyond it. What was enclosed, and where, or in whose protection? Supreme consciousness alone breathed calmly by its own intrinsic power before creation began."
        philosophicalContext="In traditional Vedic cosmology, the unmanifested state (Pralaya) precedes cosmic manifestation (Srishti). This is not a void of nothingness, but the quiet stillness of Brahman holding infinite potential."
      />
    </div>
  );
};
