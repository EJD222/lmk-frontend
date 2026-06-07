import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/app.css"; // This will contain all of our custom CSS classes, should take priority over tailwind
import App from "./App";

pendo.initialize({
  visitor: {
    id: ''
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
