import React from "react";
import "./LoginScreen.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginScreen = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Login</div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Login with Google</button>
        ) : (
          <>
            <p>You're logged in!</p>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
