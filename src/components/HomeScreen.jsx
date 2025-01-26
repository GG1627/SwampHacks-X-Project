import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Grin from "./002.png";
import Smile from "./001.png";
import Mid from "./012.png";
import Frown from "./010.png";
import Cry from "./frame_029.png";
import Sentiment from 'sentiment';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("tab-A");
  const navigate = useNavigate();
  const [mood, setMood] = useState(3); // Default mood is 3 (Mid)
  const sentiment = new Sentiment(); // Initialize the Sentiment instance


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonCLick = () => {
    navigate("/resources");
  };

  const handleButtonCLick2 = () => {
    navigate("/calendar");
  };

  const handleButtonCLick3 = () => {
    navigate("/contact");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent adding a new line
      const textArea = document.getElementById("text-area-1");
      const userInput = textArea.value; // Get the current text
      
      if (userInput && user) {
        const today = new Date().toLocaleDateString(); // Get today's date
        const savedNotes = JSON.parse(localStorage.getItem(`notes-${user.email}`)) || {}; // Retrieve existing notes
        savedNotes[today] = userInput; // Save the note for today's date
        localStorage.setItem(`notes-${user.email}`, JSON.stringify(savedNotes)); // Store notes back to localStorage
      }
  
      textArea.value = ""; // Clear the text after pressing Enter
    }
  };

  const { user, logout } = useAuth0();

  useEffect(() => {
    if (user) {
      const savedMoods = JSON.parse(localStorage.getItem(`mood-${user.email}`)) || {};
      const today = new Date().toLocaleDateString(); // Format today's date
      const todayMood = savedMoods[today]; // Retrieve mood for today
      if (todayMood) {
        setMood(todayMood); // Set today's mood
      } else {
        setMood(null); // No mood recorded for today
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
        <button onClick={handleButtonCLick3}>Reach Out</button>
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
            {mood ? (
    <img
      src={getImageForValue(mood)}
      className="pixelated-image HomeScreen_pixelated-image"
      alt="Today's Mood"
    />
  ) : (
    <p>No mood recorded for today.</p>
  )}
          </div>
        </div>
      </div>

      <div
        className="images_container"
        style={{ height: "50vh", marginTop: "5vh", width: "22vw" }}
      >

      </div>

      <div className="notepad-container">
        <h1 className="text-area-label">Whats on your mind?</h1>
        <textarea
          id="text-area-1"
          className="text-area-1"
          maxlength="600"
          onKeyDown={handleKeyDown}
        ></textarea>
        <img
          src="/src/assets/images/sticky_note.png"
          className="notepad-img"
        ></img>
        <div className="ResourcesScreen_dog_container">
              <img
                src="/src/assets/Videos/dogVID3.gif"
                alt="Dog Animation"
                width="300"
              />
              </div>
      </div>
    </div>
  );
};

export default HomeScreen;
