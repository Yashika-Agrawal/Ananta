import React from 'react';
import { Sparkles } from 'lucide-react';
import { OrnamentDivider } from '../common/OrnamentDivider';

export const FeaturedWisdom: React.FC = () => {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="relative rounded-sm bg-gradient-to-b from-cosmos-surface/90 to-cosmos-midnight/80 border border-gold-antique/25 p-8 sm:p-10 shadow-gold-subtle backdrop-blur-md overflow-hidden">
        
        {/* Subtle decorative temple corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-antique/50" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-antique/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-antique/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-antique/50" />

        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 text-xs text-gold-deep font-sans tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-antique" />
            <span>Daily Shloka Contemplation</span>
          </div>

          {/* Sanskrit verse */}
          <blockquote className="font-rozha text-xl sm:text-2xl text-sacred-gold leading-relaxed mb-4">
            "काचात् मूल्यं यथा प्राप्य मणिरत्ने विलोकिते ।<br />
            तथा मां भगवन् लब्ध्वा कृतकृत्योऽस्मि सर्वथा ॥"
          </blockquote>

          {/* English translation */}
          <p className="font-cormorant text-base sm:text-lg text-parchment-light italic max-w-2xl mx-auto leading-relaxed mb-4">
            "Searching for mere broken pieces of glass, I have instead uncovered the most radiant diamond. Beholding You, O Supreme Lord, I am fully satisfied, and desire nothing more."
          </p>

          <OrnamentDivider variant="simple" className="my-4" />

          {/* Source attribution */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-parchment-muted">
            <span className="font-sans font-semibold text-gold-antique">
              Dhruva Maharaj to Lord Vishnu
            </span>
            <span>•</span>
            <span className="font-mono text-[11px] text-parchment-dark">
              Hari-bhakti-sudhodaya 7.28
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
