class Synth {
  audioCtx: AudioContext;

  osc: OscillatorNode;

  constructor() {
    this.audioCtx = new AudioContext();

    // create an osc to get some sound working
    this.osc = this.audioCtx.createOscillator();
    this.osc.frequency.setValueAtTime(440, this.audioCtx.currentTime); // set osc frequency to 440 Hz
    this.osc.connect(this.audioCtx.destination);
    this.osc.start();
  }
}

export default Synth;