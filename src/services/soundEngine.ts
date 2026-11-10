/**
 * Organic Atmospheric Sound Engine
 * Eliminates harsh constant electronic tones/beeps.
 * Produces warm, gentle temple bell chimes, soft wind/rain atmosphere, and smooth string pluck.
 */
class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private ambientNoiseGain: GainNode | null = null;
  private ambientNoiseSource: AudioBufferSourceNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public unmute() {
    this.isMuted = false;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0.6, this.ctx.currentTime, 0.1);
    }
  }

  public mute() {
    this.isMuted = true;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
    }
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

    // Create 4 seconds of gentle pink noise buffer for warm breeze/space wind
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
   * When pulling the chord, modulate the soft breeze filter and trigger gentle acoustic chimes
   */
  public updateBowTension(tension: number) {
    if (!this.ctx || !this.ambientNoiseGain) return;
    const now = this.ctx.currentTime;
    // Modulate soft breath volume smoothly without any beeps
    const targetGain = 0.15 + tension * 0.25;
    this.ambientNoiseGain.gain.setTargetAtTime(targetGain, now, 0.08);
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
  }

  public stopNarration() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundEngine = new SoundEngine();
