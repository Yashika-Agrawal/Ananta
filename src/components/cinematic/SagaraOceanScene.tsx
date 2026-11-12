import React, { MutableRefObject, useEffect, useRef } from 'react';
import * as THREE from 'three/webgpu';
import { WaterMesh } from 'three/addons/objects/WaterMesh.js';
import { createCelestialSkiff, updateSkiffForScroll } from './CelestialSkiff.js';

interface SagaraOceanSceneProps {
  travelRef: MutableRefObject<number>;
  travelTargetRef: MutableRefObject<number>;
  steerRef: MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>;
  reducedMotion: boolean;
  onTravel: (value: number) => void;
  onGpuFailure: () => void;
}

const WATER_WIDTH = 10000;
const WATER_DEPTH = 10000;
const WATER_LEVEL = -0.15;

/** A seamless, procedural tile used as WaterMesh's normal map; no network asset. */
const createOceanNormalMap = (): THREE.DataTexture => {
  const size = 256;
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const u = (x / size) * Math.PI * 2;
      const v = (y / size) * Math.PI * 2;
      const slopeX = Math.sin(u * 3 + Math.cos(v * 2)) * 0.42 + Math.sin(u * 7 - v * 2) * 0.16;
      const slopeY = Math.cos(v * 4 + Math.sin(u * 2)) * 0.38 + Math.sin(v * 8 + u * 3) * 0.14;
      const normal = new THREE.Vector3(-slopeX, -slopeY, 1).normalize();
      const offset = (y * size + x) * 4;
      data[offset] = Math.round((normal.x * 0.5 + 0.5) * 255);
      data[offset + 1] = Math.round((normal.y * 0.5 + 0.5) * 255);
      data[offset + 2] = Math.round((normal.z * 0.5 + 0.5) * 255);
      data[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.UnsignedByteType);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
};

/**
 * Uses the Three.js WaterMesh reflection/distortion effect on an endless plane.
 * The boat, controls, stars, destination and motion lifecycle stay in this scene;
 * the generated image is only used by the React fallback if renderer init fails.
 */
export const SagaraOceanScene: React.FC<SagaraOceanSceneProps> = ({
  travelRef,
  travelTargetRef,
  steerRef,
  reducedMotion,
  onTravel,
  onGpuFailure,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let frame = 0;
    let renderer: THREE.WebGPURenderer;
    try {
      renderer = new THREE.WebGPURenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    } catch {
      onGpuFailure();
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.72;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 20000);
    camera.position.set(0, 2.3, 10);
    scene.add(new THREE.HemisphereLight(0xa9c2e4, 0x17131b, 1.45));
    const moonlight = new THREE.DirectionalLight(0xb9cfea, 2.1);
    moonlight.position.set(-12, 18, 8);
    scene.add(moonlight);

    // A vertex-coloured skydome keeps the composition cosmic without a sun model.
    const skyGeometry = new THREE.SphereGeometry(6000, 64, 32);
    const skyPositions = skyGeometry.getAttribute('position');
    const skyColors = new Float32Array(skyPositions.count * 3);
    const upperSky = new THREE.Color(0x071326);
    const highSky = new THREE.Color(0x1b3155);
    const lowSky = new THREE.Color(0x10192a);
    const horizonSky = new THREE.Color(0x635347);
    const skyColor = new THREE.Color();
    for (let i = 0; i < skyPositions.count; i += 1) {
      const height = skyPositions.getY(i) / 6000;
      if (height > 0.05) {
        skyColor.copy(highSky).lerp(upperSky, THREE.MathUtils.clamp((height - 0.05) / 0.75, 0, 1));
      } else if (height > -0.12) {
        skyColor.copy(horizonSky).lerp(highSky, (height + 0.12) / 0.17);
      } else {
        skyColor.copy(lowSky).lerp(horizonSky, THREE.MathUtils.clamp((height + 0.5) / 0.38, 0, 1));
      }
      skyColors[i * 3] = skyColor.r;
      skyColors[i * 3 + 1] = skyColor.g;
      skyColors[i * 3 + 2] = skyColor.b;
    }
    skyGeometry.setAttribute('color', new THREE.BufferAttribute(skyColors, 3));
    const sky = new THREE.Mesh(skyGeometry, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, depthWrite: false }));
    scene.add(sky);

    const oceanNormals = createOceanNormalMap();
    const waterGeometry = new THREE.PlaneGeometry(WATER_WIDTH, WATER_DEPTH);
    let water: THREE.Mesh;
    let waterMaterial: THREE.Material;
    if (reducedMotion) {
      waterMaterial = new THREE.MeshStandardMaterial({
        color: 0x0b2d4d,
        roughness: 0.3,
        metalness: 0.32,
        normalMap: oceanNormals,
        normalScale: new THREE.Vector2(0.55, 0.55),
        side: THREE.DoubleSide,
      });
      water = new THREE.Mesh(waterGeometry, waterMaterial);
    } else {
      const reflectedHorizonLight = new THREE.Vector3(-0.28, 0.19, -1).normalize();
      const reflectiveWater = new WaterMesh(waterGeometry, {
        waterNormals: oceanNormals,
        waterColor: 0x0a2b49,
        sunColor: 0xc3d7ee,
        sunDirection: reflectedHorizonLight,
        distortionScale: 3.7,
        size: 1.8,
        resolutionScale: window.innerWidth < 700 ? 0.22 : 0.32,
      });
      reflectiveWater.position.y = WATER_LEVEL;
      water = reflectiveWater;
      waterMaterial = reflectiveWater.material;
    }
    water.rotation.x = -Math.PI / 2;
    water.position.z = -2500;
    water.frustumCulled = false;
    scene.add(water);

    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256;
    glowCanvas.height = 128;
    const glowContext = glowCanvas.getContext('2d');
    if (glowContext) {
      const gradient = glowContext.createRadialGradient(128, 75, 2, 128, 75, 100);
      gradient.addColorStop(0, 'rgba(255,231,190,0.78)');
      gradient.addColorStop(0.25, 'rgba(181,199,235,0.28)');
      gradient.addColorStop(1, 'rgba(80,120,190,0)');
      glowContext.fillStyle = gradient;
      glowContext.fillRect(0, 0, 256, 128);
    }
    const glowTexture = new THREE.CanvasTexture(glowCanvas);
    const glowMaterial = new THREE.SpriteMaterial({ map: glowTexture, transparent: true, depthWrite: false, opacity: 0.78 });
    const horizonGlow = new THREE.Sprite(glowMaterial);
    horizonGlow.position.set(0, 6, -115);
    horizonGlow.scale.set(62, 28, 1);
    scene.add(horizonGlow);

    const starPositions = new Float32Array(700 * 3);
    for (let i = 0; i < 700; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 65 + Math.random() * 145;
      starPositions[i * 3] = Math.cos(angle) * radius;
      starPositions[i * 3 + 1] = 12 + Math.random() * 100;
      starPositions[i * 3 + 2] = -30 - Math.random() * 230;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xc9d8ff, size: 0.42, transparent: true, opacity: 0.72, sizeAttenuation: true });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Use the supplied detailed vessel; its bow points +Z, so turn it toward
    // the camera's forward route (-Z). Keep every generated resource for cleanup.
    const boat = createCelestialSkiff();
    boat.rotation.y = Math.PI;
    const boatGeometries = new Set<THREE.BufferGeometry>();
    const boatMaterials = new Set<THREE.Material>();
    boat.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      boatGeometries.add(mesh.geometry);
      if (Array.isArray(mesh.material)) mesh.material.forEach((material) => boatMaterials.add(material));
      else boatMaterials.add(mesh.material);
    });
    scene.add(boat);

    const island = new THREE.Group();
    const islandMaterial = new THREE.MeshStandardMaterial({ color: 0x18243a, roughness: 1 });
    const ridges = [
      { x: -10, y: 0, z: -112, scale: [8, 3.8, 5] as const },
      { x: -16, y: -0.4, z: -114, scale: [6, 2.7, 4] as const },
      { x: -5, y: -0.6, z: -116, scale: [7, 2.2, 4] as const },
    ];
    for (const ridge of ridges) {
      const hill = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 1), islandMaterial);
      hill.position.set(ridge.x, ridge.y, ridge.z);
      hill.scale.set(ridge.scale[0], ridge.scale[1], ridge.scale[2]);
      island.add(hill);
    }
    scene.add(island);

    const ripplePlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -WATER_LEVEL);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const hitPoint = new THREE.Vector3();
    const rippleGeometry = new THREE.RingGeometry(0.08, 0.12, 48);
    const activeRipples: Array<{ mesh: THREE.Mesh; material: THREE.MeshBasicMaterial; age: number }> = [];
    const onPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      if (!raycaster.ray.intersectPlane(ripplePlane, hitPoint)) return;
      for (let ringIndex = 0; ringIndex < 3; ringIndex += 1) {
        const material = new THREE.MeshBasicMaterial({ color: 0x91bed7, transparent: true, opacity: 0.42, side: THREE.DoubleSide, depthWrite: false });
        const ring = new THREE.Mesh(rippleGeometry, material);
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(hitPoint.x, WATER_LEVEL + 0.015 + ringIndex * 0.002, hitPoint.z);
        ring.scale.setScalar(0.35);
        scene.add(ring);
        activeRipples.push({ mesh: ring, material, age: -ringIndex * 0.15 });
      }
      while (activeRipples.length > 30) {
        const old = activeRipples.shift();
        if (old) {
          scene.remove(old.mesh);
          old.material.dispose();
        }
      }
    };
    canvas.addEventListener('pointerdown', onPointerDown);

    const resize = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.25 : 1.6));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    let lastFrame = 0;
    let elapsed = 0;
    let uiElapsed = 0;
    const followTarget = new THREE.Vector3();
    const renderFrame = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(renderFrame);
      if (document.visibilityState === 'hidden') {
        lastFrame = 0;
        return;
      }
      const dt = lastFrame === 0 ? 0 : Math.min((now - lastFrame) / 1000, 0.04);
      lastFrame = now;
      elapsed += dt;
      const damping = 1 - Math.exp(-3.1 * dt);
      travelRef.current += (travelTargetRef.current - travelRef.current) * damping;
      const steer = steerRef.current;
      steer.x += (steer.targetX - steer.x) * (1 - Math.exp(-3.8 * dt));
      steer.y += (steer.targetY - steer.y) * (1 - Math.exp(-3.8 * dt));
      updateSkiffForScroll(boat, travelRef.current, elapsed, {
        from: { x: steer.x * 0.65, y: 0, z: 1.4 },
        to: { x: steer.x * 3.6, y: 0, z: -40.6 },
        bob: reducedMotion ? 0.022 : 0.055,
        yaw: 0.08,
      });
      boat.rotation.y += Math.PI + steer.x * 0.12;
      followTarget.set(boat.position.x * 0.38, 1.5, boat.position.z + 4.5);
      camera.position.x += (boat.position.x * 0.48 - camera.position.x) * (1 - Math.exp(-2.0 * dt));
      camera.position.z += (boat.position.z + 10.5 - camera.position.z) * (1 - Math.exp(-2.4 * dt));
      camera.position.y += (2.3 + steer.y * 0.12 - camera.position.y) * (1 - Math.exp(-2.0 * dt));
      camera.lookAt(followTarget.x, followTarget.y, followTarget.z - 35);
      sky.position.copy(camera.position);
      island.position.z = Math.min(12, travelRef.current * 32);
      for (let i = activeRipples.length - 1; i >= 0; i -= 1) {
        const ripple = activeRipples[i];
        ripple.age += dt;
        if (ripple.age < 0) continue;
        if (ripple.age > 2.2) {
          scene.remove(ripple.mesh);
          ripple.material.dispose();
          activeRipples.splice(i, 1);
          continue;
        }
        const progress = ripple.age / 2.2;
        ripple.mesh.scale.setScalar(0.35 + progress * 18);
        ripple.material.opacity = 0.38 * (1 - progress);
      }
      renderer.render(scene, camera);
      uiElapsed += dt;
      if (uiElapsed >= 0.12) {
        onTravel(travelRef.current);
        uiElapsed = 0;
      }
    };

    void renderer.init().then(() => {
      if (!disposed) frame = requestAnimationFrame(renderFrame);
    }).catch(() => {
      if (!disposed) onGpuFailure();
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      activeRipples.forEach(({ mesh, material }) => {
        scene.remove(mesh);
        material.dispose();
      });
      rippleGeometry.dispose();
      waterGeometry.dispose();
      waterMaterial.dispose();
      oceanNormals.dispose();
      skyGeometry.dispose();
      (sky.material as THREE.Material).dispose();
      glowTexture.dispose();
      glowMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      boatGeometries.forEach((geometry) => geometry.dispose());
      boatMaterials.forEach((material) => material.dispose());
      island.traverse((object) => {
        if (object instanceof THREE.Mesh) object.geometry.dispose();
      });
      islandMaterial.dispose();
      renderer.dispose();
    };
  }, [onGpuFailure, onTravel, reducedMotion, steerRef, travelRef, travelTargetRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label="Interactive simulated cosmic ocean" />;
};
