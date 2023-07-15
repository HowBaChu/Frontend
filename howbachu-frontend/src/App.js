import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import TextLogo from "./components/TextLogo";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TextLogo />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;