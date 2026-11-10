import React, { useEffect, useRef } from 'react';

interface StarFieldCanvasProps {
  density?: number;
  speed?: number;
  className?: string;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  twinkleSpeed: number;
  driftX: number;
  driftY: number;
}

export const StarFieldCanvas: React.FC<StarFieldCanvasProps> = ({
  density = 160,
  speed = 0.2,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize stars
    const stars: Star[] = Array.from({ length: density }, () => {
      const baseAlpha = Math.random() * 0.7 + 0.15;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        alpha: baseAlpha,
        baseAlpha,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        driftX: (Math.random() - 0.5) * speed * 0.5,
        driftY: -Math.random() * speed,
      };
    });

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Subtle celestial nebula haze in center
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.35,
        Math.max(width, height) * 0.65
      );
      gradient.addColorStop(0, 'rgba(23, 34, 59, 0.25)');
      gradient.addColorStop(0.5, 'rgba(13, 19, 34, 0.15)');
      gradient.addColorStop(1, 'rgba(3, 5, 9, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Soft sine-based twinkling
        star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed + i) * 0.25;
        star.alpha = Math.max(0.05, Math.min(1, star.alpha));

        // Slow upward/sideways drift
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around screen boundaries
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.fillStyle = `rgba(245, 230, 179, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Very faint golden aura for the larger brighter stars
        if (star.size > 1.4 && star.alpha > 0.5) {
          ctx.fillStyle = `rgba(212, 175, 55, ${star.alpha * 0.15})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};

