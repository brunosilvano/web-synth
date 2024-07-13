class Oscillator {
  private oscillator: OscillatorNode;
  private playing = false;

  constructor(private audioContext: AudioContext) {
    this.oscillator = this.audioContext.createOscillator();
  }

  connect(destinationNode: AudioNode) {
    return this.oscillator.connect(destinationNode);
  }

  destination() {
    return this.oscillator;
  }

  setFrequency(frequency: number) {
    this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    this.start();
  }

  start() {
    if (!this.playing) {
      this.oscillator.start();
      this.playing = true;
    }
  }

  stop() {
    if (this.playing) {
      this.oscillator.stop();
      this.playing = false;
    }
  }
}

export default Oscillator;