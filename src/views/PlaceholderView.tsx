import React from 'react';
import { ActiveSection } from '../components/common/Navbar';
import { OrnamentDivider } from '../components/common/OrnamentDivider';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface PlaceholderViewProps {
  section: ActiveSection;
  title: string;
  devanagari: string;
  tagline: string;
  description: string;
  onBackToHome: () => void;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export const PlaceholderView: React.FC<PlaceholderViewProps> = ({
  title,
  devanagari,
  tagline,
  description,
  onBackToHome,
  actionButton,
}) => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
      <button
        onClick={onBackToHome}
        className="inline-flex items-center space-x-2 text-xs font-sans text-parchment-muted hover:text-gold-antique transition-colors mb-10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Pravesha (Home)</span>
      </button>

      <div className="p-8 sm:p-12 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/20 backdrop-blur-md">
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold-deep block mb-2">
          Sanctuary in Development (Phase 2 Roadmap)
        </span>
        <h1 className="text-3xl sm:text-4xl font-cinzel text-sacred-gold font-bold mb-2">
          {title}
        </h1>
        <p className="font-rozha text-gold-radiant text-lg mb-4">
          {devanagari}
        </p>

        <OrnamentDivider variant="lotus" />

        <p className="text-base text-parchment-light font-cormorant italic max-w-xl mx-auto mb-4">
          "{tagline}"
        </p>

        <p className="text-xs text-parchment-muted max-w-lg mx-auto leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBackToHome}
            className="px-6 py-2.5 rounded-sm border border-gold-antique/30 text-gold-light hover:border-gold-antique text-xs tracking-wider uppercase font-sans transition-all"
          >
            Explore Gateways
          </button>

          {actionButton && (
            <button
              onClick={actionButton.onClick}
              className="px-6 py-2.5 rounded-sm bg-gold-antique text-cosmos-void font-bold text-xs tracking-wider uppercase font-sans hover:brightness-110 transition-all flex items-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{actionButton.label}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
