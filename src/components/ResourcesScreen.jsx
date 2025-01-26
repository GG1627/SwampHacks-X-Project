import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResourcesScreen.css";
import Grin from "./002.png";
import Smile from "./001.png";
import Mid from "./012.png";
import Frown from "./010.png";
import Cry from "./frame_029.png";
import { useAuth0 } from "@auth0/auth0-react";



const ResourcesScreen = () => {
  const navigate = useNavigate();

  const handleButtonCLick = () => {
    navigate("/homescreen");
  };


  return (
    <div className="ResourcesScreen_container">
    <div className="window" style={{ width: "95vw", height: "95vh", margin: "auto" }}>
            <div className="title-bar title-bar3">
                <div className="title-bar-text">Resources</div>
                <div className="title-bar-controls">
                  <button aria-label="Close" onClick={handleButtonCLick}></button>

                </div>
            </div>
            <div className="window-body ResourceScreen_window-body">
            <p className="text-container">
              <span className="first-text">Reach</span>
              <span className="mid-text"> Your </span>{" "}
              <span className="reach-text">Community</span>
            </p>            
            </div>

            </div>
            </div>
  );
};

export default ResourcesScreen;
