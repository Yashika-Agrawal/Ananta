import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CosmicVoidCanvasProps {
  warpIntensity: number; // 0.0 = calm cosmic ocean, 1.0 = warp hyperspace
  targetEra?: 'pralaya' | 'satya' | 'madhuvana';
  className?: string;
}

export const CosmicVoidCanvas: React.FC<CosmicVoidCanvasProps> = ({
  warpIntensity,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const warpRef = useRef(warpIntensity);

  useEffect(() => {
    warpRef.current = warpIntensity;
  }, [warpIntensity]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

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

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Deep Cosmic Star Tunnel (12,000 particle stars)
    const starCount = 10000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starOriginalZ = new Float32Array(starCount);

    const goldColor = new THREE.Color(0xd4af37);
    const lightGold = new THREE.Color(0xfdf3d8);
    const deepBlue = new THREE.Color(0x23395d);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // Cylinder / tunnel distribution
      const radius = THREE.MathUtils.randFloat(30, 900);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);

      starPositions[i3] = Math.cos(theta) * radius;
      starPositions[i3 + 1] = Math.sin(theta) * radius;
      starPositions[i3 + 2] = THREE.MathUtils.randFloat(-1500, 1000);
      starOriginalZ[i] = starPositions[i3 + 2];

      // Mix colors: mostly antique gold and subtle starlight
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

    // 3. Sacred Golden Sri Yantra Rings in Depth
    const ringGroup = new THREE.Group();
    const ringCount = 5;
    for (let r = 0; r < ringCount; r++) {
      const ringGeo = new THREE.RingGeometry(180 + r * 60, 181.5 + r * 60, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12 - r * 0.015,
        blending: THREE.AdditiveBlending,
      });
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
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();
    let smoothedWarp = warpRef.current;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const rawDelta = clock.getDelta();
      const delta = Math.min(rawDelta, 0.05); // clamp delta against tab switch jumps
      const targetWarp = warpRef.current;

      // Frame-rate independent exponential smoothing for warp
      // Faster attack on release (~10.0), smoother release when settling (~4.0)
      const dampRate = targetWarp > smoothedWarp ? 10.0 : 4.0;
      smoothedWarp += (targetWarp - smoothedWarp) * (1 - Math.exp(-dampRate * delta));

      // Mouse smoothing
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX * 0.3;
      camera.position.y = -targetY * 0.3;

      // Continuous, smooth star speed:
      // at warp 0 => 48 units/sec (~0.8 at 60fps)
      // at warp 1 => 48 + 11652 = 11,700 units/sec (~195 at 60fps)
      const speedPerSecond = 48 + Math.pow(smoothedWarp, 1.8) * 11652;
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

      // Delta-scaled ring rotation
      ringGroup.rotation.z += (0.09 + smoothedWarp * 1.2) * delta;

      // Camera FOV smoothly driven by smoothed warp (no instant snapping)
      camera.fov = 60 + smoothedWarp * 35;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
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
