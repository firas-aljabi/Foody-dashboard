// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider from react-redux
import "./styles/index.css";
import App from "./App";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import store from "./redux/store"; // Import the created store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Wrap your components with the Provider */}
      <ThemeToggleProvider>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeToggleProvider>
    </Provider>
  </React.StrictMode>
);
