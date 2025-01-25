import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import CalendarPage from "./components/CalendarPage";
import FeelingScreen from "./components/FeelingScreen";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
