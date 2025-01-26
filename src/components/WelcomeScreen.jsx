import React, { useState, useEffect } from "react";
import "./WelcomeScreen.css";
import myImage from "./heart.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const WelcomeScreen = () => {
  const [activeTab, setActiveTab] = useState("tab-A");
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleButtonCLick = () => {
    navigate("/feeling");
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const currentDate = new Date().toLocaleDateString();
      localStorage.setItem(
        `loginDate-${user.email}`,
        JSON.stringify({ date: currentDate })
      );
      console.log(`Stored login date for ${user.email}: ${currentDate}`);
      navigate("/feeling"); // Redirect to /feeling after login
    }
  }, [isAuthenticated, user, navigate]);
  
  return (
    <div className="WelcomeScreen_container">
      <div className="title-bar HomeScreen_title-bar2">
      {!isAuthenticated ? (
          // Show login button if the user is not authenticated
          <button onClick={() => loginWithRedirect({
            appState: { returnTo: "/feeling"},
          })}>Login</button>
        ) : (
          // Show logout button if the user is authenticated
          <button onClick={() => logout({ returnTo: `${window.location.origin}` })}>
            Logout
          </button>
        )}
      </div>
      <div className="WelcomeScreen_container2">
        <div className="window" style={{ width: "700px" }}>
          <div className="title-bar title-bar3">
            <div className="title-bar-text">Welcome To:</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="content-container">
            <img src={myImage} className="heart-image" alt="Heart" />
            <p className="text-container">
              <span className="first-text">Root</span>
              <span className="mid-text"> & </span>{" "}
              <span className="reach-text">Reach</span>
            </p>
            <img src={myImage} className="heart-image" alt="Heart" />
          </div>
        </div>
        <section className="tabs" style={{ maxWidth: "500px" }}>
          <menu role="tablist" aria-label="Sample Tabs" className="tab-menu">
            <button
              role="tab"
              aria-selected={activeTab === "tab-A"}
              aria-controls="tab-A"
              onClick={() => handleTabClick("tab-A")}
            >
              About Us
            </button>
            <button
              role="tab"
              aria-selected={activeTab === "tab-B"}
              aria-controls="tab-B"
              onClick={() => handleTabClick("tab-B")}
            >
              Creators
            </button>
          </menu>
          <article role="tabpanel" id="tab-A" hidden={activeTab !== "tab-A"}>
            <p className="text-title2">What We Are</p>
            <p className="about">
              Root & Reach is a hollistic web application designed to support
              student mental health, activism, and advocacy. Our mission is
              simple: "Help yourself, help others."
            </p>
          </article>
          <article role="tabpanel" id="tab-B" hidden={activeTab !== "tab-B"}>
            <p className="text-title">Who We Are</p>
            <p className="about">
              Four Passionate Programmers: Alejandro Gonzalez, Gael Garcia, John
              Lewis, Hector Cruz
            </p>

            <p className="about">
              Read more at{"    "}
              <a
                href="https://github.com/johnl-dev/SwampHacks-X-Project"
                target="_blank"
              >
                Our SwampHacks X Repository Link
              </a>
            </p>
          </article>
        </section>
      </div>
      <div className="dog_container">
        <img
          src="/src/assets/Videos/dogVID2.gif"
          alt="Dog Animation"
          width="300"
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
