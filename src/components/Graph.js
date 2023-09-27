import styled from "styled-components";
import { useEffect, useState } from "react";
import CirCle_Graph from "./Circle_Graph";

const Graph = ({ $isSmall, $isList, graphData }) => {
  const [percentage, setPercentage] = useState(0);
  const voteInfo = graphData?.datasets?.[0] || { data: [0, 0] };

  // StickGraph에 사용하는 퍼센트
  useEffect(() => {
    if (voteInfo?.data) {
      setPercentage(
        (voteInfo.data[0] * 100) / (voteInfo.data[0] + voteInfo.data[1]) || 0,
      );
    }
  }, [voteInfo]);

  return (
    <>
      {$isSmall ? (
        <StickGraph>
          <StickBackground percentage={percentage} />
        </StickGraph>
      ) : (
        <CircleGraph $isList={$isList} graphData={graphData} />
      )}
    </>
  );
};

const CircleGraph = styled(CirCle_Graph)`
  width: ${({ $isList }) => $isList && `80px`};
  height: ${({ $isList }) => $isList && `80px`};
`;
const StickGraph = styled.div`
  width: 90%;
  height: 20px;
  line-height: 20px;
  border-radius: 15px;
  margin: 5px 0;
  background-color: ${({ theme }) => theme.colors.TOPIC_PURPLE2};
  overflow: hidden;
`;
const StickBackground = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.TOPIC_PURPLE1};
  border-right: 2px solid white;
`;

export default Graph;
