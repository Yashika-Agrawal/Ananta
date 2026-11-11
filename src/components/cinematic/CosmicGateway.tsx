import React, { useState, useEffect } from 'react';
import { CosmicGatewayCanvas } from './CosmicGatewayCanvas';
import { soundEngine } from '../../services/soundEngine';
import { 
  BookOpen, 
  Compass, 
  Sparkles, 
  Users, 
  Library, 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  Sparkle
} from 'lucide-react';

export type GatewayId = 'katha' | 'brahmanda' | 'tattva' | 'charitra' | 'granth';

interface Gateway {
  id: GatewayId;
  title: string;
  subtitle: string;
  description: string;
  scriptureSources: string;
  colorName: string;
  icon: React.ReactNode;
}

interface CosmicGatewayProps {
  onSelectGateway: (id: GatewayId) => void;
  onReturnToPrologue: () => void;
  reducedMotion?: boolean;
}

export const CosmicGateway: React.FC<CosmicGatewayProps> = ({
  onSelectGateway,
  onReturnToPrologue,
  reducedMotion = false,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to Katha
  const [transitioningTo, setTransitioningTo] = useState<GatewayId | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(() => soundEngine.getMuted());

  useEffect(() => {
    return soundEngine.subscribe((muted) => setIsMuted(muted));
  }, []);

  const gateways: Gateway[] = [
    {
      id: 'katha',
      title: 'Katha',
      subtitle: 'The Sacred Story Sanctuary',
      description: 'Living chronicles of devotion, cosmic leelas, and spiritual transformations. Step into the unyielding resolve of Dhruva and the wanderings of Narada.',
      scriptureSources: 'Srimad Bhagavatam • Vishnu Purana • Ramayana',
      colorName: 'text-gold-radiant',
      icon: <BookOpen className="w-5 h-5 text-gold-antique" />,
    },
    {
      id: 'brahmanda',
      title: 'Brahmanda',
      subtitle: 'Cosmic Realms & Time Cycles',
      description: 'Journey across the 14 Lokas, from Satyaloka to the primordial ocean. Contemplate the four Yugas and the eternal cycles of cosmic creation.',
      scriptureSources: '14 Lokas • Chaturyugas • Cosmic Kalpas',
      colorName: 'text-gold-radiant',
      icon: <Compass className="w-5 h-5 text-gold-antique" />,
    },
    {
      id: 'tattva',
      title: 'Tattva',
      subtitle: 'Philosophy & Transcendental Truth',
      description: 'Explore foundational truths from the Upanishads and Bhagavad Gita: Atman, Brahman, Maya, and Karma, linked directly to living stories.',
      scriptureSources: 'Upanishads • Bhagavad Gita • Vedanta',
      colorName: 'text-gold-radiant',
      icon: <Sparkles className="w-5 h-5 text-gold-antique" />,
    },
    {
      id: 'charitra',
      title: 'Charitra',
      subtitle: 'Sages, Deities & Devotees',
      description: 'Trace divine lineages, spiritual genealogies, and timeless bonds between Avatars, Rishis, and Kings in an interconnected sacred web.',
      scriptureSources: 'Devas • Sages • Kings • Devotees',
      colorName: 'text-gold-radiant',
      icon: <Users className="w-5 h-5 text-gold-antique" />,
    },
    {
      id: 'granth',
      title: 'My Granth',
      subtitle: 'Personal Knowledge Sanctuary',
      description: 'Your personal digital notebook for scripture notes, reflections, bookmarks, and realizations as you journey through the texts.',
      scriptureSources: 'Personal Journal • Bookmarks • Notes',
      colorName: 'text-gold-radiant',
      icon: <Library className="w-5 h-5 text-gold-antique" />,
    },
  ];

  const handleSelect = (gateway: Gateway) => {
    soundEngine.playBowRelease();
    setTransitioningTo(gateway.id);

    setTimeout(() => {
      onSelectGateway(gateway.id);
    }, 850);
  };

  const handleToggleSound = () => {
    const active = soundEngine.toggleMute();
    setIsMuted(!active);
  };

  const currentGateway = hoveredIndex !== null ? gateways[hoveredIndex] : gateways[0];

  return (
    <div className="relative w-screen h-dvh overflow-hidden bg-cosmos-void text-parchment select-none">
      
      {/* 1. Fully visible 3D Cosmic Arches & Star Vault */}
      <CosmicGatewayCanvas
        activeGatewayIndex={hoveredIndex}
        transitioningTo={transitioningTo}
        reducedMotion={reducedMotion}
      />

      {/* 2. Top Minimalist Controls */}
      <header className="relative z-30 flex items-center justify-between p-6 sm:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-gold-antique/60 flex items-center justify-center bg-cosmos-midnight/80 backdrop-blur-md shadow-gold-subtle">
            <span className="font-cinzel text-gold-radiant text-xs font-semibold">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.3em] text-sacred-gold uppercase">
              ANANTA
            </span>
            <span className="text-[9px] tracking-widest text-parchment-muted uppercase">
              The Cosmic Gateway
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={onReturnToPrologue}
            className="px-3 py-1.5 rounded-sm border border-gold-antique/30 bg-cosmos-midnight/80 backdrop-blur-md text-parchment-muted hover:text-gold-light hover:border-gold-antique text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Return to Prologue</span>
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

      {/* 3. Top Title Tagline */}
      <div className="relative z-20 text-center pt-1 pointer-events-none">
        <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full border border-gold-antique/30 bg-cosmos-surface/80 text-[10px] font-sans tracking-[0.3em] text-gold-light uppercase">
          <Sparkle className="w-3 h-3 text-gold-antique" />
          <span>A Living Atlas of Ananta</span>
        </span>
        <h1 className="text-2xl sm:text-4xl font-cinzel font-black tracking-[0.2em] text-sacred-gold mt-1.5 drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
          SELECT YOUR REALM
        </h1>
      </div>

      {/* 4. Bottom HUD Dock: Compact info bar that keeps 3D portals completely visible */}
      <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 z-30 max-w-5xl mx-auto flex flex-col items-center gap-3">
        
        {/* Dynamic Detail Pill for Selected Realm */}
        <div className="w-full max-w-2xl px-6 py-4 rounded-md bg-cosmos-midnight/90 border border-gold-antique/30 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className={`text-sm font-cinzel font-bold tracking-wider ${currentGateway.colorName}`}>
                {currentGateway.title}
              </span>
              <span className="text-xs text-parchment-muted">•</span>
              <span className="text-xs text-gold-deep font-sans">
                {currentGateway.subtitle}
              </span>
            </div>
            <p className="text-xs text-parchment-light leading-relaxed font-sans line-clamp-2">
              {currentGateway.description}
            </p>
          </div>

          <button
            onClick={() => handleSelect(currentGateway)}
            disabled={transitioningTo !== null}
            className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-gold-subtle transition-all flex items-center justify-center space-x-2 shrink-0"
          >
            <span>{transitioningTo ? 'Entering...' : `Enter ${currentGateway.title}`}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1 max-w-full">
          {gateways.map((gateway, index) => {
            const isSelected = hoveredIndex === index;
            return (
              <button
                key={gateway.id}
                onClick={() => setHoveredIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group relative px-4 sm:px-5 py-2.5 rounded-sm border transition-all duration-300 flex items-center space-x-2 cursor-pointer backdrop-blur-md ${
                  isSelected
                    ? `bg-cosmos-surface border-gold-antique text-gold-radiant scale-105 shadow-[0_0_20px_rgba(212,175,55,0.35)]`
                    : `bg-cosmos-midnight/70 border-cosmos-border/70 text-parchment-muted hover:border-gold-antique/50 hover:text-parchment`
                }`}
              >
                <span>{gateway.icon}</span>
                <span className="text-xs font-cinzel font-bold tracking-wider">
                  {gateway.title}
                </span>

                {isSelected && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-radiant animate-ping" />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* 5. Warp Veil upon entering */}
      {transitioningTo && (
        <div className="absolute inset-0 z-40 bg-cosmos-void/80 backdrop-blur-md flex items-center justify-center animate-fade-in pointer-events-none">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full border border-gold-radiant/60 animate-ping mx-auto mb-4" />
            <span className="font-cinzel text-lg sm:text-2xl text-sacred-gold tracking-[0.35em] uppercase animate-pulse">
              Entering {transitioningTo}...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
