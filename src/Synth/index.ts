import Envelope from "./Envelope";
import Oscillator from "./Oscillator";

class Synth {
  audioContext: AudioContext;

  envelope: Envelope;
  oscillator: Oscillator;

  constructor() {
    this.audioContext = new AudioContext();

    // Initialize nodes
    this.envelope = new Envelope(this.audioContext);
    this.oscillator = new Oscillator(this.audioContext);

    // Routing
    this.oscillator.connect(this.envelope.destination());
    this.envelope.connect(this.audioContext.destination);
  }

  setNote(note: number) {
    const frequency = Math.pow(2, (note - 69) / 12) * 440;
    this.oscillator.setFrequency(frequency);
    this.oscillator.start();
  }
}

export default Synth;