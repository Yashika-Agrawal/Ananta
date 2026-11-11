import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { YUGAS, TOTAL_YUGA_YEARS } from '../../data/yugas';
import { soundEngine } from '../../services/soundEngine';

interface JourneyBackInTimeProps {
  reducedMotion?: boolean;
  onSelectStory?: (eraId: string) => void;
  onArrive?: () => void;
}

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const eraIndexAt = (depth: number) => Math.min(YUGAS.length - 1, Math.floor(depth * YUGAS.length));

export const JourneyBackInTime: React.FC<JourneyBackInTimeProps> = ({ reducedMotion = false, onSelectStory, onArrive }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [depth, setDepth] = useState(0);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(() => soundEngine.getMuted());
  const stateRef = useRef({ holding: false, depth: 0, speed: 0, lastEra: 0, arrived: false });
  const reducedRef = useRef(reducedMotion);

  useEffect(() => { reducedRef.current = reducedMotion; }, [reducedMotion]);
  useEffect(() => soundEngine.subscribe(setIsMuted), []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'high-performance' });
    } catch {
      setWebglAvailable(false);
      return;
    }
    setWebglAvailable(true);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1 : 1.5));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const backgroundMaterial = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uSpeed: { value: 0 }, uTint: { value: new THREE.Color(YUGAS[0].tint) } },
      vertexShader: `varying vec2 vUv; void main(){vUv=uv; gl_Position=vec4(position,1.0);}`,
      fragmentShader: `
        varying vec2 vUv; uniform float uTime; uniform float uSpeed; uniform vec3 uTint;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
        float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.03;a*=.5;}return v;}
        void main(){vec2 uv=vUv;vec2 p=(uv-.5)*vec2(1.0,1.7);float r=length(p);float n=fbm(p*3.2+vec2(uTime*.012,-uTime*.008));float neb=smoothstep(.26,.9,n)*(.55+uSpeed*.34);vec3 base=vec3(.008,.018,.043);vec3 color=base+uTint*(neb*.34);float blur=exp(-r*3.2)*uSpeed*.15;color+=vec3(.08,.34,.49)*blur;float vig=smoothstep(1.15,.18,r);color*=vig;gl_FragColor=vec4(color,1.);}`,
      depthWrite: false,
    });
    const bg = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), backgroundMaterial);
    scene.add(bg);

    const count = reducedMotion ? 0 : (window.innerWidth < 700 ? 3000 : 5200);
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random() * 2 - 1;
      positions[i * 3 + 1] = Math.random() * 2 - 1;
      positions[i * 3 + 2] = 0;
      seeds[i] = Math.random();
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
    const starMaterial = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { uTravel: { value: 0 }, uSpeed: { value: 0 }, uTime: { value: 0 }, uColor: { value: new THREE.Color('#9fdcf0') } },
      vertexShader: `attribute float aSeed; uniform float uTravel;uniform float uSpeed;uniform float uTime;varying float vAlpha;varying float vAngle;void main(){float phase=fract(aSeed+uTravel*(.09+aSeed*.13));vec2 radial=normalize(position.xy+vec2(.0001));vAngle=atan(radial.y,radial.x);float radius=.12+phase*1.45;vec2 p=radial*radius;vec4 mv=modelViewMatrix*vec4(p,0.,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((1.0-phase)*2.2+uSpeed*6.0,1.0,8.0);vAlpha=(.2+.8*phase)*(.2+uSpeed*.8);}`,
      fragmentShader: `uniform vec3 uColor;uniform float uSpeed;varying float vAlpha;varying float vAngle;void main(){vec2 raw=gl_PointCoord-.5;vec2 q=vec2(cos(vAngle)*raw.x+sin(vAngle)*raw.y,-sin(vAngle)*raw.x+cos(vAngle)*raw.y);float along=abs(q.x);float across=abs(q.y);float tail=mix(.16,.49,clamp(uSpeed,0.,1.));float core=1.0-smoothstep(.02,.22,length(q));float streak=(1.0-smoothstep(tail,tail+.11,along))*(1.0-smoothstep(.08,.25,across));float a=max(core,streak*uSpeed)*vAlpha;if(a<.015)discard;gl_FragColor=vec4(uColor,a);}`,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let visible = document.visibilityState === 'visible';
    let raf = 0;
    let previous = performance.now();
    let elapsed = 0;
    let lastUi = 0;
    const resize = () => { renderer.setSize(host.clientWidth, host.clientHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1 : 1.5)); };
    const visibility = () => { visible = document.visibilityState === 'visible'; previous = performance.now(); };
    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!visible) { previous = now; return; }
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      elapsed += dt;
      const s = stateRef.current;
      const maxDepthSpeed = reducedRef.current ? 0.4 : 0.14;
      const targetSpeed = s.holding && !s.arrived ? maxDepthSpeed : 0;
      s.speed += (targetSpeed - s.speed) * (1 - Math.exp(-dt * (s.holding ? 2.8 : 3.8)));
      s.depth = clamp01(s.depth + s.speed * dt);
      const currentEra = eraIndexAt(s.depth);
      if (currentEra !== s.lastEra) {
        s.lastEra = currentEra;
        setSelectedMarker(currentEra);
        soundEngine.setWarpSpeed(0.12 + (currentEra / (YUGAS.length - 1)) * 0.72);
      }
      if (s.holding && now - lastUi > 80) soundEngine.setWarpSpeed(Math.min(1, s.speed / maxDepthSpeed));
      if (s.depth >= 1 && !s.arrived) { s.arrived = true; soundEngine.stopWarpSound(); onArrive?.(); }
      const boundaryDistance = Math.abs(s.depth * YUGAS.length - Math.round(s.depth * YUGAS.length));
      const zoneSpeed = Math.min(1, s.speed / maxDepthSpeed) * (1 - .45 * Math.exp(-boundaryDistance * 35));
      backgroundMaterial.uniforms.uTime.value = elapsed;
      backgroundMaterial.uniforms.uSpeed.value = zoneSpeed;
      backgroundMaterial.uniforms.uTint.value.set(YUGAS[currentEra].tint);
      starMaterial.uniforms.uTravel.value = elapsed * .8 + s.depth * 2;
      starMaterial.uniforms.uSpeed.value = reducedRef.current ? 0 : zoneSpeed;
      starMaterial.uniforms.uTime.value = elapsed;
      starMaterial.uniforms.uColor.value.set(currentEra < 2 ? '#a8d9ee' : '#d6e8dc');
      if (now - lastUi > 90) { setDepth(s.depth); lastUi = now; }
      renderer.render(scene, camera);
    };
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', visibility);
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', visibility);
      soundEngine.stopWarpSound();
      starGeometry.dispose(); starMaterial.dispose(); bg.geometry.dispose(); backgroundMaterial.dispose();
      renderer.dispose(); renderer.forceContextLoss();
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, [onArrive, reducedMotion]);

  const beginHold = useCallback(() => {
    const s = stateRef.current;
    if (s.arrived) return;
    s.holding = true;
    soundEngine.startWarpSound();
  }, []);
  const endHold = useCallback(() => {
    const s = stateRef.current;
    s.holding = false;
    const era = eraIndexAt(s.depth);
    soundEngine.setWarpSpeed(0.12 + (era / (YUGAS.length - 1)) * 0.72);
  }, []);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === ' ') { event.preventDefault(); if (event.repeat) return; beginHold(); }
    };
    const up = (event: KeyboardEvent) => { if (event.key === ' ') endHold(); };
    window.addEventListener('keydown', key); window.addEventListener('keyup', up);
    return () => { window.removeEventListener('keydown', key); window.removeEventListener('keyup', up); };
  }, [beginHold, endHold]);

  const current = YUGAS[eraIndexAt(depth)];
  const yearsRemaining = Math.max(0, Math.round(TOTAL_YUGA_YEARS * (1 - depth)));
  const activeMarker = selectedMarker ?? (depth > 0 ? eraIndexAt(depth) : null);

  return <section className="fixed inset-0 z-40 overflow-hidden bg-[#06111d] text-parchment" aria-label="Journey Back in Time">
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true" />
    {!webglAvailable && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#17405a_0%,#0b2032_42%,#050b16_100%)]" aria-hidden="true" />}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(2,7,18,.55)_100%)] pointer-events-none" />
    <header className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 py-5 sm:px-10">
      <div className="font-cinzel text-xs tracking-[.3em] text-gold-radiant">ANANTA <span className="text-parchment-muted tracking-[.12em]">/ JOURNEY BACK IN TIME</span></div>
      <button onClick={() => { const muted = soundEngine.toggleMute(); setIsMuted(!muted); }} className="border border-gold-antique/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-gold-light" aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}>{isMuted ? 'Sound off' : 'Sound on'}</button>
    </header>
    <main className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
      <p className="mb-8 text-[10px] uppercase tracking-[.38em] text-cyan-100/55">Hold to return to the beginning</p>
      <button className="group relative flex h-44 w-44 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-radiant" onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); beginHold(); }} onPointerUp={endHold} onPointerCancel={endHold} aria-label="Press and hold to travel backward through time" aria-valuenow={Math.round(depth * 100)} aria-valuemin={0} aria-valuemax={100}>
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 176 176" aria-hidden="true"><circle cx="88" cy="88" r="80" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="1"/><circle cx="88" cy="88" r="80" fill="none" stroke="#e6c65a" strokeWidth="2" strokeDasharray={`${depth * 503} 503`} className="transition-[stroke-dasharray] duration-100"/></svg>
        <span className="h-28 w-28 rounded-full border border-gold-antique/75 shadow-[0_0_32px_rgba(212,175,55,.18)] transition-shadow group-active:shadow-[0_0_52px_rgba(212,175,55,.38)]" />
        <span className="absolute font-cormorant italic text-sm text-gold-light">{depth >= 1 ? 'At the beginning' : stateRef.current.holding ? 'Journeying…' : depth > 0 ? 'Hold to continue' : 'Hold to travel'}</span>
      </button>
      <div className="mt-7 h-12" aria-live="polite">
        <h1 className="font-cinzel text-xl tracking-[.2em] text-gold-radiant">{current.name}</h1>
        <p className="mt-2 font-cormorant text-lg text-cyan-50/75">{yearsRemaining.toLocaleString()} years toward the beginning</p>
      </div>
      <p className="absolute bottom-9 text-[9px] uppercase tracking-[.24em] text-cyan-50/45">Hold the ring · release to slow and pause · press Space to continue</p>
    </main>
    {activeMarker !== null && activeMarker > 0 && <aside className="absolute right-5 top-1/2 z-20 w-64 -translate-y-1/2 border-l border-gold-antique/40 bg-[#071523]/60 p-5 backdrop-blur-sm sm:right-10">
      <p className="mb-2 text-[9px] uppercase tracking-[.28em] text-gold-antique">Era marker · {YUGAS[activeMarker].name}</p>
      <h2 className="font-cinzel text-base text-gold-radiant">{YUGAS[activeMarker].storyTitle}</h2>
      <p className="mt-2 font-cormorant text-base text-parchment-muted">{YUGAS[activeMarker].storyLine}</p>
      <button className="mt-4 text-[9px] uppercase tracking-[.2em] text-cyan-100/70 hover:text-gold-light" onClick={() => onSelectStory?.(YUGAS[activeMarker].id)}>Select story marker ↗</button>
    </aside>}
  </section>;
};
