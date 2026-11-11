import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface CosmicCreationExperienceProps {
  reducedMotion?: boolean;
  onContinue: () => void;
}

const REVEAL_SECONDS = 8;

export const CosmicCreationExperience: React.FC<CosmicCreationExperienceProps> = ({ reducedMotion = false, onContinue }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [elapsed, setElapsed] = useState(0);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0, rotationX: 0, rotationY: 0, targetX: 0, targetY: 0, zoom: 0 });
  const revealRef = useRef(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    } catch {
      setWebglAvailable(false);
      return;
    }
    setWebglAvailable(true);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1 : 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, host.clientWidth / Math.max(1, host.clientHeight), 0.1, 3000);
    camera.position.set(0, 0, 1080);
    const nebulaMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uReveal: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `
        varying vec2 vUv; uniform float uTime; uniform float uReveal;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
        float fbm(vec2 p){float n=0.,a=.5;for(int i=0;i<5;i++){n+=a*noise(p);p*=2.02;a*=.5;}return n;}
        void main(){vec2 p=(vUv-.5)*vec2(1.35,1.0);float n=fbm(p*3.4+vec2(uTime*.008,-uTime*.006));float cloud=smoothstep(.38,.82,n);float core=exp(-dot(p,p)*8.0)*uReveal;vec3 deep=vec3(.004,.012,.029);vec3 teal=vec3(.035,.19,.24);vec3 blue=vec3(.045,.09,.19);vec3 col=deep+mix(blue,teal,cloud)*cloud*(.14+.28*uReveal);col+=vec3(.52,.34,.13)*core*.34;float vignette=1.0-smoothstep(.36,1.2,length(p));col*=.42+.58*vignette;gl_FragColor=vec4(col,1.);}`,
      depthWrite: false,
    });
    const nebula = new THREE.Mesh(new THREE.PlaneGeometry(2100, 1250), nebulaMaterial);
    nebula.position.z = -900;
    scene.add(nebula);

    const cosmos = new THREE.Group();
    scene.add(cosmos);
    const coreMaterial = new THREE.MeshStandardMaterial({ color: 0xffe9b0, emissive: 0xffb740, emissiveIntensity: 3.2, roughness: 0.2, metalness: 0.05 });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(34, 3), coreMaterial);
    cosmos.add(core);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0xffd78d, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(74, 32, 32), glowMaterial);
    cosmos.add(glow);

    const ringMaterials: THREE.MeshBasicMaterial[] = [];
    const ringGeometries: THREE.BufferGeometry[] = [];
    const rings: THREE.Mesh[] = [];
    [165, 258, 352, 456].forEach((radius, index) => {
      const geometry = new THREE.TorusGeometry(radius, index === 0 ? 1.7 : 1.15, 8, 144);
      const material = new THREE.MeshBasicMaterial({ color: index % 2 ? 0x8ebebd : 0xd8b56b, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(0.4 + index * 0.29, 0.22 * index, 0.38 * index);
      ring.scale.setScalar(0.001);
      cosmos.add(ring);
      rings.push(ring);
      ringGeometries.push(geometry);
      ringMaterials.push(material);
    });

    const count = reducedMotion ? 0 : window.innerWidth < 700 ? 2600 : 4600;
    const starPositions = new Float32Array(count * 3);
    const starSizes = new Float32Array(count);
    const armCount = 5;
    for (let i = 0; i < count; i++) {
      const arm = i % armCount;
      const radius = 60 + Math.pow(Math.random(), 0.72) * 520;
      const angle = (arm / armCount) * Math.PI * 2 + radius * 0.006 + (Math.random() - 0.5) * 0.55;
      starPositions[i * 3] = Math.cos(angle) * radius;
      starPositions[i * 3 + 1] = Math.sin(angle) * radius * 0.64 + (Math.random() - 0.5) * 55;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * (70 + radius * 0.38);
      starSizes[i] = 1 + Math.random() * 2.6;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
    const starMaterial = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uReveal: { value: 0 }, uTime: { value: 0 } },
      vertexShader: `attribute float aSize;uniform float uReveal;uniform float uTime;varying float vAlpha;void main(){vec3 p=position*mix(.015,1.0,smoothstep(0.03,0.94,uReveal));float twinkle=.72+.28*sin(uTime*1.4+aSize*27.0);vec4 mv=modelViewMatrix*vec4(p,1.0);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*(500.0/-mv.z),1.0,7.0);vAlpha=smoothstep(.08,.58,uReveal)*twinkle;}`,
      fragmentShader: `varying float vAlpha;void main(){vec2 p=gl_PointCoord-.5;float d=length(p);float a=(1.0-smoothstep(.08,.5,d))*vAlpha;if(a<.025)discard;gl_FragColor=vec4(.78,.86,.9,a);}`,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    cosmos.add(stars);

    const ambient = new THREE.AmbientLight(0x9db4c3, 0.65);
    scene.add(ambient);
    const keyLight = new THREE.PointLight(0xffd07a, 520, 1800, 1.6);
    keyLight.position.set(0, 0, 170);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x317b91, 230, 1600, 1.8);
    fillLight.position.set(-340, 110, -80);
    scene.add(fillLight);

    let isVisible = document.visibilityState === 'visible';
    let raf = 0;
    let previous = performance.now();
    let elapsedTime = 0;
    let lastUiUpdate = 0;
    const pointer = dragRef.current;
    const handleResize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / Math.max(1, height);
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1 : 1.5));
      renderer.setSize(width, height);
    };
    const handlePointerDown = (event: PointerEvent) => {
      pointer.active = true;
      pointer.lastX = event.clientX;
      pointer.lastY = event.clientY;
      host.setPointerCapture(event.pointerId);
      setDragging(true);
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (pointer.active) {
        const dx = event.clientX - pointer.lastX;
        const dy = event.clientY - pointer.lastY;
        pointer.lastX = event.clientX;
        pointer.lastY = event.clientY;
        pointer.targetY += dx * 0.004;
        pointer.targetX += dy * 0.003;
      } else if (event.pointerType === 'mouse') {
        pointer.targetY = (event.clientX / window.innerWidth - 0.5) * 0.12;
        pointer.targetX = (event.clientY / window.innerHeight - 0.5) * 0.08;
      }
    };
    const handlePointerUp = () => { pointer.active = false; setDragging(false); };
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      pointer.zoom = THREE.MathUtils.clamp(pointer.zoom + event.deltaY * 0.18, -210, 340);
    };
    const handleVisibility = () => { isVisible = document.visibilityState === 'visible'; previous = performance.now(); };
    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!isVisible) { previous = now; return; }
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      elapsedTime += dt;
      const revealDuration = reducedMotion ? 2.5 : REVEAL_SECONDS;
      revealRef.current = Math.min(1, revealRef.current + dt / revealDuration);
      const reveal = revealRef.current;
      const eased = reveal * reveal * (3 - 2 * reveal);
      nebulaMaterial.uniforms.uReveal.value = eased;
      nebulaMaterial.uniforms.uTime.value = reducedMotion ? 0 : elapsedTime;
      starMaterial.uniforms.uReveal.value = eased;
      starMaterial.uniforms.uTime.value = reducedMotion ? 0 : elapsedTime;
      core.scale.setScalar(Math.max(0.001, Math.min(1, reveal * 2.8)));
      core.rotation.y += (reducedMotion ? 0 : 0.15) * dt;
      glow.scale.setScalar(0.001 + eased * 1.4);
      glowMaterial.opacity = 0.04 + eased * 0.12;
      rings.forEach((ring, index) => {
        const localReveal = THREE.MathUtils.clamp((reveal - 0.13 - index * 0.085) / 0.57, 0, 1);
        const ringEase = localReveal * localReveal * (3 - 2 * localReveal);
        ring.scale.setScalar(Math.max(0.001, ringEase));
        ringMaterials[index].opacity = ringEase * (index === 0 ? 0.35 : 0.19);
        if (!reducedMotion) ring.rotation.z += dt * (index % 2 === 0 ? 0.035 : -0.026);
      });
      const movementFactor = reducedMotion ? 1 : 4.2;
      pointer.rotationX += (pointer.targetX - pointer.rotationX) * (1 - Math.exp(-movementFactor * dt));
      pointer.rotationY += (pointer.targetY - pointer.rotationY) * (1 - Math.exp(-movementFactor * dt));
      cosmos.rotation.x = pointer.rotationX;
      cosmos.rotation.y = pointer.rotationY + (reducedMotion ? 0 : elapsedTime * 0.018);
      camera.position.z += (1080 + pointer.zoom - camera.position.z) * (1 - Math.exp(-3.2 * dt));
      if (now - lastUiUpdate > 120) { setElapsed(reveal * revealDuration); lastUiUpdate = now; }
      renderer.render(scene, camera);
    };

    host.addEventListener('pointerdown', handlePointerDown);
    host.addEventListener('pointermove', handlePointerMove);
    host.addEventListener('pointerup', handlePointerUp);
    host.addEventListener('pointercancel', handlePointerUp);
    host.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener('pointerdown', handlePointerDown);
      host.removeEventListener('pointermove', handlePointerMove);
      host.removeEventListener('pointerup', handlePointerUp);
      host.removeEventListener('pointercancel', handlePointerUp);
      host.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      starGeometry.dispose(); starMaterial.dispose();
      nebula.geometry.dispose(); nebulaMaterial.dispose();
      core.geometry.dispose(); coreMaterial.dispose(); glow.geometry.dispose(); glowMaterial.dispose();
      ringGeometries.forEach((geometry) => geometry.dispose());
      ringMaterials.forEach((material) => material.dispose());
      renderer.dispose(); renderer.forceContextLoss();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, [reducedMotion]);

  const ready = elapsed >= (reducedMotion ? 2.25 : 6.4) || !webglAvailable;
  const line = elapsed < 2.2 ? 'Before the first dawn, all possibility rested in stillness.' : elapsed < 5.2 ? 'A first light unfolds into boundless space.' : 'Worlds take shape. Many paths begin.';

  return <section className={`fixed inset-0 z-50 overflow-hidden bg-[#030812] text-parchment transition-opacity duration-1000 ${leaving ? 'opacity-0' : 'opacity-100'}`} aria-label="The unfolding cosmos">
    <div ref={hostRef} className="absolute inset-0 touch-none cursor-grab active:cursor-grabbing" aria-label="Interactive 3D creation scene. Drag to rotate and scroll to move closer." />
    {!webglAvailable && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#b68b49_0%,#24535d_12%,#102337_34%,#030812_75%)]" aria-hidden="true" />}
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(1,5,14,.56)_100%)]" />
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-between px-6 py-6 sm:px-10">
      <span className="font-cinzel text-[10px] tracking-[.3em] text-gold-light/75">ANANTA</span>
      <span className="text-[9px] uppercase tracking-[.25em] text-parchment-muted/60">The first light</span>
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-12 text-center sm:pb-16">
      <p className="mb-3 max-w-lg px-6 font-cormorant text-lg italic text-parchment/80 transition-opacity duration-700 sm:text-xl" aria-live="polite">{line}</p>
      <p className="mb-5 text-[9px] uppercase tracking-[.24em] text-cyan-50/40">{dragging ? 'Turn the cosmos' : 'Drag to look around · Scroll to move closer'}</p>
      <button onClick={() => { setLeaving(true); window.setTimeout(onContinue, reducedMotion ? 0 : 700); }} disabled={!ready} className={`pointer-events-auto border border-gold-antique/50 px-7 py-3 font-cinzel text-[10px] uppercase tracking-[.24em] text-gold-light transition-all duration-700 hover:border-gold-radiant hover:bg-gold-antique/10 disabled:translate-y-2 disabled:opacity-0 ${ready ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
        Explore the realms <span aria-hidden="true" className="ml-2">→</span>
      </button>
    </div>
  </section>;
};
