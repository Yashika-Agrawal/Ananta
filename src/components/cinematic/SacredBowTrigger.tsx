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
  const [dragY, setDragY] = useState(0); // Vertical pull distance in px (0 to maxPull)
  const startYRef = useRef(0);
  const maxPull = 170; // Maximum pull threshold in px

  const handlePointerDown = (e: React.PointerEvent) => {
    if (disabled) return;
    setIsPulling(true);
    startYRef.current = e.clientY - dragY;
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
      soundEngine.playBowRelease();
      onTensionChange(1.0);
      onAwaken();
    } else {
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

  // SVG coordinate calculations:
  // ViewBox is 0 0 380 240. Endpoints are at (20, 50) and (360, 50).
  // pullY is the lowest point of the curve in SVG units.
  // When dragY = 0, pullY = 50. When dragY = 170, pullY = 50 + 170 = 220.
  const pullY = 50 + dragY;
  // For quadratic curve B(t) with y0 = 50, y1 = cy, y2 = 50:
  // Lowest point at t = 0.5 is (50 + 2*cy + 50)/4 = (100 + 2*cy)/4 = 25 + cy/2.
  // Setting pullY = 25 + cy/2 => cy = 2 * pullY - 50 = 50 + 2 * dragY.
  const controlY = 50 + 2 * dragY;

  return (
    <div className="relative select-none flex flex-col items-center">
      
      {/* Whispered Call-to-Action */}
      <div className="text-center mb-6 transition-opacity duration-300">
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
        className="relative w-80 sm:w-96 h-64 flex items-start justify-center cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <svg
          className="w-full h-full overflow-visible pointer-events-none"
          viewBox="0 0 380 240"
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

          {/* The Exact Quadratic String Curve passing precisely through pullY at center */}
          <path
            d={`M 20 50 Q 190 ${controlY} 360 50`}
            fill="none"
            stroke="url(#goldString)"
            strokeWidth={2.5 + (dragY / maxPull) * 2}
            filter="url(#stringGlow)"
          />

          {/* Unified Sacred Bindu & Om Emblem rendered at exact lowest point (190, pullY) */}
          <g transform={`translate(190, ${pullY})`}>
            {/* Pulsing Bindu core */}
            <circle
              r={7 + (dragY / maxPull) * 4}
              fill="#fdf3d8"
              className="animate-pulse"
            />
            {/* Dashed sacred aura ring */}
            <circle
              r={16 + (dragY / maxPull) * 8}
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeDasharray="4 2"
              opacity={0.7}
            />

            {/* Glowing Om Orb centered precisely on the string */}
            <circle
              r="22"
              fill="#070a13"
              stroke="#fdf3d8"
              strokeWidth="1.5"
              filter="url(#stringGlow)"
            />
            <text
              y="5"
              textAnchor="middle"
              fill="#fdf3d8"
              fontSize="16"
              fontFamily="Cinzel, serif"
              fontWeight="bold"
            >
              ॐ
            </text>

            {/* Downward pull guide arrows at rest */}
            {dragY < 25 && (
              <g className="animate-bounce" opacity="0.6">
                <path
                  d="M -6 32 L 0 40 L 6 32"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                />
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* Threshold Instruction Indicator - fades smoothly when dragging to prevent overlap */}
      <div 
        className={`mt-4 flex items-center space-x-2 text-[11px] text-parchment-muted font-sans transition-opacity duration-200 ${
          dragY > 0 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold-antique" />
        <span>Click & drag downward, then release</span>
      </div>
    </div>
  );
};
