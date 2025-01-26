import React, { useState } from "react";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Grin from "./002.png";
import Smile from "./001.png";
import Mid from "./012.png";
import Frown from "./010.png";
import Cry from "./frame_029.png";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("tab-A");
  const navigate = useNavigate();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonCLick = () => {
    navigate("/");
  };

  const handleButtonCLick2 = () => {
    navigate("/calendar");
  };

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="HomeScreen_container">
      <div className="title-bar HomeScreen_title-bar2">
        <button onClick={handleButtonCLick}>Resources</button>
        <button onClick={handleButtonCLick2}>Calendar</button>
      </div>
      <div className="HomeScreen_container2">
        <div className="window HomeScreen_window" style={{ width: "200px" }}>
          <div className="title-bar title-bar3">
            <div className="title-bar-text"></div>
            <div className="title-bar-controls"></div>
          </div>
          <div className="content-container HomeScreen_content-container">
            <p className="text-container HomeScreen_text-container">
              Today's Mood
            </p>
            <img
              src={Grin}
              className="pixelated-image HomeScreen_pixelated-image"
            ></img>
          </div>
        </div>
      </div>
      <div className="dog_and_speech_container">
        <div className="dog_container">
          <img
            src="/src/assets/Videos/dogVID3.gif"
            alt="Dog Animation"
            width="300"
          />
        </div>
        <div className="speech_bubble_container">
          <img src="/src/assets/images/speech_bubble.png" alt="Speech Bubble" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
