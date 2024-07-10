class Synth {
  audioCtx: AudioContext;

  osc: OscillatorNode;

  setNote (note: number) {
    this.osc.frequency.setValueAtTime(Math.pow(2, (note - 69) / 12) * 440, this.audioCtx.currentTime);
  }

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