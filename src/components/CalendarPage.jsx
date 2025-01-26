import React, { useState } from "react";
import "./CalendarPage.css";
import background from "../assets/XPbackground.jpg";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CalendarPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Mood');
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null); 

  
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
          <h1>Calendar</h1>
          <h2>View your progress over time!</h2>
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
                        <progress value="50" max="100" style={{width: '100%', marginBottom: '15px'}}></progress>
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