import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "normalize.css";
import "./styles/index.css";

import unshuffledCards from "./data/unshuffledCards";

ReactDOM.render(
  <React.StrictMode>
    <App unshuffledCards={unshuffledCards} />
  </React.StrictMode>,
  document.getElementById("root")
);
