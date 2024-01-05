import styled from "styled-components";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import BeforeVoteTopic from "./BeforeVoteTopic";
import time_icon from "../assets/imgs/hourglass_icon.svg";
import date_icon from "../assets/imgs/date.svg";

const Topic = ({
  isVoted,
  handleVote,
  isSmall,
  history,
  isList,
  topicData,
  ...attrProps
}) => {
  const { subTitle, title, votingStatus } = topicData || {};
  const [currentTime, setCurrentTime] = useState(new Date());

  /* chart.js에 들어가는 data */
  const [graphData, setGraphData] = useState({
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["rgb(196,168,255)", "rgb(173,90,255)"],
      },
    ],
    labels: ["", ""],
  });

  // Topic data
  useEffect(() => {
    if (topicData && subTitle && votingStatus) {
      setGraphData({
        ...graphData,
        datasets: [
          {
            ...(graphData?.datasets?.[0] || {}), // 모든 프로퍼티를 유지하면서 data 프로퍼티만 새로운 값으로 설정
            data: [votingStatus.a, votingStatus.b],
          },
        ],
        labels: [subTitle.sub_A, subTitle.sub_B],
      });
    }
  }, [topicData]);

  // 남은 시간 표시
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const getRemainingTime = () => {
    const now = currentTime;
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0);

    const difference = endOfDay - now;
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <TopicWrapper $isSmall={isSmall} $history={history} {...attrProps}>
      <Title
        $isVoted={isVoted}
        $isSmall={isSmall}
        $history={history}
        {...attrProps}
      >
        {title}
      </Title>
      {isVoted ? (
        <Graph
          $isSmall={isSmall}
          $isList={isList}
          graphData={graphData}
          {...attrProps}
        />
      ) : (
        <BeforeVoteTopic subTitle={subTitle} handleVote={handleVote} />
      )}
      <LeftTime>
        <TimeIcon src={history ? date_icon : time_icon} />
        <TimeTxt>
          {history ? topicData?.date.join("-") : getRemainingTime()}
        </TimeTxt>
      </LeftTime>
    </TopicWrapper>
  );
};

const TopicWrapper = styled.div`
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ $history }) => ($history ? `static` : `fixed`)};
  top: 70px;
  background-color: white;
`;
const Title = styled.h2`
  padding: ${({ $isVoted, $history, $isSmall }) => {
    if ($history) {
      return `25px 15px 10px`;
    } else {
      return $isVoted && $isSmall ? `10px` : `5px`;
    }
  }};
  font-size: ${({ $isVoted, $isSmall, $history, theme }) =>
    ($isVoted && $isSmall) || $history
      ? theme.fontsize.S_TOPIC_TITLE
      : theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  text-align: center;
`;
const LeftTime = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin: 5px 10px 5px 0;
`;
const TimeIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px;
`;
const TimeTxt = styled.p`
  margin-top: 3px;
  height: 15px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;

export default Topic;
