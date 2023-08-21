import styled from "styled-components";
import CirCle_Graph from "./Circle_Graph";
import graph_data from "../assets/data/graph_data";
import { useEffect, useState } from "react";

const Graph = ({ isSmall }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const data = graph_data?.datasets[0];
    setPercentage((data.data[0] * 100) / (data.data[0] + data.data[1]) || 0);
  }, [percentage]);

  return (
    <>
      {isSmall ? (
        <StickGraph>
          <StickBackground $percentage={percentage}>
            {/*{parseInt(percentage)}%*/}
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
const StickBackground = styled.div`
  width: ${(props) => `${props.$percentage}%`};
  height: 100%;
  background-color: rgb(196, 168, 255);
  transition: width 0.5s ease;
`;
const StickGraph = styled.div`
  width: 300px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #b281ff;
  border-radius: 15px;
  margin: 5px 0;
  background-color: rgb(173, 90, 255);
  overflow: hidden;
`;

export default Graph;
