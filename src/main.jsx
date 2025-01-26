import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const handleRedirectCallback = (appState) => {
  const redirectPath = appState?.returnTo || "/feeling";
  window.location.replace(`${window.location.origin}${redirectPath}`);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/feeling`,
      }}
      onRedirectCallback={handleRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
