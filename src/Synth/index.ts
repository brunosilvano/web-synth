import Envelope from "./Envelope";
import Oscillator from "./Oscillator";

class Synth {
  audioCtx: AudioContext;

  envelope: Envelope;
  oscillator: Oscillator;

  setNote (note: number) {
    const frequency = Math.pow(2, (note - 69) / 12) * 440;
    this.oscillator.setFrequency(frequency);
  }

  constructor() {
    this.audioCtx = new AudioContext();

    // Initialize nodes
    this.envelope = new Envelope(this.audioCtx);
    this.oscillator = new Oscillator(this.audioCtx);

    // Routing
    this.oscillator.connect(this.envelope.destination());
    this.envelope.connect(this.audioCtx.destination);
  }
}

export default Synth;