import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResourcesScreen.css";
import myImage from "../assets/images/heart.png";
import Grin from "../assets/images/002.png";
import Smile from "../assets/images/001.png";
import Mid from "../assets/images/012.png";
import Frown from "../assets/images/010.png";
import Cry from "../assets/images/frame_029.png";
import { useAuth0 } from "@auth0/auth0-react";



const ResourcesScreen = () => {
  const navigate = useNavigate();

  const handleButtonCLick = () => {
    navigate("/homescreen");
  };

  useEffect(() => {
    document.body.className = "ResourceScreen";
    return () => {
        document.body.className = "";
    };
}, []);
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
            <div className="content-container">
                <img src={myImage} className="heart-image" alt="Heart" />
            <p className="text-container">
              <span className="first-text">Reach</span>
              <span className="mid-text"> Your </span>{" "}
              <span className="reach-text">Community</span>
            </p>     
            <img src={myImage} className="heart-image" alt="Heart" />
            </div>
            <span className="ResourcesScreen_mid-text">
              UF Counseling & Wellness Center  {"    "}
              <a
                href="https://counseling.ufl.edu/outreach/workshops/"
                target="_blank"
              >
               Community Workshops & Events
              </a>
            </span>
            <span className="ResourcesScreen_mid-text">
              UF Mental Health Screening {"    "}
              <a
                href="https://counseling.ufl.edu/services/self/"
                target="_blank"
              >
                Start Your Self-Assessment
              </a>
            </span> 
            
            <span className="ResourcesScreen_mid-text">
              UF CWC Groups {"    "}
              <a
                href="https://counseling.ufl.edu/services/groups/"
                target="_blank"
              >
                Join a Group
              </a>
            </span>     
            <span className="ResourcesScreen_mid-text">
              UF AWARE {"    "}
              <a
                href="https://counseling.ufl.edu/outreach/aware/"
                target="_blank"
              >
                Ambassadors
              </a>
            </span>   
            <div className="ResourcesScreen_dog_container">
              <img
                src="/src/assets/Videos/dogVID4.gif"
                alt="Dog Animation"
                width="300"
              />
            </div>        
            </div>
      
            </div>
            </div>
  );
};

export default ResourcesScreen;
