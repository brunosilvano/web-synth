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

    // create an envelope
    this.envelope = new Envelope(this.audioCtx);
    this.envelope.connect(this.audioCtx.destination);

    // create an oscillator
    this.oscillator = new Oscillator(this.audioCtx);
    this.oscillator.connect(this.envelope.destination());
  }
}

export default Synth;