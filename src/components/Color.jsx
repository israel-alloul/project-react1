import React from 'react'
import { useState } from 'react';

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
    <div>Color:
         <button className="key-button" onClick={ChangeColorBlack}> Black </button>
         <button className="key-button" onClick={ChangeColorGreen}> Green </button>
         <button className="key-button" onClick={ChangeColorRed}> Red</button>
         <button className="key-button" onClick={ChangeColorBlue}> Blue </button>
      
    </div>
  )
}

export default Color