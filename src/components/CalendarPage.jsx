import React, { useEffect, useState } from "react";
import "./CalendarPage.css";
import background from "../assets/XPbackground.jpg";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Grin from "./002.png";
import Smile from "./001.png";
import Mid from "./012.png";
import Frown from "./010.png";
import Cry from "./frame_029.png";

import Modal from "react-modal";

Modal.setAppElement("#root");

const CalendarPage = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState(3); 
  const [activeTab, setActiveTab] = useState('Mood');
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null); 
  const { user, isAuthenticated } = useAuth0();


  useEffect(() => {
    if (isAuthenticated && user) {
      const loginDate = JSON.parse(
        localStorage.getItem(`loginDate-${user.email}`)
      );
      if (loginDate && loginDate.date) {
        console.log("User's login date:", loginDate.date);
      }
    }
    if (user) {
        const savedMood = JSON.parse(localStorage.getItem(`mood-${user.email}`));
        if (savedMood && savedMood.mood) {
          setMood(savedMood.mood);
        }
      }
  }, [isAuthenticated, user]);
  
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
  
  const handleButtonClick = () => {
    navigate("/homescreen");
  };

  const openModal = (date) => {
    setSelectedDate(date);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedDate(null); 
  };

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
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="window" style={{ width: "95vw", height: "95vh", margin: "auto" }}>
        <div className="title-bar">
          <div className="title-bar-text">Calendar</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleButtonClick}></button>
          </div>
        </div>
        <div
          className="window-body"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

        <p className="text-container">
        <span className="reach-text"> Track Your </span>{" "}
        <span className="first-text">Progress</span>
        <span className="reach-text"> Overtime! </span>{" "}
        </p>   
          <Calendar onChange={onChange} value={value} onClickDay={openModal} />
          <p style={{ marginTop: "10px", color: "red" }}>
            <i>click the red x to go back home</i>
          </p>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Selected Date" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="window" style={{ width: "300px", margin: "auto" }}>
            <div className="title-bar">
                <div className="title-bar-text">{selectedDate ? selectedDate.toDateString() : "No Date Selected"}</div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={closeModal}></button>
                </div>
            </div>
            <div className="window-body">
                <section className="tabs" style={{ maxWidth: "500px" }}>
                    <menu role="tablist" aria-label="Sample Tabs">
                        <button role="tab" aria-selected={activeTab === 'mood'} aria-controls="mood" onClick={() => handleTabClick('mood')}>Mood</button>
                        <button role="tab" aria-selected={activeTab === 'logbook'} aria-controls="logbook" onClick={() => handleTabClick('logbook')}>Logbook</button>
                        <button role="tab" aria-selected={activeTab === 'contacted'} aria-controls="contacted" onClick={() => handleTabClick('contacted')}>Contacted</button>
                    </menu>
                    <article role="tabpanel" id="mood" hidden={activeTab !== 'mood'}>
                        <h3>Day's Mood</h3>
                        <img
                        src={getImageForValue(mood)}
                        className="pixelated-image HomeScreen_pixelated-image"
                        ></img>
                    </article>
                    <article role="tabpanel" id="logbook" hidden={activeTab !== 'logbook'}> 
                        <h3>Logbook</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolores iste molestiae illo ex voluptatum accusamus asperiores inventore pariatur officia, expedita aut necessitatibus quos quam quas, tempora quia magnam rerum.</p>
                    </article>
                    <article role="tabpanel" id="contacted" hidden={activeTab !== 'contacted'}>
                        <h3>Contacted</h3>
                        <ul>
                            <li>Person 1</li>
                            <li>Person 2</li>
                            <li>Person 3</li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarPage;