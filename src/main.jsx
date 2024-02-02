import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/remixicon/fonts/remixicon.css";
import "../node_modules/jquery/dist/jquery.js"
import "../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"
import "../node_modules/owl.carousel/dist/owl.carousel.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
