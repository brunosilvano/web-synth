import React from 'react';
import './App.css';
import Synth from './Synth';
import Keyboard from './Keyboard';

function App({ synth }: { synth: Synth }) {

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

  const handleOnKeyDown = (note: number) => {
    synth.setNote(note);
    synth.envelope.trigger();
  }

  return (
    <div>
      <button onClick={() => handleOnClick('start')}>Start audio</button>
      <button onClick={() => handleOnClick('stop')}>Pause audio</button>
      <Keyboard onKeyDown={handleOnKeyDown} />
    </div>
  );
}

export default App;
