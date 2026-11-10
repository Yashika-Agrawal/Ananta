import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface ScripturalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  devanagariTitle: string;
  sanskritVerse: string;
  sourceText: string;
  traditionalPurport: string;
  philosophicalContext: string;
}

export const ScripturalDrawer: React.FC<ScripturalDrawerProps> = ({
  isOpen,
  onClose,
  title,
  devanagariTitle,
  sanskritVerse,
  sourceText,
  traditionalPurport,
  philosophicalContext,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-cosmos-void/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-xl h-full bg-cosmos-abyss/98 border-l border-gold-antique/30 shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-gold-antique/20 mb-6">
            <div className="flex items-center space-x-2 text-gold-radiant text-xs font-sans tracking-widest uppercase">
              <BookOpen className="w-4 h-4 text-gold-antique" />
              <span>Shruti-Drishti (Canonical Evidence)</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-parchment-muted hover:text-gold-radiant transition-colors"
              aria-label="Close scriptural drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Titles */}
          <span className="text-[11px] font-sans tracking-[0.25em] text-gold-deep uppercase block mb-1">
            Authentic Source Attribution
          </span>
          <h2 className="text-2xl font-cinzel text-sacred-gold font-bold mb-1">
            {title}
          </h2>
          <p className="font-rozha text-gold-light text-base mb-6">
            {devanagariTitle}
          </p>

          {/* Canonical Sanskrit Shloka Block */}
          <div className="rounded-sm bg-cosmos-surface border border-gold-antique/30 p-5 mb-6 shadow-gold-subtle">
            <span className="text-[10px] font-mono tracking-wider text-gold-antique uppercase block mb-2">
              Canonical Verse (Devanagari & Transliteration)
            </span>
            <blockquote className="font-rozha text-lg sm:text-xl text-gold-radiant leading-relaxed whitespace-pre-line mb-3">
              {sanskritVerse}
            </blockquote>
            <div className="pt-2 border-t border-cosmos-border/70 flex items-center justify-between text-xs text-parchment-muted">
              <span className="font-medium text-gold-antique">{sourceText}</span>
              <span className="italic text-[11px]">Parampara Canonical Text</span>
            </div>
          </div>

          {/* Traditional Purport / Meaning */}
          <div className="space-y-4 text-xs sm:text-sm text-parchment leading-relaxed mb-6">
            <h3 className="font-cinzel text-sm font-bold text-gold-light tracking-wide uppercase">
              Traditional Purport & Translation
            </h3>
            <p className="font-cormorant italic text-base text-parchment-light">
              "{traditionalPurport}"
            </p>
          </div>

          {/* Philosophical Context */}
          <div className="space-y-2 text-xs text-parchment-dark leading-relaxed">
            <h3 className="font-cinzel text-xs font-bold text-gold-deep tracking-wider uppercase">
              Cosmic Context & Dharma
            </h3>
            <p className="bg-cosmos-midnight/60 p-3 rounded border border-cosmos-border">
              {philosophicalContext}
            </p>
          </div>
        </div>

        {/* Bottom Attribution Notice */}
        <div className="pt-6 border-t border-gold-antique/15 text-[11px] text-parchment-muted flex items-center justify-between">
          <span>Preserving canonical integrity</span>
          <span className="text-gold-antique font-sans">
            Indexed in Ananta Granth
          </span>
        </div>
      </div>
    </div>
  );
};

