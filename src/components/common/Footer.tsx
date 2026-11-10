import React from 'react';
import { OrnamentDivider } from './OrnamentDivider';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-gold-antique/15 bg-cosmos-void/90 py-16 text-center text-sm">
      <div className="max-w-4xl mx-auto px-4">
        
        <OrnamentDivider variant="lotus" />

        {/* Traditional Mangalacharana Verse */}
        <p className="font-rozha text-gold-radiant text-base md:text-lg mb-2">
          ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
        </p>
        <p className="text-xs text-parchment-muted italic max-w-xl mx-auto mb-6">
          "Lead me from the unreal to the real, lead me from darkness to light, lead me from mortality to immortality."
          <br />
          <span className="not-italic text-[10px] text-gold-deep">— Brihadaranyaka Upanishad 1.3.28</span>
        </p>

        {/* Sacred Attribution & Authenticity Declaration */}
        <div className="bg-cosmos-midnight/60 border border-gold-antique/20 rounded-md p-4 mb-8 text-xs text-parchment-dark leading-relaxed">
          <span className="text-gold-antique font-semibold block mb-1">Authenticity & Tradition</span>
          All narratives, characters, and philosophical treatises in Ananta are indexed faithfully from sacred scriptures including the <em>Srimad Bhagavatam</em>, <em>Vishnu Purana</em>, <em>Valmiki Ramayana</em>, and the <em>Upanishads</em>. Canonical shloka citations are preserved alongside genuine reflections.
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-parchment-muted mb-6">
          <span>ANANTA (अनन्त) — The Infinite Sanctuary</span>
          <span>•</span>
          <span>Crafted with Reverence</span>
        </div>

        <p className="text-[11px] text-cosmos-border">
          Preserving and contemplating timeless wisdom.
        </p>
      </div>
    </footer>
  );
};

