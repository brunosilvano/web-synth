import React, { useCallback, useEffect, useState } from "react";
import Key from "./Key";
import { OnKeyDown } from "../App";

const keys = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l'
];

interface KeyboardProps {
  onKeyDown: OnKeyDown;
}

const Keyboard = ({ onKeyDown }: KeyboardProps) => {
  const [octave, setOctave] = useState(0)
  const [midiNotes, setMidiNotes] = useState(Array<{key: string; value: number;}>())

  useEffect(() => {
    const notes = keys.map((key, index) => ({
      key,
      value: 60 + (octave * 12) + index
    }));

    setMidiNotes(notes);
  }, [octave]);

  const handleOnKeyDown = useCallback((ev: KeyboardEvent) => {
    const key = ev.key;
    if (ev.repeat) return;
    if (keys.includes(key)) {
      const note = midiNotes.find(midiNote => midiNote.key === ev.key)?.value ?? 60;
      onKeyDown(note);
    } else if (key === 'x') {
      setOctave(currentOctave => ++currentOctave)
    } else if (key === 'z') {
      setOctave(currentOctave => --currentOctave)
    }
  }, [midiNotes, onKeyDown]);

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
