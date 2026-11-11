import React, { MutableRefObject, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GPUComputationRenderer, Variable } from 'three/addons/misc/GPUComputationRenderer.js';

interface SagaraOceanSceneProps {
  travelRef: MutableRefObject<number>;
  travelTargetRef: MutableRefObject<number>;
  steerRef: MutableRefObject<{ x: number; y: number; targetX: number; targetY: number }>;
  rippleRef: MutableRefObject<{ x: number; y: number; strength: number }>;
  reducedMotion: boolean;
  onTravel: (value: number) => void;
  onGpuFailure: () => void;
}

const SIMULATION_SIZE = 128;
const WATER_WIDTH = 180;
const WATER_LENGTH = 300;

const heightmapShader = /* glsl */ `
  uniform vec2 ripplePosition;
  uniform float rippleStrength;
  uniform float deltaTime;
  void main() {
    vec2 cell = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cell;
    vec4 state = texture2D(heightmap, uv);
    float height = state.r;
    float velocity = state.g;
    float left = texture2D(heightmap, uv - vec2(cell.x, 0.0)).r;
    float right = texture2D(heightmap, uv + vec2(cell.x, 0.0)).r;
    float down = texture2D(heightmap, uv - vec2(0.0, cell.y)).r;
    float up = texture2D(heightmap, uv + vec2(0.0, cell.y)).r;
    float laplacian = left + right + down + up - 4.0 * height;
    velocity += laplacian * 52.0 * deltaTime;
    velocity *= exp(-1.8 * deltaTime);
    float distanceToRipple = distance(uv, ripplePosition);
    velocity += rippleStrength * exp(-distanceToRipple * 110.0) * 2.2;
    height += velocity * deltaTime;
    gl_FragColor = vec4(height, velocity, 0.0, 1.0);
  }
`;

export const SagaraOceanScene: React.FC<SagaraOceanSceneProps> = ({
  travelRef,
  travelTargetRef,
  steerRef,
  rippleRef,
  reducedMotion,
  onTravel,
  onGpuFailure,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    } catch {
      onGpuFailure();
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    let waterCompute: GPUComputationRenderer | null = null;
    let heightVariable!: Variable;
    try {
      waterCompute = new GPUComputationRenderer(SIMULATION_SIZE, SIMULATION_SIZE, renderer);
      waterCompute.setDataType(THREE.HalfFloatType);
      const initialHeight = waterCompute.createTexture();
      const initialData = initialHeight.image.data as Float32Array;
      for (let i = 0; i < initialData.length; i += 4) {
        initialData[i] = 0;
        initialData[i + 1] = 0;
        initialData[i + 2] = 0;
        initialData[i + 3] = 1;
      }
      heightVariable = waterCompute.addVariable('heightmap', heightmapShader, initialHeight);
      waterCompute.setVariableDependencies(heightVariable, [heightVariable]);
      heightVariable.wrapS = THREE.ClampToEdgeWrapping;
      heightVariable.wrapT = THREE.ClampToEdgeWrapping;
      heightVariable.material.uniforms.ripplePosition = { value: new THREE.Vector2(0.5, 0.5) };
      heightVariable.material.uniforms.rippleStrength = { value: 0 };
      heightVariable.material.uniforms.deltaTime = { value: 1 / 60 };
      if (waterCompute.init() !== null) throw new Error('GPU water simulation is unavailable');
    } catch {
      waterCompute?.dispose();
      renderer.dispose();
      onGpuFailure();
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08152a);
    scene.fog = new THREE.FogExp2(0x101c34, 0.0014);
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 500);
    camera.position.set(0, 3.2, 10);

    scene.add(new THREE.HemisphereLight(0x94b6e8, 0x101425, 1.65));
    const moonlight = new THREE.DirectionalLight(0xc2d8ff, 2.1);
    moonlight.position.set(-12, 20, 10);
    scene.add(moonlight);

    // A procedural radial sprite gives the distant horizon its warm cosmic dawn.
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
    const horizonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, transparent: true, depthWrite: false, opacity: 0.78 }));
    horizonGlow.position.set(0, 12, -115);
    horizonGlow.scale.set(62, 28, 1);
    scene.add(horizonGlow);

    const starPositions = new Float32Array(520 * 3);
    for (let i = 0; i < 520; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 65 + Math.random() * 115;
      starPositions[i * 3] = Math.cos(angle) * radius;
      starPositions[i * 3 + 1] = 12 + Math.random() * 90;
      starPositions[i * 3 + 2] = -30 - Math.random() * 190;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xc9d8ff, size: 0.42, transparent: true, opacity: 0.72, sizeAttenuation: true });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const waterUniforms = {
      heightmap: { value: waterCompute.getCurrentRenderTarget(heightVariable).texture },
      time: { value: 0 },
      textureStep: { value: 1 / SIMULATION_SIZE },
      motion: { value: reducedMotion ? 0.25 : 1 },
      lightDirection: { value: new THREE.Vector3(-0.3, 0.8, 0.5).normalize() },
    };
    const waterMaterial = new THREE.ShaderMaterial({
      uniforms: waterUniforms,
      vertexShader: /* glsl */ `
        uniform sampler2D heightmap;
        uniform float time;
        uniform float textureStep;
        uniform float motion;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec3 vWaterNormal;
        varying float vWave;
        float ambientWave(vec2 p) {
          return sin(p.x * 0.16 + time * 0.42) * 0.14 * motion
            + cos(p.y * 0.12 - time * 0.31) * 0.11 * motion
            + sin((p.x + p.y) * 0.09 + time * 0.2) * 0.08 * motion;
        }
        void main() {
          vUv = uv;
          float gpuHeight = texture2D(heightmap, uv).r;
          float wave = ambientWave(position.xy) + gpuHeight;
          float left = texture2D(heightmap, uv - vec2(textureStep, 0.0)).r;
          float right = texture2D(heightmap, uv + vec2(textureStep, 0.0)).r;
          float down = texture2D(heightmap, uv - vec2(0.0, textureStep)).r;
          float up = texture2D(heightmap, uv + vec2(0.0, textureStep)).r;
          float slopeX = (right - left) * 1.7 + cos(position.x * 0.16 + time * 0.42) * 0.022 * motion;
          float slopeY = (up - down) * 1.7 - sin(position.y * 0.12 - time * 0.31) * 0.013 * motion;
          vWaterNormal = normalize(mat3(modelMatrix) * vec3(-slopeX, -slopeY, 1.0));
          vWave = wave;
          vec3 displaced = position;
          displaced.z = wave;
          vec4 worldPosition = modelMatrix * vec4(displaced, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 lightDirection;
        uniform float time;
        uniform float motion;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec3 vWaterNormal;
        varying float vWave;
        void main() {
          vec3 normal = normalize(vWaterNormal);
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
          float facing = max(dot(normal, normalize(lightDirection)), 0.0);
          float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 3.0);
          float specular = pow(max(dot(reflect(-normalize(lightDirection), normal), viewDirection), 0.0), 72.0);
          float longGlint = pow(max(0.0, sin(vWorldPosition.x * 0.14 + vWorldPosition.z * 0.08 + time * 0.15)), 18.0);
          vec3 deep = vec3(0.012, 0.045, 0.105);
          vec3 mid = vec3(0.045, 0.19, 0.31);
          vec3 color = mix(deep, mid, clamp(facing * 0.46 + fresnel * 0.58 + vWave * 0.14, 0.0, 0.85));
          color += vec3(0.34, 0.48, 0.66) * (specular * 0.82 + longGlint * 0.09 * motion);
          color += vec3(0.36, 0.30, 0.20) * exp(-abs(vWorldPosition.z + 90.0) * 0.028) * 0.17;
          float distanceToCamera = length(cameraPosition - vWorldPosition);
          float cosmicHaze = 1.0 - exp(-distanceToCamera * 0.0014);
          color = mix(color, vec3(0.035, 0.055, 0.10), cosmicHaze);
          gl_FragColor = vec4(color, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      side: THREE.DoubleSide,
    });
    const waterGeometry = new THREE.PlaneGeometry(WATER_WIDTH, WATER_LENGTH, 180, 300);
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x = -Math.PI / 2;
    water.position.z = -95;
    scene.add(water);

    // A small procedural wooden skiff keeps the boat independent from the water.
    const boat = new THREE.Group();
    const hullShape = new THREE.Shape();
    hullShape.moveTo(0, 1.55);
    hullShape.quadraticCurveTo(0.18, 1.08, 0.58, 0.12);
    hullShape.quadraticCurveTo(0.76, -0.48, 0.56, -1.0);
    hullShape.quadraticCurveTo(0, -1.42, -0.56, -1.0);
    hullShape.quadraticCurveTo(-0.76, -0.48, -0.58, 0.12);
    hullShape.quadraticCurveTo(-0.18, 1.08, 0, 1.55);
    const hullGeometry = new THREE.ExtrudeGeometry(hullShape, { depth: 0.36, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.07, bevelThickness: 0.09 });
    hullGeometry.rotateX(-Math.PI / 2);
    hullGeometry.translate(0, -0.28, 0);
    const hullMaterial = new THREE.MeshStandardMaterial({ color: 0x4d3020, roughness: 0.48, metalness: 0.12 });
    const hull = new THREE.Mesh(hullGeometry, hullMaterial);
    boat.add(hull);
    const innerShape = new THREE.Shape();
    innerShape.moveTo(0, 1.18);
    innerShape.quadraticCurveTo(0.13, 0.8, 0.39, 0.12);
    innerShape.quadraticCurveTo(0.55, -0.42, 0.38, -0.78);
    innerShape.quadraticCurveTo(0, -1.05, -0.38, -0.78);
    innerShape.quadraticCurveTo(-0.55, -0.42, -0.39, 0.12);
    innerShape.quadraticCurveTo(-0.13, 0.8, 0, 1.18);
    const interior = new THREE.Mesh(new THREE.ShapeGeometry(innerShape), new THREE.MeshStandardMaterial({ color: 0x120f12, roughness: 0.9, side: THREE.DoubleSide }));
    interior.rotation.x = -Math.PI / 2;
    interior.position.y = 0.09;
    boat.add(interior);
    const benchMaterial = new THREE.MeshStandardMaterial({ color: 0x92704b, roughness: 0.7 });
    const benchGeometries: THREE.BoxGeometry[] = [];
    for (const z of [-0.62, 0.05, 0.68]) {
      const geometry = new THREE.BoxGeometry(0.86, 0.09, 0.14);
      benchGeometries.push(geometry);
      const bench = new THREE.Mesh(geometry, benchMaterial);
      bench.position.set(0, 0.12, z);
      boat.add(bench);
    }
    const prowTrim = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.025, 0.9, 8), new THREE.MeshStandardMaterial({ color: 0xc4a36a, metalness: 0.45, roughness: 0.3 }));
    prowTrim.rotation.x = Math.PI / 2;
    prowTrim.position.set(0, 0.08, -1.03);
    boat.add(prowTrim);
    scene.add(boat);

    // A distant natural shoreline gives the prototype destination a 3D anchor.
    const island = new THREE.Group();
    const islandMaterial = new THREE.MeshStandardMaterial({ color: 0x18243a, roughness: 1 });
    const ridgeShapes = [
      { x: -10, y: 0, z: -112, scale: [8, 3.8, 5] as const },
      { x: -16, y: -0.4, z: -114, scale: [6, 2.7, 4] as const },
      { x: -5, y: -0.6, z: -116, scale: [7, 2.2, 4] as const },
    ];
    for (const ridge of ridgeShapes) {
      const hill = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 1), islandMaterial);
      hill.position.set(ridge.x, ridge.y, ridge.z);
      hill.scale.set(ridge.scale[0], ridge.scale[1], ridge.scale[2]);
      island.add(hill);
    }
    scene.add(island);

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const waterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hitPoint = new THREE.Vector3();
    const localHit = new THREE.Vector3();
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 700 ? 1.25 : 1.6));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    const onCanvasPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.ray.intersectPlane(waterPlane, hitPoint)) {
        localHit.copy(hitPoint);
        water.worldToLocal(localHit);
        const uvX = localHit.x / WATER_WIDTH + 0.5;
        const uvY = localHit.y / WATER_LENGTH + 0.5;
        if (uvX >= 0 && uvX <= 1 && uvY >= 0 && uvY <= 1) {
          rippleRef.current = { x: uvX, y: uvY, strength: 1.4 };
        }
      }
    };
    canvas.addEventListener('pointerdown', onCanvasPointerDown);

    let frame = 0;
    let lastFrame = 0;
    let elapsed = 0;
    let uiElapsed = 0;
    let rippleStrength = 0;
    const followTarget = new THREE.Vector3();
    const render = (now: number) => {
      frame = requestAnimationFrame(render);
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
      const routeDistance = travelRef.current * 42;
      boat.position.x += (steer.x * 3.6 - boat.position.x) * (1 - Math.exp(-2.2 * dt));
      boat.position.z = 1.4 - routeDistance;
      boat.position.y = 0.12 + Math.sin(elapsed * (reducedMotion ? 0.35 : 0.9)) * (reducedMotion ? 0.035 : 0.09);
      boat.rotation.z = -steer.x * 0.11 + Math.sin(elapsed * 0.55) * 0.015;
      boat.rotation.x = Math.sin(elapsed * 0.72) * 0.018;
      followTarget.set(boat.position.x * 0.38, 0.25, boat.position.z + 4.5);
      camera.position.x += (boat.position.x * 0.48 - camera.position.x) * (1 - Math.exp(-2.0 * dt));
      camera.position.z += (boat.position.z + 10.5 - camera.position.z) * (1 - Math.exp(-2.4 * dt));
      camera.position.y += (3.2 + steer.y * 0.18 - camera.position.y) * (1 - Math.exp(-2.0 * dt));
      camera.lookAt(followTarget.x, followTarget.y, followTarget.z - 35);
      island.position.z = Math.min(12, travelRef.current * 32);
      const impact = rippleRef.current;
      if (impact.strength > rippleStrength) {
        heightVariable.material.uniforms.ripplePosition.value.set(impact.x, impact.y);
        rippleStrength = impact.strength;
        impact.strength = 0;
      }
      const simDt = Math.max(dt, 1 / 120);
      heightVariable.material.uniforms.deltaTime.value = simDt;
      heightVariable.material.uniforms.rippleStrength.value = rippleStrength;
      rippleStrength *= Math.exp(-4.2 * simDt);
      waterCompute.compute();
      waterUniforms.heightmap.value = waterCompute!.getCurrentRenderTarget(heightVariable).texture;
      waterUniforms.time.value = reducedMotion ? elapsed * 0.08 : elapsed;
      renderer.render(scene, camera);
      uiElapsed += dt;
      if (uiElapsed >= 0.12) {
        onTravel(travelRef.current);
        uiElapsed = 0;
      }
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', onCanvasPointerDown);
      waterCompute?.dispose();
      waterGeometry.dispose();
      waterMaterial.dispose();
      hullGeometry.dispose();
      hullMaterial.dispose();
      (interior.geometry as THREE.BufferGeometry).dispose();
      (interior.material as THREE.Material).dispose();
      benchGeometries.forEach((geometry) => geometry.dispose());
      benchMaterial.dispose();
      (prowTrim.geometry as THREE.BufferGeometry).dispose();
      (prowTrim.material as THREE.Material).dispose();
      island.traverse((object) => {
        if (object instanceof THREE.Mesh) object.geometry.dispose();
      });
      islandMaterial.dispose();
      glowTexture.dispose();
      (horizonGlow.material as THREE.Material).dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [onGpuFailure, onTravel, reducedMotion, rippleRef, steerRef, travelRef, travelTargetRef]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label="Interactive simulated cosmic ocean" />;
};
