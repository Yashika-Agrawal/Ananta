import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CosmicVoidCanvasProps {
  warpIntensity: number; // 0.0 = calm cosmic ocean, 1.0 = warp hyperspace
  reducedMotion?: boolean;
  className?: string;
}

export const CosmicVoidCanvas: React.FC<CosmicVoidCanvasProps> = ({
  warpIntensity,
  reducedMotion = false,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const warpRef = useRef(warpIntensity);
  const reducedMotionRef = useRef(reducedMotion);

  useEffect(() => {
    warpRef.current = warpIntensity;
  }, [warpIntensity]);

  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
      console.warn('WebGL initialization failed in CosmicVoidCanvas, falling back.', e);
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030509, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 800;

    // Mobile performance cap: cap pixel ratio at 1.5 for performance (F14)
    const isMobile = window.innerWidth < 768;
    const maxDPR = isMobile ? 1.5 : 2;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
    container.appendChild(renderer.domElement);

    // 2. Cosmic Star Tunnel (capped to 6,000 on mobile, 10,000 on desktop)
    const starCount = isMobile ? 6000 : 10000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const goldColor = new THREE.Color(0xd4af37);
    const lightGold = new THREE.Color(0xfdf3d8);
    const deepBlue = new THREE.Color(0x23395d);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = THREE.MathUtils.randFloat(30, 900);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);

      starPositions[i3] = Math.cos(theta) * radius;
      starPositions[i3 + 1] = Math.sin(theta) * radius;
      starPositions[i3 + 2] = THREE.MathUtils.randFloat(-1500, 1000);

      const col = Math.random() > 0.6 ? lightGold : Math.random() > 0.3 ? goldColor : deepBlue;
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Custom circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(245,230,179,0.8)');
      grad.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const starTexture = new THREE.CanvasTexture(canvas);

    const starMaterial = new THREE.PointsMaterial({
      size: 3.2,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starSystem = new THREE.Points(starGeometry, starMaterial);
    scene.add(starSystem);

    // 3. Sacred Golden Sri Yantra Rings
    const ringGroup = new THREE.Group();
    const ringCount = 5;
    const ringGeometries: THREE.BufferGeometry[] = [];
    const ringMaterials: THREE.Material[] = [];

    for (let r = 0; r < ringCount; r++) {
      const ringGeo = new THREE.RingGeometry(180 + r * 60, 181.5 + r * 60, 64);
      ringGeometries.push(ringGeo);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12 - r * 0.015,
        blending: THREE.AdditiveBlending,
      });
      ringMaterials.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.z = -200 - r * 150;
      ringGroup.add(ring);
    }
    scene.add(ringGroup);

    // 4. Subtle Mouse Gyro Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.3;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Window Resize Handler
    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Visibility change handler: pause loop when tab is hidden (F13)
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 6. Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();
    let smoothedWarp = warpRef.current;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isTabVisible || !renderer) return;

      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.05);
      const targetWarp = warpRef.current;

      const dampRate = targetWarp > smoothedWarp ? 10.0 : 4.0;
      smoothedWarp += (targetWarp - smoothedWarp) * (1 - Math.exp(-dampRate * delta));

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX * 0.3;
      camera.position.y = -targetY * 0.3;

      const isReduced = reducedMotionRef.current;
      const speedPerSecond = isReduced
        ? 24 + smoothedWarp * 50
        : 48 + Math.pow(smoothedWarp, 1.8) * 11652;
      const stepSpeed = speedPerSecond * delta;

      const positions = starGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        positions[i3 + 2] += stepSpeed;

        if (positions[i3 + 2] > 900) {
          positions[i3 + 2] = -1200;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      ringGroup.rotation.z += (isReduced ? 0.02 : 0.09 + smoothedWarp * 1.2) * delta;

      camera.fov = isReduced ? 60 : 60 + smoothedWarp * 35;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);

      // Complete resource disposal (F13)
      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      ringGeometries.forEach((g) => g.dispose());
      ringMaterials.forEach((m) => m.dispose());

      if (renderer) {
        if (container && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.forceContextLoss();
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
