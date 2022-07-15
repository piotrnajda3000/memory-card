import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import theme from "./styles/theme";

import Cards from "./components/Cards";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Cards />
      </>
    </ThemeProvider>
  );
}

export default App;
