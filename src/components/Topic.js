import styled from "styled-components";
import { useEffect, useState } from "react";
import Graph from "./Graph";
import { GetTopic } from "../api/GetTopic";
import time_icon from "../assets/imgs/hourglass_icon.svg";

const Topic = ({ isSmall, history, isList, ...attrProps }) => {
  const [topicData, setTopicData] = useState({}); // GetTopic response
  const [graphData, setGraphData] = useState({
    datasets: [
      {
        data: [1, 2],
        backgroundColor: ["rgb(196,168,255)", "rgb(173,90,255)"],
      },
    ],
    labels: ["", ""],
  });

  const { data, id, subTitle, title, votingStatus } = topicData || {};

  useEffect(() => {
    GetTopic((data) => {
      if (data && data?.subTitle && data?.votingStatus) {
        setTopicData(data);

        setGraphData({
          ...graphData,
          datasets: [
            {
              ...(graphData?.datasets?.[0] || {}), // 모든 프로퍼티를 유지하면서 data 프로퍼티만 새로운 값으로 설정
              data: [data.votingStatus.a, data.votingStatus.b],
            },
          ],
          labels: [data.subTitle.sub_A, data.subTitle.sub_B],
        });
      }
    });
  }, [data]);

  useEffect(() => {
    console.log(graphData);
  }, [data]);

  return (
    <TopicWrapper $isSmall={isSmall} $history={history} {...attrProps}>
      <Title $isSmall={isSmall} $history={history} {...attrProps}>
        {title}
      </Title>
      {graphData && (
        <Graph
          $isSmall={isSmall}
          $isList={isList}
          graphData={graphData}
          {...attrProps}
        />
      )}
      <LeftTime>
        <TimeIcon src={time_icon} />
        <TimeTxt>13 : 05 : 14</TimeTxt>
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
  padding: ${({ $history, $isSmall }) => {
    if ($history) {
      return `25px 0 10px 0`;
    } else {
      return $isSmall ? `10px` : `5px`;
    }
  }};
  font-size: ${({ $isSmall, $history, theme }) =>
    $isSmall || $history
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
