import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct way in React 18
import App from "./App";
import "./styles/styles.css"; // Ensure this file exists

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
