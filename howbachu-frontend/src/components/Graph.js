import styled from "styled-components";
import { useState } from "react";

const Graph = ({ $isSmall, className }) => {
  const [percentage, setPercentage] = useState(50);

  const handlePercentageChange = (e) => {
    setPercentage(parseInt(e.target.value));
  };
  return (
    <>
      {$isSmall ? (
        <StickGraph>
          <GraphBackground percentage={percentage}>
            {percentage}%
          </GraphBackground>
        </StickGraph>
      ) : (
        <CircleGraph className={className}>
          <GraphBackground percentage={percentage}>
            {/*{percentage}%*/}
          </GraphBackground>
        </CircleGraph>
      )}
    </>
  );
};

const CircleGraph = styled.div`
  width: ${({ className }) => (className ? `80px` : `130px`)};
  height: ${({ className }) => (className ? `80px` : `130px`)};
  border: 1px solid #b281ff;
  border-radius: 50%;
  text-align: center;
  line-height: 130px;
  margin: 5px;
  overflow: hidden;
`;
const GraphBackground = styled.div`
  width: ${(props) => `${props.percentage}%`};
  height: 100%;
  background-color: rgba(148, 80, 255, 0.34);
  transition: width 0.5s ease;
`;
const StickGraph = styled.div`
  width: 300px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #b281ff;
  border-radius: 15px;
  margin: 5px 0;
  overflow: hidden;
`;

export default Graph;
