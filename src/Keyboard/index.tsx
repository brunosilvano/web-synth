import React, { useCallback, useEffect } from "react";
import Key from "./Key";
import { OnKeyDown } from "../App";

const keys = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l'
];

const midiNotes = keys.map((key, index) => ({
  key,
  value: 60 +  index
}));

interface KeyboardProps {
  onKeyDown: OnKeyDown;
}

const Keyboard = ({ onKeyDown }: KeyboardProps) => {
  const handleOnKeyDown = useCallback((ev: KeyboardEvent) => {
    const key = ev.key;
    if (ev.repeat) return;
    if (keys.includes(key)) {
      const note = midiNotes.find(midiNote => midiNote.key === ev.key)?.value ?? 60;
      onKeyDown(note);
    }
  }, [onKeyDown]);

  useEffect(() => {
    document.removeEventListener('keydown', handleOnKeyDown);
    document.addEventListener('keydown', handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    }
  }, [handleOnKeyDown]);

  return (
    <div style={{ display: 'flex' }}>
      {midiNotes.map(({ value })=> <Key midiNote={value} onKeyDown={onKeyDown} />)}
    </div>
  );
}

export default Keyboard;
