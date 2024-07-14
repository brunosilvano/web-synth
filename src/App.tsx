import React, { useEffect, useState } from 'react';
import './App.css';
import Synth from './Synth';
import Keyboard from './Keyboard';

export type OnKeyDown =  (note: number) => void;

interface AppProps {
  synth: Synth;
}

const App = ({ synth }: AppProps) => {
  const [attack, setAttack] = useState(synth.envelope.attackTime);
  const [decay, setDecay] = useState(synth.envelope.decayTime);

  useEffect(() => {
    synth.envelope.attackTime = attack;
    synth.envelope.decayTime = decay;
  }, [attack, decay, synth.envelope])

  const handleOnClick = (value: 'start' | 'stop') => {
    switch (value) {
      case 'start':
        synth.start();
        break;
      case 'stop':
        synth.stop();
        break;
    }
  }

  const handleOnKeyDown: OnKeyDown = (note) => {
    synth.setNote(note);
    synth.envelope.trigger();
  }

  const handleParamChange = (stringValue: string, paramName: string) => {
    const value = parseFloat(stringValue);

    switch (paramName) {
      case 'attack':
        setAttack(value);
        break;
      case 'decay':
        setDecay(value);
        break;
    }
  }

  return (
    <div>
      <button onClick={() => handleOnClick('start')}>Start audio</button>
      <button onClick={() => handleOnClick('stop')}>Pause audio</button>
      <div>
        <label htmlFor="volume">Attack</label>
        <input name="volume" type="range" min="0" max="5" step="0.01" value={attack} onChange={e => handleParamChange(e.target.value, 'attack')} />
        <label htmlFor="volume">Decay</label>
        <input name="volume" type="range" min="0" max="5" step="0.01" value={decay} onChange={e => handleParamChange(e.target.value, 'decay')} />
      </div>
      <Keyboard onKeyDown={handleOnKeyDown} />
    </div>
  );
}

export default App;
