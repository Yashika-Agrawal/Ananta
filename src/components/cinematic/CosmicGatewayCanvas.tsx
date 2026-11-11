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
      ring.position.y = -85;
      mandalaGroup.add(ring);
    });
    scene.add(mandalaGroup);

    // 4. A row of distinct, ancient landmarks: an atlas rather than five colored rings.
    const portalGroups: THREE.Group[] = [];
    const portalGeometries: THREE.BufferGeometry[] = [];
    const portalMaterials: THREE.Material[] = [];
    const landmarkLights: THREE.PointLight[] = [];
    const portalCount = 5;
    const arcSpread = 760;
    const stone = new THREE.MeshStandardMaterial({ color: 0x746a58, roughness: 0.92, metalness: 0.08 });
    const darkStone = new THREE.MeshStandardMaterial({ color: 0x302c28, roughness: 0.88, metalness: 0.12 });
    const bronze = new THREE.MeshStandardMaterial({ color: 0x9a7741, roughness: 0.48, metalness: 0.72, emissive: 0x241707, emissiveIntensity: 0.25 });
    const page = new THREE.MeshStandardMaterial({ color: 0xb7a785, roughness: 0.96, metalness: 0.02 });
    const crystal = new THREE.MeshStandardMaterial({ color: 0x718887, roughness: 0.28, metalness: 0.28, emissive: 0x152b2b, emissiveIntensity: 0.32, flatShading: true });
    const bark = new THREE.MeshStandardMaterial({ color: 0x554438, roughness: 0.95, metalness: 0.02 });
    portalMaterials.push(stone, darkStone, bronze, page, crystal, bark);
    const addShape = (group: THREE.Group, geometry: THREE.BufferGeometry, material: THREE.Material, position: THREE.Vector3, rotation?: THREE.Euler, scale?: THREE.Vector3) => {
      portalGeometries.push(geometry);
      const shape = new THREE.Mesh(geometry, material);
      shape.position.copy(position);
      if (rotation) shape.rotation.copy(rotation);
      if (scale) shape.scale.copy(scale);
      shape.castShadow = true;
      shape.receiveShadow = true;
      group.add(shape);
      return shape;
    };
    const addBranch = (group: THREE.Group, start: THREE.Vector3, end: THREE.Vector3, radius: number) => {
      const delta = new THREE.Vector3().subVectors(end, start);
      const geometry = new THREE.CylinderGeometry(radius * 0.72, radius, delta.length(), 7);
      const branch = addShape(group, geometry, bark, start.clone().add(end).multiplyScalar(0.5));
      branch.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    };

    for (let i = 0; i < portalCount; i++) {
      const pGroup = new THREE.Group();
      const posX = (i - 2) * (arcSpread / 4);
      const posZ = -Math.abs(i - 2) * 46 - 35;
      const posY = 95;

      pGroup.position.set(posX, posY, posZ);
      const pedestal = addShape(pGroup, new THREE.CylinderGeometry(54, 65, 22, 12), stone, new THREE.Vector3(0, -157, 0));
      pedestal.rotation.y = 0.12;
      addShape(pGroup, new THREE.CylinderGeometry(46, 52, 8, 12), bronze, new THREE.Vector3(0, -141, 0));

      if (i === 0) {
        // Katha: a time-worn manuscript on a low reading altar.
        addShape(pGroup, new THREE.BoxGeometry(88, 12, 68), darkStone, new THREE.Vector3(0, -127, 0), new THREE.Euler(0.08, 0, 0));
        addShape(pGroup, new THREE.BoxGeometry(74, 4, 58), page, new THREE.Vector3(-2, -119, 0), new THREE.Euler(0.08, 0, -0.08));
        addShape(pGroup, new THREE.BoxGeometry(74, 4, 58), page, new THREE.Vector3(2, -115, 0), new THREE.Euler(0.08, 0, 0.08));
        for (let line = 0; line < 5; line++) addShape(pGroup, new THREE.BoxGeometry(42 - line * 3, 0.7, 1), bronze, new THREE.Vector3(-4, -112.5, -17 + line * 8));
        addShape(pGroup, new THREE.CylinderGeometry(3, 3, 74, 8), bronze, new THREE.Vector3(0, -119, 29), new THREE.Euler(Math.PI / 2, 0, 0));
      } else if (i === 1) {
        // Brahmanda: a measured orrery with worlds held in tilted orbital bands.
        addShape(pGroup, new THREE.SphereGeometry(30, 24, 18), bronze, new THREE.Vector3(0, -58, 0));
        [[52, 0.25, 0.18], [72, 0.9, -0.48], [91, 1.25, 0.56]].forEach(([radius, rx, rz]) => {
          addShape(pGroup, new THREE.TorusGeometry(radius, 1.7, 8, 72), bronze, new THREE.Vector3(0, -58, 0), new THREE.Euler(rx, 0.15, rz));
        });
        [[62, 0.6], [82, 2.6], [101, 4.4]].forEach(([radius, angle]) => {
          addShape(pGroup, new THREE.SphereGeometry(5.5, 12, 10), page, new THREE.Vector3(Math.cos(angle) * radius, -58 + Math.sin(angle) * radius * 0.18, Math.sin(angle) * radius));
        });
      } else if (i === 2) {
        // Tattva: a weathered cluster of faceted stones, not a glowing UI glyph.
        addShape(pGroup, new THREE.IcosahedronGeometry(39, 1), crystal, new THREE.Vector3(0, -73, 0), new THREE.Euler(0.18, 0.4, 0.12));
        addShape(pGroup, new THREE.IcosahedronGeometry(24, 0), stone, new THREE.Vector3(-39, -116, 14), new THREE.Euler(0.35, 0.2, 0.5));
        addShape(pGroup, new THREE.IcosahedronGeometry(19, 0), darkStone, new THREE.Vector3(38, -120, -8), new THREE.Euler(0.2, 0.9, 0.3));
        addShape(pGroup, new THREE.TorusGeometry(50, 1.2, 6, 48), bronze, new THREE.Vector3(0, -102, 0), new THREE.Euler(0.4, 0.2, 0.15));
      } else if (i === 3) {
        // Charitra: a branching lineage tree, its lights held like quiet stars.
        const root = new THREE.Vector3(0, -145, 0);
        const trunk = new THREE.Vector3(0, -42, 0);
        addBranch(pGroup, root, trunk, 10);
        const ends = [new THREE.Vector3(-53, -8, 4), new THREE.Vector3(47, -5, -8), new THREE.Vector3(-28, 30, -12), new THREE.Vector3(27, 39, 10), new THREE.Vector3(0, 59, 0)];
        addBranch(pGroup, trunk, ends[0], 6); addBranch(pGroup, trunk, ends[1], 6);
        addBranch(pGroup, new THREE.Vector3(-22, -25, 1), ends[2], 4.5); addBranch(pGroup, new THREE.Vector3(20, -23, -2), ends[3], 4.5);
        addBranch(pGroup, new THREE.Vector3(0, -42, 0), ends[4], 5);
        ends.forEach((point, index) => addShape(pGroup, new THREE.SphereGeometry(index === 4 ? 8 : 6, 12, 10), bronze, point));
      } else {
        // My Granth: an open volume resting on a small stone lectern.
        addShape(pGroup, new THREE.BoxGeometry(9, 5, 66), darkStone, new THREE.Vector3(0, -132, 0));
        addShape(pGroup, new THREE.BoxGeometry(48, 3, 62), page, new THREE.Vector3(-24, -127, 0), new THREE.Euler(0, 0, 0.12));
        addShape(pGroup, new THREE.BoxGeometry(48, 3, 62), page, new THREE.Vector3(24, -127, 0), new THREE.Euler(0, 0, -0.12));
        addShape(pGroup, new THREE.BoxGeometry(1, 1, 42), bronze, new THREE.Vector3(-26, -124.5, -3), new THREE.Euler(0, 0, 0.12));
        addShape(pGroup, new THREE.BoxGeometry(1, 1, 42), bronze, new THREE.Vector3(26, -124.5, -3), new THREE.Euler(0, 0, -0.12));
        addShape(pGroup, new THREE.CylinderGeometry(2, 3, 52, 8), bronze, new THREE.Vector3(55, -94, 0), new THREE.Euler(0.1, 0, 0.22));
      }

      const pLight = new THREE.PointLight(0xd8bd7a, 0.48, 260);
      pLight.position.set(0, -30, 80);
      pGroup.add(pLight);
      landmarkLights.push(pLight);

      scene.add(pGroup);
      portalGroups.push(pGroup);
    }

    const ambientLight = new THREE.AmbientLight(0xb9c4cf, 0.75);
    scene.add(ambientLight);

    const centerLight = new THREE.PointLight(0xd8bd7a, 1.7, 1100);
    centerLight.position.set(0, 145, 260);
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
        const targetScale = isHovered ? 1.12 : 1.0;
        group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        if (!isReduced) {
          group.position.y = 95 + Math.sin(time * 0.65 + idx * 1.2) * 2.5;
          group.rotation.y = Math.sin(time * 0.22 + idx) * 0.035;
        }
        const light = landmarkLights[idx];
        light.intensity += ((isHovered ? 1.05 : 0.42) - light.intensity) * 0.08;
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
