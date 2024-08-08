import React from "react";

const Color = (props) => {
  const ChangeColorGreen = () => {
    props.setColor("green");
  };
  const ChangeColorBlack = () => {
    props.setColor("black");
  };
  const ChangeColorRed = () => {
    props.setColor("red");
  };
  const ChangeColorBlue = () => {
    props.setColor("blue");
  };

  return (
    <div>
      <div>
        <button className="key-button" id="black" onClick={ChangeColorBlack}>
          Black
        </button>
      </div>
      <div>
        <button className="key-button" id="green" onClick={ChangeColorGreen}>
          Green
        </button>
      </div>
      <div>
        <button className="key-button" id="red" onClick={ChangeColorRed}>
          Red
        </button>
      </div>
      <div>
        <button className="key-button" id="blue" onClick={ChangeColorBlue}>
          Blue
        </button>
      </div>
    </div>
  );
};

export default Color;
