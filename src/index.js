import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./routes/App";
import { BrowserRouter } from "react-router-dom";

//Michael clientID
const googleClientID =
  "637525338059-h227sm74agci61muh4q9nc4ivd6qap3f.apps.googleusercontent.com";
//Jason
// const googleClientID = "1079284959593-fdurd06jgq10ek0ffh616i753kup4rb5.apps.googleusercontent.com";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
