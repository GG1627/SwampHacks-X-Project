import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import WelcomeScreen from "./components/WelcomeScreen";
import CalendarPage from "./components/CalendarPage";
import FeelingScreen from "./components/FeelingScreen";
import HomeScreen from "./components/HomeScreen";
import ResourcesScreen from "./components/ResourcesScreen";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"; // Import axios for sending HTTP requests

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [error, setError] = useState(null); // Track errors for debugging or user notifications

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem("user", JSON.stringify(user));

      // Send the username to the backend to store it
      const storeUserName = async () => {
        try {
          const response = await axios.post(
            "http://localhost:5000/store-username", // Ensure this is the correct API endpoint
            {
              name: user.name, // Send the name from the Auth0 user object
            }
          );
          console.log("Username stored successfully:", response.data); // Handle success
        } catch (error) {
          console.error("Error storing username:", error);
          setError(
            "There was an error storing your username. Please try again."
          );
        }
      };

      storeUserName(); // Call the function to send the request
    }
  }, [isAuthenticated, user]); // Run only when isAuthenticated or user changes

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while Auth0 is loading the user
  }

  return (
    <Router>
      {error && <div className="error-message">{error}</div>}{" "}
      {/* Display any error messages */}
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/feeling" element={<FeelingScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/resources" element={<ResourcesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
