/**
 * Organic Atmospheric Sound Engine
 * Eliminates harsh constant electronic tones/beeps.
 * Produces warm, gentle temple bell chimes, soft wind/rain atmosphere, and smooth string pluck.
 */

const DEFAULT_MASTER_GAIN = 0.5;

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private ambientNoiseGain: GainNode | null = null;
  private ambientNoiseSource: AudioBufferSourceNode | null = null;
  private listeners: Set<(muted: boolean) => void> = new Set();
  private warpNoise: AudioBufferSourceNode | null = null;
  private warpFilter: BiquadFilterNode | null = null;
  private warpNoiseGain: GainNode | null = null;
  private warpOscillator: OscillatorNode | null = null;
  private warpOscGain: GainNode | null = null;
  private warpSub: OscillatorNode | null = null;
  private warpSubGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      // Honor mute state upon initialization
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : DEFAULT_MASTER_GAIN, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public subscribe(listener: (muted: boolean) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.isMuted));
  }

  public unmute() {
    this.isMuted = false;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(DEFAULT_MASTER_GAIN, this.ctx.currentTime, 0.05);
    }
    this.notify();
  }

  public mute() {
    this.isMuted = true;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05);
    }
    this.stopNarration();
    this.notify();
  }

  public toggleMute(): boolean {
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return !this.isMuted;
  }

  /**
   * Generates a soft, soothing pink-noise ambient breeze (no continuous harsh beep)
   */
  public startCosmicDrone() {
    if (this.ambientNoiseSource) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    // Create 3 seconds of gentle pink noise buffer for warm breeze/space wind
    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.035; // Very subtle, gentle volume
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    // Soft lowpass filter so it sounds like a warm, distant night breeze
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);

    this.ambientNoiseGain = this.ctx.createGain();
    this.ambientNoiseGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientNoiseGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 1.5);

    noise.connect(filter);
    filter.connect(this.ambientNoiseGain);
    this.ambientNoiseGain.connect(this.masterGain);

    noise.start();
    this.ambientNoiseSource = noise;
  }

  /**
   * Stop pink noise drone cleanly with optional fade
   */
  public stopCosmicDrone(fadeSeconds = 1.0) {
    if (!this.ambientNoiseGain || !this.ambientNoiseSource || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.ambientNoiseGain.gain.linearRampToValueAtTime(0.0001, now + fadeSeconds);
    const source = this.ambientNoiseSource;
    setTimeout(() => {
      try {
        source.stop();
        source.disconnect();
      } catch {
        // already stopped
      }
    }, fadeSeconds * 1000);
    this.ambientNoiseSource = null;
    this.ambientNoiseGain = null;
  }

  /**
   * When pulling the chord, modulate the soft breeze filter and trigger gentle acoustic chimes
   */
  public updateBowTension(tension: number) {
    if (!this.ctx || !this.ambientNoiseGain) return;
    const now = this.ctx.currentTime;
    // Modulate soft breath volume smoothly without any beeps
    const targetGain = 0.15 + tension * 0.25;
    this.ambientNoiseGain.gain.setTargetAtTime(targetGain, now, 0.08);
  }

  /** Procedural warp bed, routed through the shared master gain and AudioContext. */
  public startWarpSound() {
    if (this.warpNoise || typeof window === 'undefined') return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const length = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, length, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;

    this.warpNoise = this.ctx.createBufferSource();
    this.warpNoise.buffer = buffer;
    this.warpNoise.loop = true;
    this.warpFilter = this.ctx.createBiquadFilter();
    this.warpFilter.type = 'lowpass';
    this.warpFilter.frequency.setValueAtTime(320, now);
    this.warpNoiseGain = this.ctx.createGain();
    this.warpNoiseGain.gain.setValueAtTime(0.0001, now);
    this.warpNoiseGain.gain.setTargetAtTime(0.022, now, 0.25);
    this.warpNoise.connect(this.warpFilter);
    this.warpFilter.connect(this.warpNoiseGain);
    this.warpNoiseGain.connect(this.masterGain);
    this.warpNoise.start(now);

    this.warpOscillator = this.ctx.createOscillator();
    this.warpOscillator.type = 'sine';
    this.warpOscillator.frequency.setValueAtTime(48, now);
    this.warpOscGain = this.ctx.createGain();
    this.warpOscGain.gain.setValueAtTime(0.0001, now);
    this.warpOscGain.gain.setTargetAtTime(0.008, now, 0.35);
    this.warpOscillator.connect(this.warpOscGain);
    this.warpOscGain.connect(this.masterGain);
    this.warpOscillator.start(now);

    this.warpSub = this.ctx.createOscillator();
    this.warpSub.type = 'sine';
    this.warpSub.frequency.setValueAtTime(38, now);
    this.warpSubGain = this.ctx.createGain();
    this.warpSubGain.gain.setValueAtTime(0.0001, now);
    this.warpSubGain.gain.setTargetAtTime(0.012, now, 0.5);
    this.warpSub.connect(this.warpSubGain);
    this.warpSubGain.connect(this.masterGain);
    this.warpSub.start(now);
  }

  public setWarpSpeed(value: number) {
    if (!this.ctx || !this.warpFilter || !this.warpOscillator || !this.warpNoiseGain) return;
    const v = Math.max(0, Math.min(1, value));
    const now = this.ctx.currentTime;
    this.warpFilter.frequency.setTargetAtTime(320 + v * 7_000, now, 0.12);
    this.warpOscillator.frequency.setTargetAtTime(48 + v * 260, now, 0.16);
    this.warpNoiseGain.gain.setTargetAtTime(0.012 + v * 0.018, now, 0.18);
    this.warpOscGain?.gain.setTargetAtTime(0.004 + v * 0.012, now, 0.2);
    this.warpSubGain?.gain.setTargetAtTime(0.006 + v * 0.012, now, 0.24);
  }

  public stopWarpSound() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.warpNoiseGain?.gain.setTargetAtTime(0.0001, now, 0.2);
    this.warpOscGain?.gain.setTargetAtTime(0.0001, now, 0.2);
    this.warpSubGain?.gain.setTargetAtTime(0.0001, now, 0.2);
    const noise = this.warpNoise;
    const osc = this.warpOscillator;
    const sub = this.warpSub;
    const filter = this.warpFilter;
    const noiseGain = this.warpNoiseGain;
    const oscGain = this.warpOscGain;
    const subGain = this.warpSubGain;
    this.warpNoise = null; this.warpFilter = null; this.warpNoiseGain = null;
    this.warpOscillator = null; this.warpOscGain = null; this.warpSub = null; this.warpSubGain = null;
    window.setTimeout(() => {
      try { noise?.stop(); osc?.stop(); sub?.stop(); } catch { /* already stopped */ }
      noise?.disconnect(); filter?.disconnect(); noiseGain?.disconnect();
      osc?.disconnect(); oscGain?.disconnect(); sub?.disconnect(); subGain?.disconnect();
    }, 900);
  }

  /**
   * Play an authentic, resonant Temple Bell chime upon release (warm, soothing, peaceful)
   */
  public playBowRelease() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Natural Tibetan/Temple bell harmonic cluster (G3, D4, G4, B4)
    const bellFrequencies = [196, 293.66, 392, 493.88];
    const decays = [3.5, 2.8, 2.2, 1.6];

    bellFrequencies.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Fast subtle strike, long serene acoustic decay
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.25 / (i + 1), now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[i]);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + decays[i] + 0.1);
    });
  }

  /**
   * Spoken Divine Voice Narration in English
   */
  public speakNarration(text: string, onEnd?: () => void) {
    if (this.isMuted || !('speechSynthesis' in window)) {
      if (onEnd) setTimeout(onEnd, 3500);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85; // Calm, thoughtful pace
    utterance.pitch = 0.95; // Natural tone

    const chooseVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const naturalVoice = voices.find(
        (v) =>
          (v.name.includes('Natural') ||
            v.name.includes('Daniel') ||
            v.name.includes('Google UK English Male') ||
            v.name.includes('Samantha') ||
            v.name.includes('Arthur')) &&
          v.lang.startsWith('en')
      );
      if (naturalVoice) utterance.voice = naturalVoice;

      if (onEnd) {
        utterance.onend = onEnd;
      }
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        chooseVoiceAndSpeak();
      };
    } else {
      chooseVoiceAndSpeak();
    }
  }

  public stopNarration() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundEngine = new SoundEngine();
