import styled from "styled-components";
import { useEffect, useState } from "react";
import CirCle_Graph from "./Circle_Graph";
import graph_data from "../assets/data/graph_data";

const Graph = ({ $isSmall }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const data = graph_data?.datasets[0];
    setPercentage((data.data[0] * 100) / (data.data[0] + data.data[1]) || 0);
  }, [percentage]);

  return (
    <>
      {$isSmall ? (
        <StickGraph>
          <StickBackground percentage={percentage}>
            {/*{parseInt(percentage)}*/}
          </StickBackground>
        </StickGraph>
      ) : (
        <CircleGraph />
      )}
    </>
  );
};

const CircleGraph = styled(CirCle_Graph)`
  width: 130px;
  height: 130px;
`;
const StickGraph = styled.div`
  width: 300px;
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
