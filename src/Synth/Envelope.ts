class Envelope {
  private envelope: GainNode;

  attackTime = 0.1;
  decayTime = 0.1;

  constructor(private audioContext: AudioContext) {
    this.envelope = this.audioContext.createGain();
    this.envelope.gain.setValueAtTime(0, this.audioContext.currentTime);
  }

  connect(modulationTarget: AudioNode) {
    return this.envelope.connect(modulationTarget);
  }

  trigger() {
    const triggerStartTime = this.audioContext.currentTime;
    this.envelope.gain.cancelScheduledValues(triggerStartTime);
    this.envelope.gain.setValueAtTime(this.envelope.gain.value, triggerStartTime);
    this.envelope.gain.linearRampToValueAtTime(1.0, triggerStartTime + this.attackTime);
    this.envelope.gain.linearRampToValueAtTime(0, triggerStartTime + this.attackTime + this.decayTime);
  }

  destination() {
    return this.envelope;
  }
}

export default Envelope;