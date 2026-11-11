import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';
import { sagaraDestinations } from '../../data/sagaraDestinations';
import { SagaraOceanScene } from './SagaraOceanScene';

const OCEAN_IMAGE = '/images/sagara-ocean.png';

interface SagaraYatraProps {
  reducedMotion: boolean;
  onReturn: () => void;
}

export const SagaraYatra: React.FC<SagaraYatraProps> = ({ reducedMotion, onReturn }) => {
  const travelRef = useRef(0);
  const travelTargetRef = useRef(0);
  const steerRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rippleRef = useRef({ x: 0.5, y: 0.5, strength: 0 });
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const [travel, setTravel] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(false);
  const [gpuFailed, setGpuFailed] = useState(false);

  const handleTravel = useCallback((value: number) => setTravel(value), []);
  const handleGpuFailure = useCallback(() => setGpuFailed(true), []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      travelTargetRef.current = THREE.MathUtils.clamp(travelTargetRef.current + event.deltaY * 0.00042, 0, 1);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        travelTargetRef.current = THREE.MathUtils.clamp(travelTargetRef.current + 0.08, 0, 1);
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        travelTargetRef.current = THREE.MathUtils.clamp(travelTargetRef.current - 0.08, 0, 1);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    steerRef.current.targetX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    steerRef.current.targetY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
  };
  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    if (touch) touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };
  const onTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.touches[0];
    if (!touch) return;
    steerRef.current.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
    steerRef.current.targetY = (touch.clientY / window.innerHeight) * 2 - 1;
  };
  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;
    if (!start || !touch) return;
    const deltaY = start.y - touch.clientY;
    if (Math.abs(deltaY) > 12) {
      travelTargetRef.current = THREE.MathUtils.clamp(travelTargetRef.current + deltaY * 0.0018, 0, 1);
    }
  };

  const destination = sagaraDestinations[0];
  const destinationVisible = travel > destination.travelAt - 0.12;

  return (
    <main
      className="fixed inset-0 z-[100] isolate overflow-hidden bg-[#071326] text-[#f4ead0]"
      aria-label="Sagara Yatra cosmic ocean journey"
      onPointerMove={onPointerMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {gpuFailed ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ backgroundImage: `url(${OCEAN_IMAGE})`, transform: `scale(${1 + travel * 0.11})` }}
          role="img"
          aria-label="Cosmic ocean with a small boat sailing toward the horizon"
        />
      ) : (
        <SagaraOceanScene
          travelRef={travelRef}
          travelTargetRef={travelTargetRef}
          steerRef={steerRef}
          rippleRef={rippleRef}
          reducedMotion={reducedMotion}
          onTravel={handleTravel}
          onGpuFailure={handleGpuFailure}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030914]/15 via-transparent to-[#020711]/50" />

      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7">
        <div>
          <p className="font-cinzel text-xs tracking-[0.34em] text-[#e5d19b] sm:text-sm">ANANTA</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/55">Sagara Yatra</p>
        </div>
        <button
          type="button"
          onClick={onReturn}
          className="inline-flex items-center gap-2 border border-white/20 bg-[#07101d]/35 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur-sm transition hover:border-[#e5d19b]/60 hover:text-[#f4ead0] sm:px-4"
        >
          <ArrowLeft size={14} /> <span>Return to Brahmanda</span>
        </button>
      </header>

      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap text-center sm:bottom-9">
        <p className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px] sm:tracking-[0.22em]">
          <Compass size={13} strokeWidth={1.2} /> Scroll to sail <span className="text-[#d8c18c]/70">•</span> Move to steer <span className="hidden text-[#d8c18c]/70 sm:inline">•</span> <span className="hidden sm:inline">Click water to ripple</span>
        </p>
        <div className="mx-auto mt-3 h-px w-28 overflow-hidden bg-white/20">
          <div className="h-full bg-[#e8d39e] transition-[width] duration-100" style={{ width: `${travel * 100}%` }} />
        </div>
      </div>

      {destinationVisible && (
        <button
          type="button"
          aria-label={`Discover ${destination.title}`}
          onClick={() => setSelectedDestination(true)}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full p-3 text-[#f3ddaa] transition hover:scale-110 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#f3ddaa]"
          style={{
            left: `${destination.anchor.x * 100}%`,
            top: `${destination.anchor.y * 100}%`,
            opacity: Math.min(1, Math.max(0, (travel - destination.travelAt + 0.12) * 7)),
          }}
        >
          <span className={`absolute inset-0 rounded-full border border-[#efdba9]/35 ${reducedMotion ? '' : 'animate-ping'}`} />
          <Sparkles size={18} strokeWidth={1.2} />
        </button>
      )}

      {selectedDestination && (
        <section className="absolute left-1/2 top-1/2 z-20 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 border border-[#e4d09b]/30 bg-[#081323]/85 p-6 text-center shadow-2xl backdrop-blur-md" aria-live="polite">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#e4d09b]/75">A story shore</p>
          <h2 className="mt-3 font-cinzel text-xl text-[#f4ead0]">{destination.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{destination.description}</p>
          <p className="mt-4 text-[9px] uppercase tracking-[0.16em] text-white/35">Story experience coming next</p>
          <button onClick={() => setSelectedDestination(false)} className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#e4d09b] hover:text-white">Continue sailing</button>
        </section>
      )}
    </main>
  );
};
