import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "normalize.css";
import "./styles/index.css";

import cards from "./data/cards";
import { score, isWon } from "./data/gameInfo";

const data = {
  cards,
  score,
  isWon,
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
