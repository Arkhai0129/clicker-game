import React, { useState } from "react";
import ClickerGame from "./components/ClickerGame";
import "./App.css";
let id;
const App = () => {
  const [click, setClick] = useState(0);
  const [second, setSecond] = useState(0);

  const handleClick = () => {
    if (click === 0) {
      id = setInterval(() => {
        setSecond((second) => {
          const Upsecond = second + 10;
          if (Upsecond === 5000) {
            clearInterval(id);
            return Upsecond;
          }
          return Upsecond;
        });
      }, 10);
    }
    if (second === 5000) {
      handleRanking();
      gameRestart();
    } else {
      setClick(click + 1);
    }
  };
  const ranking_names = {
    slow: "Эмгэн хумс 🐌",
    moderate: "Яст мэлхий🐢",
    average: "Туулай🐰",
    sonic_speed: "Супер соник🔥",
    flash: "Марвел флаш⚡",
  };

  const handleRanking = () => {
    if (clicksec <= 4) {
      alert(ranking_names.slow + "\nClick per second:" + clicksec);
    } else if (clicksec <= 5) {
      alert(ranking_names.moderate + "\nClick per second:" + clicksec);
    } else if (clicksec <= 6) {
      alert(ranking_names.average + "\nClick per second:" + clicksec);
    } else if (clicksec <= 7) {
      alert(ranking_names.sonic_speed + "\nClick per second:" + clicksec);
    } else {
      alert(ranking_names.flash + "\nClick per second:" + clicksec);
    }
  };

  const gameRestart = () => {
    setSecond(0);
    setClick(0);
    clearInterval(id);
  };

  let clicksec = (click / second) * 1000;
  clicksec = isNaN(clicksec) ? 0 : parseFloat(clicksec.toFixed(2));

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
