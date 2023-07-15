import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";
import TextLogo from "./components/TextLogo";
import {ThemeProvider} from "styled-components";
import {Theme} from "./styles/Theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <TextLogo/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;