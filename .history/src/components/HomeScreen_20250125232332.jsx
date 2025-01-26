import React, { useState, useEffect } from "react";
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
  const [mood, setMood] = useState(3); // Default mood is 3 (Mid)

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonCLick = () => {
    navigate("/resources");
  };

  const handleButtonCLick2 = () => {
    navigate("/calendar");
  };

  const { user, logout } = useAuth0();

  useEffect(() => {
    if (user) {
      const savedMood = JSON.parse(localStorage.getItem(`mood-${user.email}`));
      if (savedMood && savedMood.mood) {
        setMood(savedMood.mood);
      }
    }
  }, [user]);

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
      <div className="title-bar HomeScreen_title-bar2">
        <button onClick={handleButtonCLick}>Resources</button>
        <button onClick={handleButtonCLick2}>Calendar</button>
        <button
          onClick={() => logout({ returnTo: `${window.location.origin}` })}
        >
          Logout
        </button>
        <div className="title-bar-controls"></div>
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
              src={getImageForValue(mood)}
              className="pixelated-image HomeScreen_pixelated-image"
            ></img>
          </div>
        </div>
      </div>

      <div className="images_container">
        <img
          src="/src/assets/images/speech_bubble.png"
          alt="Speech Bubble"
          style={{ height: "62vh", marginTop: "5vh", width: "30vw" }}
        />
        <img
          src="/src/assets/Videos/dogVID3.gif"
          alt="Dog Animation"
          width="300"
        />
      </div>

      {/* <div className="dog_container">
        <img
          src="/src/assets/Videos/dogVID3.gif"
          alt="Dog Animation"
          width="300"
        />
      </div>
      <div className="speech_bubble_container">
        <img src="/src/assets/images/speech_bubble.png" alt="Speech Bubble" />
      </div> */}
    </div>
  );
};

export default HomeScreen;
