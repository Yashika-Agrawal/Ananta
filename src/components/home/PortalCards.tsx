import React from 'react';
import { ActiveSection } from '../common/Navbar';
import { BookOpen, Compass, Sparkles, Users, Library, ArrowRight } from 'lucide-react';

interface PortalCardsProps {
  onNavigate: (section: ActiveSection) => void;
}

interface Portal {
  id: ActiveSection;
  title: string;
  devanagari: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  scriptureCitations: string;
}

export const PortalCards: React.FC<PortalCardsProps> = ({ onNavigate }) => {
  const portals: Portal[] = [
    {
      id: 'katha',
      title: 'Katha',
      devanagari: 'कथा — The Story Sanctuary',
      tagline: 'Living narratives from the Puranas & Itihasas',
      description: 'Explore timeless chronicles of devotion, cosmic leelas, and spiritual transformations. From the unshakeable tapasya of Dhruva to the celestial wanderings of Narada Muni.',
      icon: <BookOpen className="w-6 h-6" />,
      scriptureCitations: 'Bhagavatam • Vishnu Purana • Ramayana',
    },
    {
      id: 'brahmanda',
      title: 'Brahmanda',
      devanagari: 'ब्रह्माण्ड — Cosmic Cartography',
      tagline: 'The 14 Lokas, Yugas, and Cosmic Cycles',
      description: 'Journey across the cosmic planes from Satyaloka to Patala. Understand Kalpas, Mahapralayas, and the timeless cycles of creation and dissolution.',
      icon: <Compass className="w-6 h-6" />,
      scriptureCitations: '14 Lokas • Chaturyugas • Avatara Epochs',
    },
    {
      id: 'tattva',
      title: 'Tattva',
      devanagari: 'तत्त्व — Philosophy & Truth',
      tagline: 'Wisdom of the Upanishads & Bhagavad Gita',
      description: 'Deconstruct eternal truths: Atman, Brahman, Maya, Karma, and Moksha. Clear, scripturally grounded definitions linked directly to living narratives.',
      icon: <Sparkles className="w-6 h-6" />,
      scriptureCitations: 'Upanishads • Vedanta • Gita',
    },
    {
      id: 'charitra',
      title: 'Charitra',
      devanagari: 'चरित्र — Sacred Lineages',
      tagline: 'Deities, Rishis, Bhaktas & Kings',
      description: 'Trace the lineages, spiritual genealogies, and profound relationships between avatars, sages, and devotees in an interactive web of sacred connection.',
      icon: <Users className="w-6 h-6" />,
      scriptureCitations: 'Parampara • Sages • Kings • Avatars',
    },
    {
      id: 'granth',
      title: 'My Granth',
      devanagari: 'मम ग्रन्थः — Personal Wisdom Archive',
      tagline: 'Your living notebook of scriptural realizations',
      description: 'A quiet, dedicated sanctuary to record verses, personal contemplations, reading progress, and spiritual insights as you journey through the texts.',
      icon: <Library className="w-6 h-6" />,
      scriptureCitations: 'Personal Journal • Bookmarks • Reflections',
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold-deep block mb-2">
          Sanctuaries of Wisdom
        </span>
        <h2 className="text-2xl sm:text-3xl font-cinzel text-sacred-gold font-bold tracking-wider mb-3">
          Five Gateways to the Infinite
        </h2>
        <p className="text-sm text-parchment-dark leading-relaxed">
          Choose a realm to begin your exploration. Each gateway opens a deep, interconnected dimension of ancient knowledge.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portals.map((portal, index) => (
          <div
            key={portal.id}
            onClick={() => onNavigate(portal.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onNavigate(portal.id)}
            className={`group relative p-7 rounded-sm bg-cosmos-midnight/60 border border-gold-antique/20 hover:border-gold-antique/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-subtle flex flex-col justify-between cursor-pointer ${
              index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Top Row: Icon + Devanagari */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-sm border border-gold-antique/30 bg-cosmos-surface flex items-center justify-center text-gold-radiant group-hover:border-gold-antique group-hover:scale-105 transition-all">
                  {portal.icon}
                </div>
                <span className="text-xs font-rozha text-gold-antique/70">
                  {portal.devanagari}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-cinzel font-bold text-parchment-light group-hover:text-gold-light transition-colors mb-1">
                {portal.title}
              </h3>
              <p className="text-xs text-gold-deep font-sans font-medium mb-3">
                {portal.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-parchment-dark leading-relaxed mb-6">
                {portal.description}
              </p>
            </div>

            {/* Bottom Row: Scripture Tags & Enter Arrow */}
            <div className="pt-4 border-t border-cosmos-border/70 flex items-center justify-between text-xs">
              <span className="text-[11px] text-parchment-muted font-sans">
                {portal.scriptureCitations}
              </span>
              <span className="flex items-center space-x-1 text-gold-antique group-hover:text-gold-radiant group-hover:translate-x-1 transition-all">
                <span className="font-sans font-medium text-[11px]">Enter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

