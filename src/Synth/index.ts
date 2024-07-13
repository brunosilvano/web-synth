import Envelope from "./Envelope";
import Oscillator from "./Oscillator";

class Synth {
  private _audioContext: AudioContext;

  envelope: Envelope;
  oscillator: Oscillator;

  constructor() {
    this._audioContext = new AudioContext();

    // Initialize nodes
    this.envelope = new Envelope(this._audioContext);
    this.oscillator = new Oscillator(this._audioContext);

    // Routing
    this.oscillator.connect(this.envelope.destination());
    this.envelope.connect(this._audioContext.destination);
  }

  setNote(note: number) {
    const frequency = Math.pow(2, (note - 69) / 12) * 440;
    this.oscillator.setFrequency(frequency);
    this.oscillator.start();
  }

  start() {
    this._audioContext.resume();
  }

  stop() {
    this._audioContext.suspend();
  }
}

export default Synth;