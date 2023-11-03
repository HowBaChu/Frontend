import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Logo from "./components/Logo";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import ProfileEditPage from "./pages/ProfileEditPage";
import MyOpinionPage from "./pages/MyOpinionPage";
import TopicHistoryPage from "./pages/TopicHistoryPage";
import ReportPage from "./pages/ReportPage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import Threadpage from "./pages/Threadpage";
import ReportModal from "./components/ReportModal";
import CurPwdCheckPage from "./pages/CurPwdCheckPage";
import SignUpForm from "./pages/SignupPage";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [curopinId, setCuropinId] = useState(0);
  const handleModalOpen = () => {
    setIsModal(true);
  };
  const handleModalClose = () => {
    setIsModal(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {isModal && (
          <ReportModal closeModal={handleModalClose} opinId={curopinId} />
        )}
        <BrowserRouter>
          <Logo />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  openModal={handleModalOpen}
                  setCuropinId={(curId) => setCuropinId(curId)}
                />
              }
            />
            <Route
              path="/:opinId"
              element={
                <Threadpage
                  openModal={handleModalOpen}
                  setCuropinId={(curId) => setCuropinId(curId)}
                />
              }
            />
            <Route path="/serch" element={<SearchPage />} />
            <Route path="/profile" element={<MyPage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/profile/pwdcheck" element={<CurPwdCheckPage />} />
            <Route path="/my-opinions" element={<MyOpinionPage />} />
            <Route path="/popular-posts" element={<TopicHistoryPage />} />
            <Route path="/reports" element={<ReportPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<SignUpForm />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
