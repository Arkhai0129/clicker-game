import React from "react";
import "./style.css";

const ClickerGame = ({ number, text, color }) => {
  return (
    <div className={"box " + color}>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
};

export default ClickerGame;
