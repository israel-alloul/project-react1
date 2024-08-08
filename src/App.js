import React, { useState } from "react";
import Keyboard from "./components/KeyBoard";
import Color from "./components/Color";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(12);
  const [color, setColor] = useState("red");

  const handleKeyPress = (key) => {
    setText(text + key);
  };

  const handleBackspace = () => {
    setText(text.slice(0, -1));
  };

  const increaseFontSize = () => {
    setFontSize((prevSize) => (prevSize < 30 ? prevSize + 6 : prevSize));
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => (prevSize > 12 ? prevSize - 6 : prevSize));
  };

  const clear = () => {
    setText(" ");
  };

  return (
    <div className="App">
      <h1>My Virtual Keyboard</h1>
      <div className="main">
      <div className="screen">
        <div 
          className="textarea"
          style={{ fontSize: `${fontSize}px`, color: color }}
        >
          {text}{" "}
        </div>
      </div>
      <div>
        <Color color={color} setColor={setColor} />
        <div id="s">
        <button onClick={decreaseFontSize}>-</button>
        <span> {fontSize}px </span>
        <button onClick={increaseFontSize}>+</button>
        </div>
      </div>
      </div>
      <div className="keyboard2">
      <Keyboard
        onKeyPress={handleKeyPress}
        onBackspace={handleBackspace}
        clear={clear}
      />
      </div>
    </div>
  );
};

export default App;
