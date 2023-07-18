import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import {Theme} from "./styles/Theme";
import {ThemeProvider} from "styled-components";
import TextLogo from "./components/TextLogo";

import MainPage from "./pages/MainPage";
import SerchPage from "./pages/SerchPage";
import LikePage from "./pages/LikePage";
import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import MyOpinionPage from "./pages/MyOpinionPage";
import TopicHistoryPage from "./pages/TopicHistoryPage";
import ReportPage from "./pages/ReportPage";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <TextLogo/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/serch" element={<SerchPage/>}/>
                        <Route path="/likes" element={<LikePage/>}/>
                        <Route path="/profile" element={<MyPage/>}/>
                        <Route path="/profile/edit" element={<ProfileEditPage/>}/>
                        <Route path="/my-opinions" element={<MyOpinionPage/>}/>
                        <Route path="/popular-posts" element={<TopicHistoryPage/>}/>
                        <Route path="/reports" element={<ReportPage/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;