import React from 'react';

interface OrnamentDividerProps {
  className?: string;
  variant?: 'lotus' | 'simple' | 'mandala';
  subtitle?: string;
}

export const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  className = '',
  variant = 'lotus',
  subtitle,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center my-8 ${className}`}>
      <div className="flex items-center w-full max-w-md justify-center space-x-3">
        {/* Left gold filigree line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-antique/30 to-gold-antique/80" />

        {/* Center Indian sacred glyph */}
        <div className="flex items-center space-x-1.5 text-gold-antique px-2">
          {variant === 'lotus' ? (
            <svg
              className="w-5 h-5 text-gold-antique/90 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 3c0 4.5-3 8-7 9 4.5 1 7 4.5 7 9 0-4.5 2.5-8 7-9-4-1-7-4.5-7-9z" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          ) : (
            <div className="w-2 h-2 rotate-45 border border-gold-antique/80 bg-cosmos-midnight" />
          )}
        </div>

        {/* Right gold filigree line */}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-antique/30 to-gold-antique/80" />
      </div>

      {subtitle && (
        <span className="mt-2 text-xs uppercase tracking-[0.28em] text-gold-deep font-medium font-sans">
          {subtitle}
        </span>
      )}
    </div>
  );
};

