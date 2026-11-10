import React, { useState, useRef, useEffect, useCallback } from 'react';
import { soundEngine } from '../../services/soundEngine';

interface SacredBowTriggerProps {
  onTensionChange: (tension: number) => void;
  onAwaken: () => void;
  disabled?: boolean;
}

export const SacredBowTrigger: React.FC<SacredBowTriggerProps> = ({
  onTensionChange,
  onAwaken,
  disabled = false,
}) => {
  const [isPulling, setIsPulling] = useState(false);
  const [dragY, setDragY] = useState(0); // Vertical pull distance in px
  const startYRef = useRef(0);
  const maxPull = 170; // Maximum pull threshold in px

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    setIsPulling(true);
    startYRef.current = e.clientY;
    soundEngine.startCosmicDrone();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPulling || disabled) return;
    const deltaY = Math.max(0, e.clientY - startYRef.current);
    const clampedY = Math.min(deltaY, maxPull);
    setDragY(clampedY);

    const tension = clampedY / maxPull;
    onTensionChange(tension);
    soundEngine.updateBowTension(tension);
  };

  const handleRelease = useCallback(() => {
    if (!isPulling) return;
    setIsPulling(false);

    const tension = dragY / maxPull;

    if (tension >= 0.75) {
      // Threshold reached -> Trigger Cosmic Awakening
      soundEngine.playBowRelease();
      onTensionChange(1.0);
      onAwaken();
    } else {
      // Snapped back before threshold
      setDragY(0);
      onTensionChange(0);
      soundEngine.updateBowTension(0);
    }
  }, [isPulling, dragY, maxPull, onTensionChange, onAwaken]);

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isPulling) {
        handleRelease();
      }
    };
    window.addEventListener('pointerup', handleGlobalPointerUp);
    return () => window.removeEventListener('pointerup', handleGlobalPointerUp);
  }, [isPulling, handleRelease]);

  const tensionPercent = Math.round((dragY / maxPull) * 100);

  return (
    <div className="relative select-none flex flex-col items-center">
      
      {/* Whispered Call-to-Action */}
      <div className="text-center mb-10 transition-opacity duration-300">
        <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-gold-deep block mb-1">
          {tensionPercent > 10 ? `Tension of Time: ${tensionPercent}%` : 'The Primordial Chord'}
        </span>
        <h2 className="text-xl sm:text-2xl font-cinzel text-sacred-gold font-bold tracking-wider">
          {tensionPercent >= 75 ? 'RELEASE TO AWAKEN' : 'PULL THE CHORD OF TIME'}
        </h2>
        <p className="font-cormorant italic text-xs sm:text-sm text-parchment-muted mt-1">
          "Draw down upon the golden filament to rupture the silent void."
        </p>
      </div>

      {/* Interactive String Area */}
      <div
        className="relative w-80 sm:w-96 h-48 flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        {/* SVG Tension String */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          viewBox="0 0 380 180"
        >
          <defs>
            <linearGradient id="goldString" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8c6747" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#d4af37" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#fdf3d8" stopOpacity="1" />
              <stop offset="70%" stopColor="#d4af37" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8c6747" stopOpacity="0.4" />
            </linearGradient>

            <filter id="stringGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Left and Right Stanchions */}
          <circle cx="20" cy="50" r="4" fill="#d4af37" />
          <circle cx="360" cy="50" r="4" fill="#d4af37" />

          {/* The Dynamic String Curve */}
          <path
            d={`M 20 50 Q 190 ${50 + dragY * 1.1} 360 50`}
            fill="none"
            stroke="url(#goldString)"
            strokeWidth={2.5 + (dragY / maxPull) * 2}
            filter="url(#stringGlow)"
          />

          {/* Golden Arrow / Energy Feather at Center */}
          <g transform={`translate(190, ${50 + dragY * 1.1})`}>
            {/* Pulsing Bindu */}
            <circle
              r={7 + (dragY / maxPull) * 5}
              fill="#fdf3d8"
              className="animate-pulse"
            />
            <circle
              r={16 + (dragY / maxPull) * 12}
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity={0.7}
            />

            {/* Downward pull guide arrows */}
            {dragY < 30 && (
              <g className="animate-bounce" opacity="0.6">
                <path
                  d="M -6 18 L 0 26 L 6 18"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                />
              </g>
            )}
          </g>
        </svg>

        {/* Center Grab Handle Target */}
        <div
          style={{ transform: `translateY(${dragY}px)` }}
          className="absolute w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-75"
        >
          <div className="w-12 h-12 rounded-full border border-gold-radiant/80 bg-cosmos-midnight/90 backdrop-blur-md flex items-center justify-center shadow-gold-glow">
            <span className="font-cinzel text-xs text-sacred-gold font-bold">ॐ</span>
          </div>
        </div>
      </div>

      {/* Threshold Instruction Indicator */}
      <div className="mt-4 flex items-center space-x-2 text-[11px] text-parchment-muted font-sans">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-antique" />
        <span>Click & drag downward, then release</span>
      </div>
    </div>
  );
};

