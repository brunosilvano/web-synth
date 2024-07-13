class Oscillator {
  private oscillator: OscillatorNode;
  private isStarted = false;

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
  }

  start() {
    if (!this.isStarted) {
      this.oscillator.start();
      this.isStarted = true;
    }
  }
}

export default Oscillator;