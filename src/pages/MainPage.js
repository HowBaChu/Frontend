import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetOpin } from "../api/GetOpin";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import OpinionInput from "../components/OpinionInput";

const MainPage = ({ openModal }) => {
  const [isSmall, setIsSmall] = useState(false);

  const handleOpinionScroll = (event) => {
    setIsSmall(event.target.scrollTop > 30);
  };
  const navigate = useNavigate();

  useEffect(() => {
    GetOpin();
  }, []);

  return (
    <MainPageLayout>
      <TopicBox id="topic" isSmall={isSmall} />
      <OpinionArea $isSmall={isSmall} onScroll={handleOpinionScroll}>
        <OpinionContainer $isSmall={isSmall}>
          <OpinionBox
            isMine={false}
            isHot={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕수육 맛있겠다"
          />
          <OpinionBox
            isMine={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕수육 맛있겠다"
          />
          <OpinionBox
            isMine={false}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕"
          />
          <OpinionBox
            isMine={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
          />
          <OpinionBox
            isMine={false}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕 수 육 맛 있 겠 다 !!!!!!!! ! ! ! !! !  !"
          />
          <OpinionBox
            isMine={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕 수 육"
          />
          <OpinionBox
            isMine={false}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="나는 찍어먹는게 좋아 !!~!~!!!!!!!!!!!!~!~~~~~~~~~~~~~~~~~~~~~"
          />
          <OpinionBox
            isMine={false}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="부어서 먹기"
          />
          <OpinionBox
            isMine={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕수육 맛있겠다"
          />
          <OpinionBox
            isMine={true}
            onClick={() => navigate("/test")}
            openModal={openModal}
            content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
          />
        </OpinionContainer>
      </OpinionArea>
      <Input />
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav
  margin: 70px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const OpinionArea = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 100px 0 15px;
  height: 100%;
  overflow: scroll;
`;
const OpinionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TopicBox = styled(Topic)`
  width: calc(100vw - 44px);
`;
const OpinionBox = styled(Opinion)`
  cursor: pointer;
`;
const Input = styled(OpinionInput)`
  position: fixed;
  bottom: 50px;
  background-color: white;
`;

export default MainPage;
