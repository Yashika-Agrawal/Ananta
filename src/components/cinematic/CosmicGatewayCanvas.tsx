import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CosmicGatewayCanvasProps {
  activeGatewayIndex: number | null;
  transitioningTo: string | null;
  reducedMotion?: boolean;
}

export const CosmicGatewayCanvas: React.FC<CosmicGatewayCanvasProps> = ({
  activeGatewayIndex,
  transitioningTo,
  reducedMotion = false,
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef<number | null>(activeGatewayIndex);
  const transitionRef = useRef<string | null>(transitioningTo);
  const reducedMotionRef = useRef<boolean>(reducedMotion);

  useEffect(() => {
    activeIndexRef.current = activeGatewayIndex;
  }, [activeGatewayIndex]);

  useEffect(() => {
    transitionRef.current = transitioningTo;
  }, [transitioningTo]);

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
      console.warn('WebGL initialization failed in CosmicGatewayCanvas, falling back.', e);
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040711, 0.0009);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    camera.position.set(0, 70, 620);

    const isMobile = window.innerWidth < 768;
    const maxDPR = isMobile ? 1.5 : 2;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
    container.appendChild(renderer.domElement);

    // 2. Cosmic Starfield & Nebula
    const starCount = isMobile ? 3500 : 6000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const goldColor = new THREE.Color(0xd4af37);
    const azureColor = new THREE.Color(0x38bdf8);
    const brightWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      const radius = THREE.MathUtils.randFloat(150, 1500);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-Math.PI * 0.45, Math.PI * 0.45);

      starPositions[i3] = radius * Math.cos(phi) * Math.sin(theta);
      starPositions[i3 + 1] = radius * Math.sin(phi);
      starPositions[i3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

      const col = Math.random() > 0.6 ? brightWhite : Math.random() > 0.3 ? goldColor : azureColor;
      starColors[i3] = col.r;
      starColors[i3 + 1] = col.g;
      starColors[i3 + 2] = col.b;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 3.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // 3. Ground Kaalachakra Disc
    const mandalaGroup = new THREE.Group();
    const mandalaGeometries: THREE.BufferGeometry[] = [];
    const mandalaMaterials: THREE.Material[] = [];

    [250, 380, 520].forEach((r, idx) => {
      const ringGeo = new THREE.RingGeometry(r, r + 2.5, 64);
      mandalaGeometries.push(ringGeo);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.18 - idx * 0.04,
        blending: THREE.AdditiveBlending,
      });
      mandalaMaterials.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -190;
      mandalaGroup.add(ring);
    });
    scene.add(mandalaGroup);

    // 4. Five Grand Cosmic 3D Gateway Portals
    const gatewayThemes = [
      { color: 0xf59e0b, emissive: 0xd97706, aura: 0xfef3c7 },
      { color: 0x0ea5e9, emissive: 0x0284c7, aura: 0xe0f2fe },
      { color: 0xa855f7, emissive: 0x9333ea, aura: 0xf3e8ff },
      { color: 0xf97316, emissive: 0xea580c, aura: 0xffedd5 },
      { color: 0x10b981, emissive: 0x059669, aura: 0xd1fae5 },
    ];

    const portalGroups: THREE.Group[] = [];
    const portalGeometries: THREE.BufferGeometry[] = [];
    const portalMaterials: THREE.Material[] = [];
    const portalCount = 5;
    const arcSpread = 820;

    for (let i = 0; i < portalCount; i++) {
      const pGroup = new THREE.Group();
      const posX = ((i - 2) / 2) * (arcSpread / 2);
      const posZ = -Math.abs(i - 2) * 55 - 40;
      const posY = 15;

      pGroup.position.set(posX, posY, posZ);

      // Outer Arch Ring
      const outerRingGeo = new THREE.TorusGeometry(85, 3.5, 20, 64);
      portalGeometries.push(outerRingGeo);
      const outerRingMat = new THREE.MeshStandardMaterial({
        color: gatewayThemes[i].color,
        emissive: gatewayThemes[i].emissive,
        emissiveIntensity: 0.8,
        roughness: 0.3,
        metalness: 0.8,
      });
      portalMaterials.push(outerRingMat);
      const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
      pGroup.add(outerRing);

      // Inner Glowing Disc
      const discGeo = new THREE.CircleGeometry(80, 48);
      portalGeometries.push(discGeo);
      const discMat = new THREE.MeshBasicMaterial({
        color: gatewayThemes[i].color,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      portalMaterials.push(discMat);
      const disc = new THREE.Mesh(discGeo, discMat);
      pGroup.add(disc);

      // Energy Ring
      const energyRingGeo = new THREE.RingGeometry(65, 72, 32);
      portalGeometries.push(energyRingGeo);
      const energyRingMat = new THREE.MeshBasicMaterial({
        color: gatewayThemes[i].aura,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      portalMaterials.push(energyRingMat);
      const energyRing = new THREE.Mesh(energyRingGeo, energyRingMat);
      pGroup.add(energyRing);

      const pLight = new THREE.PointLight(gatewayThemes[i].color, 1.2, 300);
      pLight.position.set(0, 0, 30);
      pGroup.add(pLight);

      scene.add(pGroup);
      portalGroups.push(pGroup);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xd4af37, 1.5, 800);
    centerLight.position.set(0, 200, 300);
    scene.add(centerLight);

    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 70;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.35;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!isTabVisible || !renderer) return;
      const time = clock.getElapsedTime();

      targetCamX += (mouseX - targetCamX) * 0.05;
      targetCamY += (70 - mouseY - targetCamY) * 0.05;

      const isReduced = reducedMotionRef.current;
      if (transitionRef.current) {
        camera.position.z += (-150 - camera.position.z) * (isReduced ? 0.03 : 0.08);
        if (!isReduced) {
          camera.fov = Math.min(105, camera.fov + 0.6);
          camera.updateProjectionMatrix();
        }
      } else {
        camera.position.x = isReduced ? 0 : targetCamX * 0.5;
        camera.position.y = isReduced ? 70 : targetCamY;
        camera.position.z = 620;
        camera.lookAt(0, 20, 0);
      }

      mandalaGroup.rotation.y = time * (isReduced ? 0.005 : 0.02);

      portalGroups.forEach((group, idx) => {
        const isHovered = activeIndexRef.current === idx;
        const targetScale = isHovered ? 1.3 : 1.0;
        group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        if (!isReduced) {
          group.position.y = 15 + Math.sin(time * 2 + idx * 1.2) * 8;
        }

        const energyRing = group.children[2] as THREE.Mesh;
        if (energyRing && !isReduced) {
          energyRing.rotation.z = time * (idx % 2 === 0 ? 1 : -1) * 0.8;
        }

        const disc = group.children[1] as THREE.Mesh;
        if (disc) {
          const discMat = disc.material as THREE.MeshBasicMaterial;
          discMat.opacity = isHovered ? 0.65 : 0.2 + Math.sin(time * 3 + idx) * 0.08;
        }
      });

      starPoints.rotation.y = time * 0.004;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);

      // Disposal (F13)
      starGeometry.dispose();
      starMaterial.dispose();
      mandalaGeometries.forEach((g) => g.dispose());
      mandalaMaterials.forEach((m) => m.dispose());
      portalGeometries.forEach((g) => g.dispose());
      portalMaterials.forEach((m) => m.dispose());

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
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
