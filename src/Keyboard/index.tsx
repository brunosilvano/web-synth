import React from "react";
import Key from "./Key";
import { OnKeyDown } from "../App";

const midiNotes = [
  60, 62, 64, 65, 67, 69, 71, 72
];

interface KeyboardProps {
  onKeyDown: OnKeyDown;
}

const Keyboard = ({ onKeyDown }: KeyboardProps) => {
  return (
    <div style={{ display: 'flex' }}>
      {midiNotes.map(midiNote => <Key midiNote={midiNote} onKeyDown={onKeyDown} />)}
    </div>
  );
}

export default Keyboard;
