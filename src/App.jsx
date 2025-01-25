import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CalendarPage from "./components/CalendarPage";
import LoginScreen from "./components/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
