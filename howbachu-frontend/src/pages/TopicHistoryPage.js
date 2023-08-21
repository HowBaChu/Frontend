import Topic from "../components/Topic";
import styled from "styled-components";
import CROWN_ICON from "../assets/imgs/crown-purple_icon.png";

const TopicHistoryPage = () => {
  return (
    <PageWrapper>
      <HistoryList>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_ICON} />
          </Crown>
          <HistoryTopic className="history" />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_ICON} />
          </Crown>
          <HistoryTopic className="history" />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_ICON} />
          </Crown>
          <HistoryTopic className="history" />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_ICON} />
          </Crown>
          <HistoryTopic className="history" />
        </TopicWrapper>
      </HistoryList>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const HistoryList = styled.div`
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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
`;
const HistoryTopic = styled(Topic)``;
const Crown = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid gray;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: -20px;
  left: -22px;
  background-color: ${({ theme }) => theme.colors.LIGHT_PURPLE};
  text-align: center;
`;
const CrownIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 7px;
`;

export default TopicHistoryPage;
