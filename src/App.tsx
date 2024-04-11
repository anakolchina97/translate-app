import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyles";
import theme from "./assets/styles/theme";
import Translates from "./components/Translates";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Translates />
      </ThemeProvider>
    </>
  );
}

export default App;
