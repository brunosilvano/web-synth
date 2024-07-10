import React, { useState } from "react";
import "./Key.css"

function Key({ midiNote }: { midiNote: number }) {

  const [isActive, setIsActive] = useState(false);

  const handleOnMouseDown = () => {
    setIsActive(true);
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