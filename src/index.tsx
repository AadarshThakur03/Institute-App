import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Set the document title
document.title = "Academy Exam";

// Create a root and render the application
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
