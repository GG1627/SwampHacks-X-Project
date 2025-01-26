import React, { useState } from "react";
import "./HomeScreen.css";
import myImage from "./heart.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
        <div className="title-bar title-bar2">
          <button onClick={handleButtonCLick}>Resources</button>
          <button onClick={handleButtonCLick2}>Calendar</button>
        </div>
        
      </div>
    );
  };

export default HomeScreen;
