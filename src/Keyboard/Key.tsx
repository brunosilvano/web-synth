import React from "react";
import "./Key.css"

interface KeyProps {
  midiNote: number;
  onKeyDown: (note: number) => void;
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
