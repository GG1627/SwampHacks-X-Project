import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import WelcomeScreen from "./components/WelcomeScreen";
import CalendarPage from "./components/CalendarPage";
import FeelingScreen from "./components/FeelingScreen";
import HomeScreen from "./components/HomeScreen";
import ResourcesScreen from "./components/ResourcesScreen";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [isAuthenticated, user]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/feeling" element={<FeelingScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/resources" element={<ResourcesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
