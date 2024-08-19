import React, { useState } from "react";
import ClickerGame from "./components/ClickerGame";
import "./App.css";

const App = () => {
  const [click, setClick] = useState(0);
  const [second, setSecond] = useState(0);
  const handleClick = () => {
    if (click === 0) {
      setInterval(() => {
        setSecond((second) => second + 10);
      }, 10);
    }
    setClick(click + 1);
  };

  const clicksec = ((click / second) * 1000).toFixed(2);

  return (
    <div>
      <div className="container">
        <ClickerGame number={second / 1000} text="Timer" color="Green" />
        <ClickerGame number={clicksec} text="Click/s" color="Yellow" />
        <ClickerGame number={click} text="Score" color="Blue" />
      </div>
      <button className="main-area" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default App;
