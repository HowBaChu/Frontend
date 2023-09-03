import styled from "styled-components";
import Topic from "../components/Topic";
import CROWN_1 from "../assets/imgs/crown_1.svg";
import CROWN_2 from "../assets/imgs/crown_2.svg";
import CROWN_3 from "../assets/imgs/crown_3.svg";

const TopicHistoryPage = () => {
  return (
    <PageWrapper>
      <HistoryList>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_1} />
          </Crown>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_2} />
          </Crown>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_3} />
          </Crown>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
        <TopicWrapper>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
        <TopicWrapper>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
        <TopicWrapper>
          <HistoryTopic history={true} isList={true} />
        </TopicWrapper>
      </HistoryList>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
  overflow: scroll;
`;
const HistoryList = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  overflow: scroll;

  & > :first-child {
    margin-top: 20px;
  }
  & > :last-child {
    margin-bottom: 5px;
  }
`;
const TopicWrapper = styled.div`
  position: relative;
  width: 80%;
`;
const HistoryTopic = styled(Topic)`
  width: 100%;
`;
const Crown = styled.div`
  width: 45px;
  height: 45px;
  box-shadow: 0 0 2px gray;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: -18px;
  left: -20px;
  background-color: ${({ theme }) => theme.colors.LIGHT_PURPLE};
  text-align: center;
`;
const CrownIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 9px;
`;

export default TopicHistoryPage;
