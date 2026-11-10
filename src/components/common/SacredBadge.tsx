import React from 'react';

interface SacredBadgeProps {
  children: React.ReactNode;
  variant?: 'scripture' | 'theme' | 'character' | 'subtle';
  className?: string;
  icon?: React.ReactNode;
}

export const SacredBadge: React.FC<SacredBadgeProps> = ({
  children,
  variant = 'subtle',
  className = '',
  icon,
}) => {
  const variantStyles = {
    scripture:
      'bg-cosmos-surface border-gold-antique/30 text-gold-light hover:border-gold-antique/60',
    theme:
      'bg-cosmos-midnight/80 border-bronze-warm/40 text-parchment-light hover:border-bronze-warm/70',
    character:
      'bg-cosmos-elevated border-gold-deep/40 text-gold-radiant hover:border-gold-deep/80',
    subtle:
      'bg-cosmos-abyss/60 border-cosmos-border text-parchment-muted hover:border-gold-antique/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-sans rounded-sm border transition-all duration-200 backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="text-gold-antique/80 text-[0.85em]">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

