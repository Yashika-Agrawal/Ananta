import React from 'react';
import { HeroPravesha } from '../components/home/HeroPravesha';
import { PortalCards } from '../components/home/PortalCards';
import { FeaturedWisdom } from '../components/home/FeaturedWisdom';
import { ActiveSection } from '../components/common/Navbar';

interface HomeViewProps {
  onNavigate: (section: ActiveSection) => void;
  onExploreStory: (slug: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onExploreStory }) => {
  return (
    <div className="relative">
      {/* 1. Cinematic Opening Hero */}
      <HeroPravesha
        onEnter={() => onNavigate('katha')}
        onExploreStory={onExploreStory}
      />

      {/* 2. Daily Shloka Contemplation */}
      <FeaturedWisdom />

      {/* 3. The Five Sanctuary Portals */}
      <PortalCards onNavigate={onNavigate} />
    </div>
  );
};

