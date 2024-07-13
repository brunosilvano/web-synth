import Envelope from "./Envelope";

class Synth {
  audioCtx: AudioContext;

  envelope: Envelope;
  oscillator: OscillatorNode;

  setNote (note: number) {
    this.oscillator.frequency.setValueAtTime(Math.pow(2, (note - 69) / 12) * 440, this.audioCtx.currentTime);
  }

  constructor() {
    this.audioCtx = new AudioContext();

    // create an envelope
    this.envelope = new Envelope(this.audioCtx);
    this.envelope.connect(this.audioCtx.destination);

    // create an osc to get some sound working
    this.oscillator = this.audioCtx.createOscillator();
    this.oscillator.frequency.setValueAtTime(440, this.audioCtx.currentTime); // set osc frequency to 440 Hz
    this.oscillator.connect(this.envelope.destination());
    this.oscillator.start();
  }
}

export default Synth;