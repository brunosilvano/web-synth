class Envelope {
  private envelope: GainNode;

  private _attackTime = 0.1;
  private _decayTime = 0.1;

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

  // Accessors
  get attackTime() {
    return this._attackTime;
  }

  set attackTime(value: number) {
    if (value < 0) {
      console.error("Envelop attackTime can't be a negative value");
      this._attackTime = 0;
    } else {
      this._attackTime = value;
    }
  }

  get decayTime() {
    return this._decayTime;
  }

  set decayTime(value: number) {
    if (value < 0) {
      console.error("Envelop decayTime can't be a negative value");
      this._decayTime = 0;
    } else {
      this._decayTime = value;
    }
  }
}

export default Envelope;