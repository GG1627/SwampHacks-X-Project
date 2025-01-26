import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";
import CalendarPage from "./components/CalendarPage";
import FeelingScreen from "./components/FeelingScreen";
import HomeScreen from "./components/HomeScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/feeling" element={<FeelingScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;