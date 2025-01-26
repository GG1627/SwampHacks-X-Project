import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactScreen.css";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0




const ContactScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth0(); // Get the authenticated user

  const handleButtonCLick = () => {
    navigate("/homescreen");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/homescreen");
      event.preventDefault(); // Prevent adding a new line
      const textArea = event.target;
      const userInput = textArea.value.trim(); // Get the current text
      
      if (userInput && user) {
        const today = new Date().toLocaleDateString(); // Get today's date
        const savedContacts = JSON.parse(localStorage.getItem(`contacts-${user.email}`)) || {}; // Retrieve existing notes
        savedContacts[today] = [...(savedContacts[today] || []), userInput]; // Save the note for today's date
        localStorage.setItem(`contacts-${user.email}`, JSON.stringify(savedContacts)); // Store notes back to localStorage
      }
  
      textArea.value = ""; // Clear the text after pressing Enter
    }
  };

  useEffect(() => {
      document.body.className = "ContactScreen";
      return () => {
          document.body.className = "";
      };
  }, []);


  return (
    <div className="ResourcesScreen_container">
    <div className="window" style={{ width: 700 }}>
            <div className="title-bar title-bar3">
                <div className="title-bar-text">Reach Out</div>
                <div className="title-bar-controls">
                  <button aria-label="Close" onClick={handleButtonCLick}></button>

                </div>
            </div>
            <div className="window-body ResourceScreen_window-body">
            <div className="content-container">
            <p className="text-container">
              <span className="reach-text">Reach Out</span>
              <span className="mid-text"> To</span>{" "}
              <span className="first-text">Close Ones</span>
            </p>     
            </div>
            <div className="content-container">
               
              </div>
              <div className="window-body">
                <div className="form-row1">
                <p> Write a name to check in on: </p>
                <input
                type="text"
                onKeyDown={handleKeyDown}
              ></input>
                </div>
            </div>
            <p className="text-container">
              <p>It's important to remind ourselves to check in with those close to us</p>
              </p>  
            </div>
      
            </div>
            </div>
  );
};

export default ContactScreen;
