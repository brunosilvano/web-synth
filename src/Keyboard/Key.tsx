import React from "react";
import "./Key.css"
import { OnKeyDown } from "../App";

interface KeyProps {
  midiNote: number;
  onKeyDown: OnKeyDown;
}

const Key = ({ midiNote, onKeyDown }: KeyProps) => {
  const handleOnMouseDown = () => {
    onKeyDown(midiNote);
  };

  return (
    <div className="key" onMouseDown={handleOnMouseDown}>
      <p className="note-value">{midiNote}</p>
    </div>
  );
}

export default Key;
