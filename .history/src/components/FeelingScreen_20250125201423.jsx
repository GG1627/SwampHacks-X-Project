import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeelingScreen.css";
import Grin from "./002.png";
import Smile from "./001.png";
import Mid from "./012.png";
import Frown from "./010.png";
import Cry from "./frame_029.png";

const FeelingScreen = () => {
  const navigate = useNavigate();

  const handleButtonCLick = () => {
    navigate("/");
  };

  const handleButtonCLick2 = () => {
    navigate("/homescreen");
  };

  const [sliderValue, setSliderValue] = useState(3);

  const getImageForValue = (value) => {
    switch (value) {
      case 1:
        return Cry;
      case 2:
        return Frown;
      case 3:
        return Mid;
      case 4:
        return Smile;
      case 5:
        return Grin;
      default:
        return Mid;
    }
  };

  return (
    <div className="HomeScreen_container">
      <div className="window" style={{ width: "700px" }}>
        <div className="title-bar title-bar3">
          <div className="title-bar-text">Feeling Meter</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleButtonCLick}></button>
          </div>
        </div>
        <div className="window-body">
          <p>
            <span className="root-text">How Are you</span>{" "}
            <span className="root-text2">Feeling</span>{" "}
            <span className="root-text">Today?</span>
          </p>
          <img
            src={getImageForValue(sliderValue)}
            alt="Pixelated Example"
            className="pixelated-image"
          ></img>
          <div className="field-row" style={{ width: "300px" }}>
            <label htmlFor="range25"></label>
            <label htmlFor="range26">Low</label>
            <input
              id="range26"
              type="range"
              min="1"
              max="5"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
            />
            <label htmlFor="range27">High</label>
          </div>
          <button onClick={handleButtonCLick2}>Mark Mood</button>
        </div>
      </div>
    </div>
  );
};

export default FeelingScreen;
