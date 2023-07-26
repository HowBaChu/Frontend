import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import {Theme} from "./styles/Theme";
import styled, {ThemeProvider} from "styled-components";
import TextLogo from "./components/TextLogo";

import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import LikePage from "./pages/LikePage";
import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import MyOpinionPage from "./pages/MyOpinionPage";
import TopicHistoryPage from "./pages/TopicHistoryPage";
import ReportPage from "./pages/ReportPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <BrowserRouter>
                    <TextLogo/>
                    <RouteArea>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/serch" element={<SearchPage/>}/>
                            <Route path="/likes" element={<LikePage/>}/>
                            <Route path="/profile" element={<MyPage/>}/>
                            <Route path="/profile/edit" element={<ProfileEditPage/>}/>
                            <Route path="/my-opinions" element={<MyOpinionPage/>}/>
                            <Route path="/popular-posts" element={<TopicHistoryPage/>}/>
                            <Route path="/reports" element={<ReportPage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </RouteArea>
                    <NavBar />
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

const RouteArea = styled.div`
    width: 320px;
    height: 690px;
    margin: 100px auto 0 auto;
`

export default App;