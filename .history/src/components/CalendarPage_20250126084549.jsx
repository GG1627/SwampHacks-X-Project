import React, { useEffect, useState } from "react";
import "./CalendarPage.css";
import background from "../assets/XPbackground.jpg";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Grin from "/images/002.png";
import Smile from "/images/001.png";
import Mid from "/images/012.png";
import Frown from "/images/010.png";
import Cry from "/images/frame_029.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CalendarPage = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState(3);
  const [activeTab, setActiveTab] = useState("Mood");
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (user) {
      const savedMoods =
        JSON.parse(localStorage.getItem(`mood-${user.email}`)) || {};
      setMood(savedMoods); // Set all moods for the user
    }
  }, [user]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonClick = () => {
    navigate("/homescreen");
  };

  const openModal = (date) => {
    setSelectedDate(date);

    if (user) {
      const savedMoods =
        JSON.parse(localStorage.getItem(`mood-${user.email}`)) || {};
      const dateKey = date.toLocaleDateString(); // Format the date as a string
      setMood(savedMoods[dateKey] || null); // Set the mood for the selected date or null if not found
    }

    setActiveTab("mood"); // Ensure the "Mood" tab is selected by default
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

  useEffect(() => {
    document.body.className = "CalendarScreen";
    return () => {
      document.body.className = "";
    };
  }, []);

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
      <div
        className="window"
        style={{ width: "95vw", height: "95vh", margin: "auto" }}
      >
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
            <span className="reach-text"> Track your </span>{" "}
            <span className="first-text">progress</span>
            <span className="reach-text"> over time! </span>{" "}
          </p>
          <Calendar onChange={onChange} value={value} onClickDay={openModal} />
          <p style={{ marginTop: "15px", color: "red" }}></p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Date"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="window" style={{ width: "300px", margin: "auto" }}>
          <div className="title-bar">
            <div className="title-bar-text">
              {selectedDate ? selectedDate.toDateString() : "No Date Selected"}
            </div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={closeModal}></button>
            </div>
          </div>
          <div className="window-body">
            <section className="tabs" style={{ maxWidth: "500px" }}>
              <menu role="tablist" aria-label="Sample Tabs">
                <button
                  role="tab"
                  aria-selected={activeTab === "mood"}
                  aria-controls="mood"
                  onClick={() => handleTabClick("mood")}
                >
                  Mood
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "logbook"}
                  aria-controls="logbook"
                  onClick={() => handleTabClick("logbook")}
                >
                  Logbook
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "contacted"}
                  aria-controls="contacted"
                  onClick={() => handleTabClick("contacted")}
                >
                  Reach Out
                </button>
              </menu>
              <article role="tabpanel" id="mood" hidden={activeTab !== "mood"}>
                <h3>Day's Mood</h3>
                {mood ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={getImageForValue(mood)}
                      className="pixelated-image HomeScreen_pixelated-image"
                      alt="Mood Icon"
                    />
                  </div>
                ) : (
                  <p>No mood recorded for this date.</p>
                )}
              </article>
              <article
                role="tabpanel"
                id="logbook"
                hidden={activeTab !== "logbook"}
              >
                <h3>Logbook</h3>
                {user && selectedDate && (
                  <p className="text-note">
                    {JSON.parse(localStorage.getItem(`notes-${user.email}`))?.[
                      selectedDate.toLocaleDateString()
                    ] || "No note recorded for this date."}
                  </p>
                )}
              </article>
              <article
                role="tabpanel"
                id="contacted"
                hidden={activeTab !== "contacted"}
              >
                <h3>Reach To</h3>
                {user && selectedDate && (
                  <p className="text-note">
                    {JSON.parse(
                      localStorage.getItem(`contacts-${user.email}`)
                    )?.[selectedDate.toLocaleDateString()] ||
                      "No contact was recorded for this date."}
                  </p>
                )}
              </article>
            </section>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarPage;
