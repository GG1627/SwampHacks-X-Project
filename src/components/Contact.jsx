import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const leavePage = () => {
    navigate("/calendar");
  };

  const submitPage = () => {
    navigate("/HomeScreen");
  };

  return (
    <div className="Contact_container2">
      <div className="window" style={{ width: "350px" }}>
        <div className="title-bar title-bar3">
          <div className="title-bar-text">Contact Form</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onClick={leavePage}></button>
          </div>
        </div>
        <div className="window-body">
          <div className="form-row1">
            <div className="name-text"> Write a name</div>
            <input type="text"></input>
          </div>
          <div className="contact-row">
            <div className="contact-method">Mean of Contact</div>
            <div className="checkbox-column">
              <div className="form-row2">
                <input type="checkbox" id="callb" />
                <label for="callb" className="checkbox-name">
                  Call
                </label>
              </div>
              <div className="form-row2">
                <input type="checkbox" id="textb" />
                <label for="textb" className="checkbox-name">
                  Text
                </label>
              </div>
              <div className="form-row2">
                <input type="checkbox" id="visitb" />
                <label for="visitb" className="checkbox-name">
                  Visit
                </label>
              </div>
            </div>
          </div>
          <div className="contact-row2">
            <div className="freq-label">Set Reminder Days</div>
            <div className="contact-row">
              <div className="day">
                <input type="checkbox" id="sunday" />
                <label for="sunday">S</label>
              </div>
              <div className="day">
                <input type="checkbox" id="monday" />
                <label for="monday">M</label>
              </div>
              <div className="day">
                <input type="checkbox" id="tuesday" />
                <label for="tuesday">T</label>
              </div>
              <div className="day">
                <input type="checkbox" id="wednesday" />
                <label for="wednesday">W</label>
              </div>
              <div className="day">
                <input type="checkbox" id="thursday" />
                <label for="thursday">T</label>
              </div>
              <div className="day">
                <input type="checkbox" id="friday" />
                <label for="friday">F</label>
              </div>
              <div className="day">
                <input type="checkbox" id="saturday" />
                <label for="saturday">S</label>
              </div>
            </div>
          </div>
          <input type="button" id="submitbut" />
          <button type="button" onClick={submitPage}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
