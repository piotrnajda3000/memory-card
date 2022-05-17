import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import unshuffledCards from "./whereCanIPlaceCard";

import { ThemeProvider } from "styled-components";
import Theme from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App unshuffledCards={unshuffledCards} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
