import React from "react";
import Key from "./Key";

const midiNotes = [
  60, 62, 64, 65, 67, 69, 71, 72
];

function Keyboard({ onKeyDown }: { onKeyDown: (note: number) => void }) {
  return (
    <div style={{ display: 'flex' }}>
      {midiNotes.map(midiNote => <Key midiNote={midiNote} onKeyDown={onKeyDown} />)}
    </div>
  );
}

export default Keyboard;