import React from 'react';
import { useState } from 'react';


const Keyboard = ({ onKeyPress , onBackspace ,clear}) => {
  const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    ['.', ',', '?', '!', '@',' ', '#', '$', '%', '&', '*'],
  ];
  const keys2 = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ['.', ',', '?', '!', '@',' ', '#', '$', '%', '&', '*'],
];
const keys3 = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
  ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
  ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ',],
  ['.', ',', '?', '!', '@',' ', '#', '$', '%', '&', '*'],
];

const keys4 = [
  ['😀', '😂', '😅', '😍', '😘', '😎', '😢', '😡', '😱', '🤔'],
  ['👍', '👎', '🙏', '👏', '🙌', '🤷', '🤦', '💪', '👌', '👊'],
  ['🎉', '🎈', '🎁', '🍔', '🍕', '🍣', '🍩', '🍰', '🍺', '🍷'],
  ['🚗', '✈️', '🚀', '🏠', '🏖️', '🏆', '🎧', '🎮', '📱', '💻'],
  ['❤️', '💔', '💥', '🔥', '✨',' ', '🌟', '🌈', '⚡', '💧', '☀️'],
];

const arr=[keys,keys2,keys4,keys3]
      const [language, setlanguage] = useState(arr[3]);
      const [count, setCount] = useState(0);

      const setlang = () => {
        setCount((prevCount) => (prevCount + 1) % 4);
        setlanguage(arr[count]);
      };

  
  return (
    <div className="keyboard">
      {language.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button
              key={key}
              className="key-button"
              onClick={() => onKeyPress(key)}
            >
              {key === " " ? "space" :key}{" "}
            </button>
          ))}
        </div>
      ))}
       <button className="key-button" onClick={onBackspace}>Backspace</button>
      <button className="key-button" onClick={setlang}>לשינוי שפה </button>
      <button className="key-button" onClick={clear}> Clear </button>
      
    </div>
  );
};

export default Keyboard;


