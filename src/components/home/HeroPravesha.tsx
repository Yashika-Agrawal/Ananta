import React from 'react';
import { Sparkles, ArrowDown, BookOpen } from 'lucide-react';
import { OrnamentDivider } from '../common/OrnamentDivider';

interface HeroPraveshaProps {
  onEnter: () => void;
  onExploreStory: (slug: string) => void;
}

export const HeroPravesha: React.FC<HeroPraveshaProps> = ({ onEnter, onExploreStory }) => {
  return (
    <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      
      {/* Decorative Celestial Emblem */}
      <div className="relative mb-8 group cursor-pointer" onClick={onEnter}>
        {/* Soft pulsing aura */}
        <div className="absolute inset-0 rounded-full bg-gold-antique/10 blur-xl group-hover:bg-gold-antique/20 transition-all duration-700 animate-pulse-slow" />
        
        {/* Sacred Yantra-like Circle */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-gold-antique/40 bg-cosmos-midnight/80 backdrop-blur-md flex items-center justify-center shadow-gold-glow group-hover:border-gold-antique transition-all duration-500">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold-antique/25 flex items-center justify-center">
            <span className="font-cinzel text-3xl sm:text-4xl text-sacred-gold font-bold select-none group-hover:scale-110 transition-transform duration-300">
              अ
            </span>
          </div>
        </div>
      </div>

      {/* Sacred Moniker & Taglines */}
      <div className="max-w-3xl mx-auto space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-antique/25 bg-cosmos-surface/80 text-xs font-sans text-gold-light tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
          <span>The Living Digital Universe of Hindu Wisdom</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-cinzel font-black tracking-[0.18em] text-sacred-gold uppercase">
          ANANTA
        </h1>

        <p className="font-rozha text-gold-deep text-lg sm:text-xl tracking-wider">
          अनन्तो वै पुरुषः । अनन्ता वै वेदाः ।
        </p>

        <p className="text-base sm:text-lg text-parchment-light max-w-2xl mx-auto font-cormorant italic leading-relaxed pt-2">
          "Step into a timeless sanctuary where Puranic sagas, cosmic geography, and profound Vedic philosophies weave an interconnected living tapestry."
        </p>
      </div>

      <OrnamentDivider variant="lotus" className="my-6" />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <button
          onClick={onEnter}
          className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gradient-to-r from-gold-deep via-gold-antique to-bronze-warm text-cosmos-void font-cinzel font-bold text-sm tracking-widest uppercase shadow-gold-subtle hover:brightness-110 hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>Enter Katha Library</span>
          <BookOpen className="w-4 h-4 text-cosmos-void" />
        </button>

        <button
          onClick={() => onExploreStory('dhruva-maharaj')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-sm bg-cosmos-midnight/90 border border-gold-antique/30 text-gold-light hover:border-gold-antique hover:bg-cosmos-surface text-sm font-sans tracking-wide transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-gold-antique animate-pulse" />
          <span>Interactive Showcase: Dhruva Maharaj</span>
        </button>
      </div>

      {/* Gentle Downward Invitation */}
      <button
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        }}
        className="mt-14 text-parchment-muted hover:text-gold-antique transition-colors flex flex-col items-center text-xs space-y-1.5"
        aria-label="Scroll to exploration sections"
      >
        <span className="tracking-widest uppercase text-[10px] font-sans">Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
