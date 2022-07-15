import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components/macro";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
