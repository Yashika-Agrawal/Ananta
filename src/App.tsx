import React, { useState } from 'react';
import { CinematicCosmicOpening } from './components/cinematic/CinematicCosmicOpening';
import { CosmicGateway, GatewayId } from './components/cinematic/CosmicGateway';
import { StarFieldCanvas } from './components/common/StarFieldCanvas';
import { Navbar, ActiveSection } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomeView } from './views/HomeView';
import { PlaceholderView } from './views/PlaceholderView';
import { WebGLErrorBoundary } from './components/common/WebGLErrorBoundary';

export const App: React.FC = () => {
  // Check OS reduced motion preference initially
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Experience Modes:
  // 1. 'cinematic-prologue' (The full-screen opening chord and cosmic awakening)
  // 2. 'cosmic-gateway'   (The interactive 3D gateway arc with 5 portals)
  // 3. 'section-view'      (When entering Katha, Brahmanda, Tattva, Charitra, or Granth)
  const [experienceMode, setExperienceMode] = useState<
    'cinematic-prologue' | 'cosmic-gateway' | 'section-view'
  >('cinematic-prologue');

  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    setExperienceMode('section-view');
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const handleSelectGateway = (gatewayId: GatewayId) => {
    setActiveSection(gatewayId);
    setExperienceMode('section-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreStory = (_slug: string) => {
    setActiveSection('katha');
    setExperienceMode('section-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Screen 1: The Primordial Prologue (Chord Pull & Audio Awakening)
  if (experienceMode === 'cinematic-prologue') {
    return (
      <WebGLErrorBoundary>
        <CinematicCosmicOpening
          reducedMotion={reducedMotion}
          onEnterUniverse={() => setExperienceMode('cosmic-gateway')}
        />
      </WebGLErrorBoundary>
    );
  }

  // 2. Screen 2: The Cosmic Gateway (Five 3D Portals in Arc Space)
  if (experienceMode === 'cosmic-gateway') {
    return (
      <WebGLErrorBoundary>
        <CosmicGateway
          reducedMotion={reducedMotion}
          onSelectGateway={handleSelectGateway}
          onReturnToPrologue={() => setExperienceMode('cinematic-prologue')}
        />
      </WebGLErrorBoundary>
    );
  }

  // 3. Screen 3: The Dedicated Section Environment
  return (
    <div className={`min-h-screen bg-cosmos-void text-parchment relative ${reducedMotion ? 'motion-reduce' : ''}`}>
      {/* Global Ambient Celestial Canvas */}
      <StarFieldCanvas density={reducedMotion ? 80 : 150} speed={reducedMotion ? 0.05 : 0.18} />

      {/* Temple-Inspired Nav Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
      />

      {/* Quick Navigation pill to return to the 3D Cosmic Gateway */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-4 flex justify-between items-center">
        <button
          onClick={() => setExperienceMode('cosmic-gateway')}
          className="text-xs font-sans px-3.5 py-1.5 rounded-sm border border-gold-antique/50 bg-cosmos-midnight/90 text-gold-radiant hover:border-gold-antique hover:shadow-gold-subtle transition-all flex items-center space-x-1.5"
        >
          <span>✦ Return to Cosmic Gateway</span>
        </button>

        <button
          onClick={() => setExperienceMode('cinematic-prologue')}
          className="text-xs font-sans px-3 py-1.5 rounded-sm border border-cosmos-border bg-cosmos-abyss/80 text-parchment-muted hover:text-gold-light transition-all"
        >
          <span>Re-experience Prologue</span>
        </button>
      </div>

      {/* Main Section Views */}
      <main className="relative z-10 min-h-[calc(100vh-160px)]">
        {activeSection === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onExploreStory={handleExploreStory}
          />
        )}

        {activeSection === 'katha' && (
          <PlaceholderView
            section="katha"
            title="Katha Library"
            devanagari="कथा — The Sacred Story Sanctuary"
            tagline="Puranic narratives, canonical verses, and timeless allegories."
            description="Explore sacred stories from Srimad Bhagavatam, Vishnu Purana, and Ramayana. Filter by scripture, theme, and character."
            onBackToHome={() => setExperienceMode('cosmic-gateway')}
          />
        )}

        {activeSection === 'brahmanda' && (
          <PlaceholderView
            section="brahmanda"
            title="Brahmanda"
            devanagari="ब्रह्माण्ड — Cosmic Cartography"
            tagline="The 14 Lokas, Mahapralaya, and the cycles of cosmic time."
            description="Interactive exploration of the upper realms (Satyaloka to Bhuvarloka) and lower realms, yuga cycles, and creation."
            onBackToHome={() => setExperienceMode('cosmic-gateway')}
          />
        )}

        {activeSection === 'tattva' && (
          <PlaceholderView
            section="tattva"
            title="Tattva"
            devanagari="तत्त्व — Philosophy & Direct Truth"
            tagline="Upanishadic insights on Atman, Brahman, Maya, and Karma."
            description="Foundational philosophical concepts with direct scriptural references and their manifestations in puranic stories."
            onBackToHome={() => setExperienceMode('cosmic-gateway')}
          />
        )}

        {activeSection === 'charitra' && (
          <PlaceholderView
            section="charitra"
            title="Charitra"
            devanagari="चरित्र — Characters & Divine Lineages"
            tagline="Genealogies of Devas, Rishis, Bhaktas, and Kings."
            description="Character dossiers and relational lineage graph cross-linked to every story."
            onBackToHome={() => setExperienceMode('cosmic-gateway')}
          />
        )}

        {activeSection === 'granth' && (
          <PlaceholderView
            section="granth"
            title="My Granth"
            devanagari="मम ग्रन्थः — Personal Wisdom Archive"
            tagline="Your digital notebook for scriptural study and reflections."
            description="Browser-backed personal journal, saved citations, bookmarks, and contemplation trackers."
            onBackToHome={() => setExperienceMode('cosmic-gateway')}
          />
        )}
      </main>

      {/* Reverent Footer */}
      <Footer />
    </div>
  );
};

export default App;
