import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DEnvironmentProps {
  environment: 'palace-court' | 'madhuvana-forest' | 'narada-darshan' | 'tapasya-fire' | 'polestar-sky';
  breathHoldLevel?: number; // 0 to 1 for tapasya stillness
}

export const Scene3DEnvironment: React.FC<Scene3DEnvironmentProps> = ({
  environment,
  breathHoldLevel = 0,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const breathRef = useRef(breathHoldLevel);

  useEffect(() => {
    breathRef.current = breathHoldLevel;
  }, [breathHoldLevel]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1500
    );
    camera.position.z = 450;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Color palettes based on scene
    let fogColor = 0x05070e;
    let particleColor = 0xd4af37;
    let particleCount = 2000;

    if (environment === 'palace-court') {
      fogColor = 0x0c0714; // Royal amber/shadow
      particleColor = 0xe0a96d;
    } else if (environment === 'madhuvana-forest') {
      fogColor = 0x030d0a; // Deep Yamuna midnight green/forest
      particleColor = 0x5cdb95;
      particleCount = 2500;
    } else if (environment === 'narada-darshan') {
      fogColor = 0x0a0c18; // Celestial gold aura
      particleColor = 0xf5d061;
      particleCount = 3500;
    } else if (environment === 'tapasya-fire') {
      fogColor = 0x140604; // Internal ascetic fire/tapasya
      particleColor = 0xf07167;
      particleCount = 4000;
    } else if (environment === 'polestar-sky') {
      fogColor = 0x020510; // Crystalline North Star polar vault
      particleColor = 0xe8f1f5;
      particleCount = 5000;
    }

    scene.fog = new THREE.FogExp2(fogColor, 0.0018);

    // 3. Ambient atmospheric particles (Fireflies in forest, embers in tapasya, stars in polestar)
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = THREE.MathUtils.randFloatSpread(1200);
      positions[i3 + 1] = THREE.MathUtils.randFloatSpread(800);
      positions[i3 + 2] = THREE.MathUtils.randFloatSpread(1000);
      speeds[i] = THREE.MathUtils.randFloat(0.2, 1.2);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: environment === 'polestar-sky' ? 2.8 : 3.5,
      color: particleColor,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMat);
    scene.add(particles);

    // 4. Polestar central pivot geometry (For Act V)
    let polestarRings: THREE.Group | null = null;
    if (environment === 'polestar-sky') {
      polestarRings = new THREE.Group();
      for (let r = 1; r <= 4; r++) {
        const ringGeo = new THREE.RingGeometry(r * 70, r * 70 + 2, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xd4af37,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.15 / r,
          blending: THREE.AdditiveBlending,
        });
        const mesh = new THREE.Mesh(ringGeo, ringMat);
        polestarRings.add(mesh);
      }
      scene.add(polestarRings);
    }

    // 5. Parallax Mouse Listener
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.2;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 6. Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth camera motion
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5;

      const posArray = particleGeometry.attributes.position.array as Float32Array;

      // In Tapasya, as breath is held, particles slow down into absolute cosmic stillness
      const breathStillness = Math.max(0.05, 1 - breathRef.current * 0.95);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Upward or rotating flow
        if (environment === 'polestar-sky') {
          // Circular rotation around the Pole Star center
          const x = posArray[i3];
          const y = posArray[i3 + 1];
          const angle = 0.0008 * speeds[i];
          posArray[i3] = x * Math.cos(angle) - y * Math.sin(angle);
          posArray[i3 + 1] = x * Math.sin(angle) + y * Math.cos(angle);
        } else {
          posArray[i3 + 1] += speeds[i] * breathStillness;
          if (posArray[i3 + 1] > 400) {
            posArray[i3 + 1] = -400;
          }
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      if (polestarRings) {
        polestarRings.rotation.z += 0.001;
      }

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
      particleGeometry.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [environment]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

