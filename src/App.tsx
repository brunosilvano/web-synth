import React from 'react';
import './App.css';
import Synth from './Synth';
import Keyboard from './Keyboard';

function App({ synth }: { synth: Synth }) {

  const handleOnClick = (value: 'suspend' | 'resume') => {
    switch (value) {
      case 'suspend':
        synth.audioContext.suspend();
        break;
      case 'resume':
        synth.audioContext.resume();
        break;
    }
  }

  const handleOnKeyDown = (note: number) => {
    synth.setNote(note);
    synth.envelope.trigger();
  }

  return (
    <div>
      <button onClick={() => handleOnClick('resume')}>Start audio</button>
      <button onClick={() => handleOnClick('suspend')}>Pause audio</button>
      <Keyboard onKeyDown={handleOnKeyDown} />
    </div>
  );
}

export default App;
