import styled from "styled-components";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import { useState } from "react";
import OpinionInput from "../components/OpinionInput";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [isSmall, setIsSmall] = useState(false);

  const handleOpinionScroll = (event) => {
    setIsSmall(event.target.scrollTop > 30);
  };
  const navigate = useNavigate();

  return (
    <MainPageLayout>
      <Topic id="topic" $isSmall={isSmall} />
      <OpinionArea $isSmall={isSmall} onScroll={handleOpinionScroll}>
        <OpinionContainer $isSmall={isSmall}>
          <OpinionBox
            isMine={false}
            isHot={true}
            onClick={() => navigate("/test")}
          />
          <OpinionBox isMine={true} onClick={() => navigate("/test")} />
          <OpinionBox isMine={false} onClick={() => navigate("/test")} />
          <OpinionBox isMine={true} onClick={() => navigate("/test")} />
          <OpinionBox isMine={false} onClick={() => navigate("/test")} />
          <OpinionBox isMine={true} onClick={() => navigate("/test")} />
          <OpinionBox isMine={false} onClick={() => navigate("/test")} />
          <OpinionBox isMine={false} onClick={() => navigate("/test")} />
          <OpinionBox isMine={true} onClick={() => navigate("/test")} />
          <OpinionBox isMine={true} onClick={() => navigate("/test")} />
        </OpinionContainer>
      </OpinionArea>
      <Input />
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  width: 345px;
  height: 690px;
  margin: 90px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const OpinionArea = styled.div`
  width: 100%;
  margin-top: 110px;
  height: 580px;
  padding-top: 130px;
  overflow: scroll;
  position: fixed;
`;
const OpinionContainer = styled.div`
  width: 345px;
  margin: 0 auto 30px auto;
  display: flex;
  flex-direction: column;
`;
const OpinionBox = styled(Opinion)`
  margin-bottom: 20px;
`;
const Input = styled(OpinionInput)`
  position: fixed;
  bottom: 50px;
  background-color: white;
`;

export default MainPage;
