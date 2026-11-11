import React, { useState, useEffect } from 'react';
import { Scene3DEnvironment } from './Scene3DEnvironment';
import { ScripturalDrawer } from './ScripturalDrawer';
import { soundEngine } from '../../services/soundEngine';
import { DHRUVA_CINEMATIC_STORY, CinematicScene } from '../../data/dhruvaExperience';
import { 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Flame, 
  Wind, 
  Compass, 
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface DhruvaCinematicExperienceProps {
  onBackToGateway: () => void;
}

export const DhruvaCinematicExperience: React.FC<DhruvaCinematicExperienceProps> = ({
  onBackToGateway,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundEngine.getMuted());

  useEffect(() => {
    return soundEngine.subscribe((muted) => setIsMuted(muted));
  }, []);

  // Scene 2 Interaction: Mist clearing
  const [mistOpacity, setMistOpacity] = useState<number>(1.0);

  // Scene 3 Interaction: Chanting syllables sequence
  const mantraSyllables = ['Om', 'Na', 'Mo', 'Bha', 'Ga', 'Va', 'Te', 'Va', 'Su', 'De', 'Va', 'Ya'];
  const [syllablesChanted, setSyllablesChanted] = useState<number>(0);

  // Scene 4 Interaction: Breath hold for Tapasya
  const [isHoldingBreath, setIsHoldingBreath] = useState<boolean>(false);
  const [breathHoldProgress, setBreathHoldProgress] = useState<number>(0);

  const scene: CinematicScene = DHRUVA_CINEMATIC_STORY.scenes[currentSceneIndex];

  // Auto-speak English narration when entering a new scene
  useEffect(() => {
    soundEngine.speakNarration(scene.narration);
    // Reset scene-specific interactions
    setMistOpacity(1.0);
    setSyllablesChanted(0);
    setBreathHoldProgress(0);
    setIsHoldingBreath(false);
  }, [currentSceneIndex, scene.narration]);

  // Breath hold timer effect for Act IV
  useEffect(() => {
    let interval: number;
    if (isHoldingBreath && scene.interactionType === 'hold-breath') {
      interval = window.setInterval(() => {
        setBreathHoldProgress((prev) => {
          const next = prev + 0.04;
          if (next >= 1.0) {
            soundEngine.playBowRelease(); // Bell chime when cosmic stillness achieved
            return 1.0;
          }
          return next;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isHoldingBreath, scene.interactionType]);

  const handleNextScene = () => {
    if (currentSceneIndex < DHRUVA_CINEMATIC_STORY.scenes.length - 1) {
      soundEngine.playBowRelease();
      setCurrentSceneIndex((prev) => prev + 1);
    }
  };

  const handlePrevScene = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex((prev) => prev - 1);
    }
  };

  const handleToggleSound = () => {
    const active = soundEngine.toggleMute();
    setIsMuted(!active);
  };

  // Check if current scene interaction is satisfied to unlock the next step
  const isInteractionCompleted = (): boolean => {
    if (scene.interactionType === 'drag-mist') return mistOpacity <= 0.25;
    if (scene.interactionType === 'chant-syllables') return syllablesChanted >= mantraSyllables.length;
    if (scene.interactionType === 'hold-breath') return breathHoldProgress >= 0.95;
    return true; // For tap-to-step and gaze-polestar
  };

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-cosmos-void text-parchment select-none">
      
      {/* 1. Dynamic 3D Environment (Forest fireflies, Tapasya fire, or Pole Star sky) */}
      <Scene3DEnvironment
        environment={scene.environment}
        breathHoldLevel={breathHoldProgress}
      />

      {/* 2. Top Minimalist Header */}
      <header className="relative z-30 flex items-center justify-between p-6 sm:p-8">
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToGateway}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-sm border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-xs font-sans text-parchment-muted hover:text-gold-light hover:border-gold-antique transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Cosmic Gateways</span>
          </button>

          <div className="hidden md:flex flex-col">
            <span className="font-cinzel text-xs font-bold tracking-[0.25em] text-sacred-gold uppercase">
              {DHRUVA_CINEMATIC_STORY.title}
            </span>
            <span className="text-[10px] text-parchment-muted">
              {scene.stageName} • Scene {currentSceneIndex + 1} of {DHRUVA_CINEMATIC_STORY.scenes.length}
            </span>
          </div>
        </div>

        {/* Scriptural Evidence & Audio Toggles */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-3 py-1.5 rounded-sm border border-gold-antique/40 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all shadow-gold-subtle"
          >
            <BookOpen className="w-3.5 h-3.5 text-gold-antique" />
            <span className="hidden sm:inline">Scriptural Sources</span>
          </button>

          <button
            onClick={handleToggleSound}
            className="p-2 rounded-full border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-gold-light hover:border-gold-antique transition-all"
            title={isMuted ? 'Unmute sound' : 'Mute sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-gold-radiant" />}
          </button>
        </div>
      </header>

      {/* 3. Main Center Cinematic Canvas */}
      <div className="relative z-20 h-[calc(100vh-180px)] flex flex-col justify-between px-4 sm:px-8 max-w-4xl mx-auto">
        
        {/* Scene Title & Devanagari Banner */}
        <div className="text-center pt-2">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold-deep block mb-1">
            {scene.stageName}
          </span>
          <h1 className="text-2xl sm:text-3xl font-cinzel font-bold text-sacred-gold mb-1">
            {scene.devanagariTitle}
          </h1>
          <span className="text-[11px] font-sans text-parchment-muted">
            {scene.scriptureReference}
          </span>
        </div>

        {/* Center Interactive Stage Box */}
        <div className="my-auto w-full">
          
          {/* Act I: The Palace Court & Dialogue */}
          {scene.id === 'scene-1-court' && scene.dialogue && (
            <div className="space-y-4 max-w-2xl mx-auto">
              {scene.dialogue.map((d, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-sm backdrop-blur-xl border transition-all ${
                    idx === 0
                      ? 'bg-cosmos-midnight/90 border-red-900/40 text-red-100'
                      : 'bg-cosmos-surface/90 border-gold-antique/40 text-gold-radiant shadow-gold-subtle'
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest font-sans font-bold block mb-1">
                    {d.speaker}
                  </span>
                  <p className="font-cormorant italic text-base leading-relaxed">
                    "{d.text}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Act II: Clearing the Deep Forest Mist of Madhuvana */}
          {scene.id === 'scene-2-forest' && (
            <div className="relative max-w-lg mx-auto p-8 rounded-sm bg-cosmos-midnight/80 border border-emerald-500/30 backdrop-blur-xl text-center">
              <Wind className="w-10 h-10 text-emerald-400 mx-auto mb-3 animate-pulse" />
              <h3 className="font-cinzel text-lg font-bold text-emerald-200 mb-2">
                The Dense Wilderness of Madhuvana
              </h3>
              <p className="text-xs text-parchment-muted mb-6 font-sans">
                {mistOpacity > 0.25
                  ? 'A five-year-old child enters the pitch-dark forest alone. Drag or swipe repeatedly across the mist below to clear his sacred path.'
                  : 'The holy banks of Yamuna emerge from the darkness.'}
              </p>

              {/* Interactive Mist Scratch Area */}
              <div
                onMouseMove={() => setMistOpacity((prev) => Math.max(0.1, prev - 0.08))}
                onTouchMove={() => setMistOpacity((prev) => Math.max(0.1, prev - 0.08))}
                className="w-full h-32 rounded border border-emerald-400/40 bg-emerald-950/40 flex items-center justify-center cursor-pointer relative overflow-hidden"
              >
                <div
                  style={{ opacity: mistOpacity }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-teal-900 to-black transition-opacity duration-200 flex items-center justify-center text-xs text-emerald-300 font-sans tracking-widest uppercase"
                >
                  [ Swipe / Drag Cursor Here to Clear Mist: {Math.round((1 - mistOpacity) * 100)}% ]
                </div>
                {mistOpacity <= 0.25 && (
                  <span className="text-xs font-cinzel text-gold-radiant font-bold animate-fade-in">
                    ✦ The sacred Yamuna river is revealed
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Act III: Chanting the Syllables of the Mantra with Narada */}
          {scene.id === 'scene-3-narada' && (
            <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-sm bg-cosmos-midnight/90 border border-gold-antique/50 backdrop-blur-xl text-center shadow-gold-glow">
              <Sparkles className="w-8 h-8 text-gold-antique mx-auto mb-2 animate-bounce" />
              <h3 className="font-cinzel text-lg font-bold text-gold-radiant mb-1">
                The Twelve-Syllable Transmission
              </h3>
              <p className="text-xs text-parchment-muted mb-5 font-sans">
                Sri Narada Muni whispers the sacred Vasudeva mantra. Tap each syllable in divine order:
              </p>

              {/* Syllable Buttons */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mb-4">
                {mantraSyllables.map((syl, index) => {
                  const isChanted = index < syllablesChanted;
                  const isCurrent = index === syllablesChanted;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (isCurrent) {
                          soundEngine.playBowRelease();
                          setSyllablesChanted((prev) => prev + 1);
                        }
                      }}
                      className={`py-2 rounded border text-xs font-cinzel font-bold transition-all ${
                        isChanted
                          ? 'bg-gold-antique text-cosmos-void border-gold-antique shadow-gold-subtle'
                          : isCurrent
                          ? 'bg-cosmos-surface border-gold-radiant text-gold-light animate-pulse scale-105'
                          : 'bg-cosmos-abyss/40 border-cosmos-border/50 text-parchment-muted opacity-50'
                      }`}
                    >
                      {syl}
                    </button>
                  );
                })}
              </div>

              {syllablesChanted >= mantraSyllables.length && (
                <div className="text-xs font-sans text-gold-radiant font-medium animate-fade-in">
                  "Om Namo Bhagavate Vasudevaya" — The mantra reverberates through the forest.
                </div>
              )}
            </div>
          )}

          {/* Act IV: Tapasya & Cosmic Breath Arrested */}
          {scene.id === 'scene-4-tapasya' && (
            <div className="max-w-md mx-auto p-6 sm:p-8 rounded-sm bg-cosmos-midnight/95 border border-red-500/40 backdrop-blur-xl text-center shadow-[0_0_40px_rgba(240,113,103,0.25)]">
              <Flame className="w-8 h-8 text-red-400 mx-auto mb-2 animate-pulse" />
              <h3 className="font-cinzel text-lg font-bold text-red-200 mb-1">
                Tapasya: Arresting the Cosmic Breath
              </h3>
              <p className="text-xs text-parchment-muted mb-5 font-sans">
                Standing on one leg, Dhruva retains his breath in total meditation. Hold down the button below to arrest the cosmic motion.
              </p>

              <button
                onMouseDown={() => setIsHoldingBreath(true)}
                onMouseUp={() => setIsHoldingBreath(false)}
                onTouchStart={() => setIsHoldingBreath(true)}
                onTouchEnd={() => setIsHoldingBreath(false)}
                className="w-full py-4 rounded border border-red-400/60 bg-red-950/50 hover:bg-red-900/50 active:scale-95 transition-all text-xs font-cinzel font-bold tracking-widest uppercase text-red-100 select-none touch-none shadow-gold-subtle"
              >
                {breathHoldProgress >= 0.95
                  ? '✦ COSMIC BREATH ARRESTED'
                  : isHoldingBreath
                  ? `Holding Breath... ${Math.round(breathHoldProgress * 100)}%`
                  : 'Press and Hold to Meditate'}
              </button>

              <div className="w-full bg-cosmos-void h-1.5 rounded-full mt-4 overflow-hidden border border-cosmos-border">
                <div
                  style={{ width: `${breathHoldProgress * 100}%` }}
                  className="h-full bg-gradient-to-r from-red-600 via-orange-400 to-gold-radiant transition-all duration-75"
                />
              </div>
            </div>
          )}

          {/* Act V: The Eternal Pole Star (Dhruva-Loka) */}
          {scene.id === 'scene-5-darshan' && (
            <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-sm bg-cosmos-midnight/90 border border-sky-400/40 backdrop-blur-xl text-center shadow-[0_0_50px_rgba(74,163,223,0.3)]">
              <Compass className="w-8 h-8 text-sky-300 mx-auto mb-2 animate-spin duration-1000" />
              <h3 className="font-cinzel text-xl font-bold text-sky-100 mb-1">
                Dhruva-Loka • The Pivot of the Heavens
              </h3>
              <p className="text-xs text-parchment-light leading-relaxed mb-4 font-sans">
                Touched by the Lord's divine conch, Dhruva attained the supreme eternal realm around which the Saptarishi and celestial galaxies revolve without fail.
              </p>
              <div className="inline-block p-3 rounded border border-sky-400/30 bg-sky-950/40 text-[11px] text-sky-200 font-sans">
                "Searching for mere broken glass, I have found the supreme diamond."
              </div>
            </div>
          )}

          {/* Narration Quote Box */}
          <div className="mt-6 p-4 rounded-sm bg-cosmos-abyss/80 border border-cosmos-border/70 max-w-2xl mx-auto text-center">
            <p className="font-cormorant italic text-sm sm:text-base text-parchment-light leading-relaxed">
              "{scene.narration}"
            </p>
          </div>
        </div>

        {/* Bottom Navigation & Progression Controls */}
        <div className="pb-4 flex items-center justify-between border-t border-cosmos-border/60 pt-4">
          <button
            onClick={handlePrevScene}
            disabled={currentSceneIndex === 0}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-sm text-xs font-sans transition-all ${
              currentSceneIndex === 0
                ? 'opacity-30 cursor-not-allowed text-parchment-muted'
                : 'border border-cosmos-border text-parchment hover:border-gold-antique hover:text-gold-light'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous Act</span>
          </button>

          {/* Scene Step Indicators */}
          <div className="flex items-center space-x-2">
            {DHRUVA_CINEMATIC_STORY.scenes.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSceneIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentSceneIndex
                    ? 'bg-gold-radiant scale-125 shadow-gold-subtle'
                    : idx < currentSceneIndex
                    ? 'bg-gold-deep'
                    : 'bg-cosmos-border'
                }`}
                title={s.stageName}
              />
            ))}
          </div>

          {currentSceneIndex < DHRUVA_CINEMATIC_STORY.scenes.length - 1 ? (
            <button
              onClick={handleNextScene}
              disabled={!isInteractionCompleted()}
              className={`flex items-center space-x-2 px-5 py-2 rounded-sm text-xs font-cinzel font-bold tracking-wider uppercase transition-all ${
                isInteractionCompleted()
                  ? 'bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void shadow-gold-subtle hover:brightness-110'
                  : 'bg-cosmos-surface border border-cosmos-border text-parchment-muted cursor-not-allowed opacity-60'
              }`}
            >
              <span>Next Act</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onBackToGateway}
              className="flex items-center space-x-2 px-5 py-2 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-xs tracking-wider uppercase shadow-gold-subtle hover:brightness-110 transition-all"
            >
              <span>Complete Journey</span>
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 4. Scriptural Drawer (Shruti-Drishti) */}
      <ScripturalDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={DHRUVA_CINEMATIC_STORY.title}
        devanagariTitle={scene.stageName}
        sanskritVerse={scene.sanskritVerse}
        sourceText={scene.scriptureReference}
        traditionalPurport="The spiritual determination of Dhruva Maharaj represents pure unalloyed resolve (Dridha-Sankalpa). Guided by the bona fide spiritual master Narada Muni, his five-month austerity transformed material hurt into transcendental surrender."
        philosophicalContext="Recorded in Canto 4 of the Srimad Bhagavatam and Book 1 of the Vishnu Purana. The story illustrates that supreme devotion requires sincerity of heart, which transcends age, status, and material qualification."
      />
    </div>
  );
};

