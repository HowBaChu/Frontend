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
import Threadpage from "./pages/Threadpage";
import CurPwdCheckPage from "./pages/CurPwdCheckPage";
import NavBar from "./components/NavBar";
import ReportModal from "./components/ReportModal";
import DeleteModal from "./components/DeleteModal";
import SignUpForm from "./pages/SignupPage";
import { GetOpin } from "./api/GetOpin";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [isDelModal, setIsDelModal] = useState(false);
  const [curopinId, setCuropinId] = useState(undefined);
  const [opinList, setOpinList] = useState([]); // GetOpin response
  const [isDelete, setIsDelete] = useState(false);

  const reloadOpinList = async () => {
    await GetOpin((newOpinListData) => {
      setOpinList(newOpinListData);
    });
  };
  const toggleReportModal = () => {
    setIsModal((prevState) => !prevState);
  };
  const toggleDeleteModal = () => {
    setIsDelModal((prevState) => !prevState);
  };
  const handleDeleteState = (state) => {
    setIsDelete(state);
  };

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {isModal && (
          <ReportModal
            toggleReportModal={toggleReportModal}
            opinId={curopinId}
          />
        )}
        {isDelModal && (
          <DeleteModal
            handleDeleteState={handleDeleteState}
            reloadOpinList={reloadOpinList}
            toggleDeleteModal={toggleDeleteModal}
            opinId={curopinId}
          />
        )}
        <BrowserRouter>
          <Logo />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage
                  setCuropinId={(curId) => setCuropinId(curId)}
                  toggleReportModal={toggleReportModal}
                  toggleDeleteModal={toggleDeleteModal}
                  reloadOpinList={reloadOpinList}
                  opinList={opinList} // 상태를 props로 전달
                  setOpinList={setOpinList}
                />
              }
            />
            <Route
              path="/:opinId"
              element={
                <Threadpage
                  isDelete={isDelete}
                  handleDeleteState={handleDeleteState}
                  setCuropinId={(curId) => setCuropinId(curId)}
                  toggleReportModal={toggleReportModal}
                  toggleDeleteModal={toggleDeleteModal}
                />
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<MyPage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/profile/pwdcheck" element={<CurPwdCheckPage />} />
            <Route
              path="/my-opinions"
              element={
                <MyOpinionPage
                  isDelete={isDelete}
                  handleDeleteState={handleDeleteState}
                  toggleDeleteModal={toggleDeleteModal}
                  setCuropinId={(curId) => setCuropinId(curId)}
                />
              }
            />
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
