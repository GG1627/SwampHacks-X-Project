import "./App.css";
import HomeScreen from "./components/HomeScreen";
import CalendarPage from "./components/CalendarPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />}/>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
