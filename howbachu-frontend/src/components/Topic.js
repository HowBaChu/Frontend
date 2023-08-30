import styled from "styled-components";
import Graph from "./Graph";
import time_icon from "../assets/imgs/hourglass_icon.svg";

const Topic = ({ $isSmall, history, ...attrProps }) => {
  return (
    <TopicWrapper $isSmall={$isSmall} $history={history} {...attrProps}>
      <Title $isSmall={$isSmall} $history={history} {...attrProps}>
        탕수육은 부먹이다? 찍먹이다?
      </Title>
      <Graph $isSmall={$isSmall} {...attrProps} />
      <LeftTime>
        <TimeIcon src={time_icon} />
        <TimeTxt>13 : 05 : 14</TimeTxt>
      </LeftTime>
    </TopicWrapper>
  );
};

const TopicWrapper = styled.div`
  width: ${({ $history }) => ($history ? `275px` : `345px`)};
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ $history }) => ($history ? `static` : `fixed`)};
  top: 100px;
  background-color: white;
`;
const Title = styled.h2`
  padding: ${({ $history, $isSmall }) => {
    if ($history) {
      return `25px 0 10px 0`;
    } else {
      return $isSmall ? `10px` : `5px`;
    }
  }};
  font-size: ${({ $isSmall, theme }) =>
    $isSmall ? theme.fontsize.S_TOPIC_TITLE : theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const LeftTime = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin: 5px 10px 5px 0;
`;
const TimeIcon = styled.img`
  width: 23px;
  height: 23px;
`;
const TimeTxt = styled.p`
  margin-top: 3px;
  height: 15px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;

export default Topic;
