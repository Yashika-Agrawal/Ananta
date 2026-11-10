import React, { useState } from 'react';
import { Menu, X, BookOpen, Compass, Sparkles, Users, Library } from 'lucide-react';

export type ActiveSection = 'home' | 'katha' | 'brahmanda' | 'tattva' | 'charitra' | 'granth';

interface NavbarProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveSection; label: string; devanagari: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Pravesha', devanagari: 'प्रवेश', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'katha', label: 'Katha', devanagari: 'कथा', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'brahmanda', label: 'Brahmanda', devanagari: 'ब्रह्माण्ड', icon: <Compass className="w-4 h-4" /> },
    { id: 'tattva', label: 'Tattva', devanagari: 'तत्त्व', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'charitra', label: 'Charitra', devanagari: 'चरित्र', icon: <Users className="w-4 h-4" /> },
    { id: 'granth', label: 'My Granth', devanagari: 'मम ग्रन्थः', icon: <Library className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: ActiveSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-cosmos-void/80 border-b border-gold-antique/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          aria-label="Ananta Home"
        >
          <div className="w-10 h-10 rounded-full border border-gold-antique/40 flex items-center justify-center bg-cosmos-midnight group-hover:border-gold-antique group-hover:shadow-gold-subtle transition-all duration-300">
            <span className="font-cinzel text-gold-radiant text-base font-semibold">अ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel tracking-[0.25em] text-lg font-bold text-sacred-gold group-hover:brightness-110 transition-all">
              ANANTA
            </span>
            <span className="text-[10px] tracking-widest text-parchment-muted font-sans uppercase">
              The Living Wisdom
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative px-3 py-2 rounded-sm text-xs lg:text-sm font-medium transition-all duration-200 flex flex-col items-center ${
                  isActive
                    ? 'text-gold-radiant bg-cosmos-surface/90 border border-gold-antique/30 shadow-gold-subtle'
                    : 'text-parchment-dark hover:text-gold-light hover:bg-cosmos-midnight/40'
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <span className={`${isActive ? 'text-gold-antique' : 'text-parchment-muted group-hover:text-gold-antique'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <span className="text-[9px] tracking-widest text-gold-deep/70 font-sans mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.devanagari}
                </span>

                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-gold-antique to-transparent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls & Quick Access */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Reduced Motion Toggle */}
          <button
            onClick={onToggleReducedMotion}
            title={reducedMotion ? 'Enable smooth animations' : 'Reduce animations for comfort'}
            className={`px-2.5 py-1 text-xs border rounded-sm font-sans transition-all duration-200 ${
              reducedMotion
                ? 'border-gold-antique bg-gold-antique/10 text-gold-radiant'
                : 'border-cosmos-border text-parchment-muted hover:border-gold-antique/40 hover:text-parchment'
            }`}
          >
            {reducedMotion ? 'Motion: Calm' : 'Motion: Dynamic'}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gold-light hover:text-gold-radiant focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gold-antique/20 bg-cosmos-abyss/98 backdrop-blur-xl px-4 py-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 p-3 rounded border text-left transition-all ${
                    isActive
                      ? 'border-gold-antique bg-cosmos-surface text-gold-radiant'
                      : 'border-cosmos-border/50 text-parchment-dark hover:border-gold-antique/30'
                  }`}
                >
                  <span className="text-gold-antique">{item.icon}</span>
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-[10px] text-gold-deep">{item.devanagari}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-cosmos-border flex justify-between items-center text-xs text-parchment-muted">
            <span>Accessibility</span>
            <button
              onClick={onToggleReducedMotion}
              className="px-2 py-1 border border-cosmos-border rounded text-[11px] text-gold-light"
            >
              {reducedMotion ? 'Motion: Calm' : 'Motion: Dynamic'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
