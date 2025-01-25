import React from "react";
import "./FeelingScreen.css";
import Grin from "./002.png";  

const FeelingScreen = () => {
  return (
    <div className="HomeScreen_container">
    <div className="window" style={{ width: "700px" }}>
            <div className="title-bar title-bar3">
                <div className="title-bar-text">Feeling Meter</div>
                <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
                </div>
            </div>
            
            <div className="window-body">
                <p><span className="root-text">How Are you</span> <span className="root-text2">Feeling</span> <span className="root-text">Today?</span></p>
                <img src={Grin} alt="Pixelated Example" className="pixelated-image"></img>
                <div className="field-row" style={{ width: "300px" }}>
                <label htmlFor="range25"></label>
                <label htmlFor="range26">Low</label>
                <input id="range26" type="range" min="1" max="5" defaultValue="3" />
                <label htmlFor="range27">High</label>
            </div>
            </div>
            </div>
    </div>
  );
};

export default FeelingScreen;
