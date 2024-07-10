import React from "react";
import Key from "./Key";

const midiNotes = [
  60, 62, 64, 65, 67, 69, 71, 72
];

function Keyboard() {
  return (
    <div style={{ display: 'flex' }}>
      {midiNotes.map(midiNote => <Key midiNote={midiNote} />)}
    </div>
  );
}

export default Keyboard;