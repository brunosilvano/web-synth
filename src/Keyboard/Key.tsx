import React, { useState } from "react";
import "./Key.css"

function Key({ midiNote, onKeyDown }: { midiNote: number, onKeyDown: (note: number) => void }) {

  const [isActive, setIsActive] = useState(false);

  const handleOnMouseDown = () => {
    setIsActive(true);
    onKeyDown(midiNote);
  };

  const handleOnMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div className={`key ${isActive ? 'active' : ''}`} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
      <p className="note-value">{midiNote}</p>
    </div>
  );
}

export default Key;