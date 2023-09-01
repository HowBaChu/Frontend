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
          <HistoryTopic history={true} />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_2} />
          </Crown>
          <HistoryTopic history={true} />
        </TopicWrapper>
        <TopicWrapper>
          <Crown>
            <CrownIcon src={CROWN_3} />
          </Crown>
          <HistoryTopic history={true} />
        </TopicWrapper>
        <TopicWrapper>
          <HistoryTopic history={true} />
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
  padding-top: 10px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 58px;
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
  width: 60px;
  height: 60px;
  box-shadow: 0 0 2px gray;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: -28px;
  left: -30px;
  background-color: ${({ theme }) => theme.colors.LIGHT_PURPLE};
  text-align: center;
`;
const CrownIcon = styled.img`
  margin-top: 9px;
`;

export default TopicHistoryPage;
