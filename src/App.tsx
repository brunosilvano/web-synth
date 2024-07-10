import React from 'react';
import './App.css';
import Synth from './Synth';
import Keyboard from './Keyboard';

function App({ synth }: { synth: Synth }) {

  const handleOnClick = (value: 'suspend' | 'resume') => {
    switch (value) {
      case 'suspend':
        synth.audioCtx.suspend();
        break;
      case 'resume':
        synth.audioCtx.resume();
        break;
    }
  }

  return (
    <div>
      <button onClick={() => handleOnClick('resume')}>Start audio</button>
      <button onClick={() => handleOnClick('suspend')}>Pause audio</button>
      <Keyboard />
    </div>
  );
}

export default App;
