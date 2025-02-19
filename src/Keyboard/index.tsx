import React, { useCallback, useEffect, useState } from "react";
import Key from "./Key";
import { OnKeyDown } from "../App";

const keys = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l'
] as const;

const isInKeys = (x: string): x is typeof keys[number] => {
  return keys.includes(x as typeof keys[number]);
};

const getMidiValue = (baseNote: number, octave: number) => {
  return baseNote + (octave + 2) * 12;
};

interface KeyboardProps {
  onKeyDown: OnKeyDown;
}

const Keyboard = ({ onKeyDown }: KeyboardProps) => {
  const [octave, setOctave] = useState(3);

  const handleOnKeyDown = useCallback((ev: KeyboardEvent) => {
    const key = ev.key;
    if (ev.repeat) return;
    if (isInKeys(key)) {
      const note = getMidiValue(keys.indexOf(key), octave);
      if (note < 0 && 127 < note) return;
      onKeyDown(note);
    } else if (key === 'x' && octave < 8) {
      setOctave(currentOctave => ++currentOctave);
    } else if (key === 'z' && octave > -2) {
      setOctave(currentOctave => --currentOctave);
    }
  }, [octave, onKeyDown]);

  useEffect(() => {
    document.removeEventListener('keydown', handleOnKeyDown);
    document.addEventListener('keydown', handleOnKeyDown);
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown);
    }
  }, [handleOnKeyDown]);

  return (
    <div style={{ display: 'flex' }}>
      {keys.map((key, index) => {
        const midiNote = getMidiValue(index, octave);
        if (midiNote > 127) return null;
        return <Key key={midiNote} midiNote={midiNote} onKeyDown={onKeyDown} />;
      })
      }
    </div>
  );
}

export default Keyboard;
