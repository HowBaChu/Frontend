import styled from "styled-components";
import {useState} from "react";

const Graph = ({isSmall}) => {
    const [percentage, setPercentage] = useState(50);

    const handlePercentageChange = (e) => {
        setPercentage(parseInt(e.target.value));
    };
    return (
        <>
            {/*<input*/}
            {/*    type="range"*/}
            {/*    min="0"*/}
            {/*    max="100"*/}
            {/*    value={percentage}*/}
            {/*    onChange={handlePercentageChange}*/}
            {/*/>*/}

            {isSmall
                ?
                <StickGraph>
                    <GraphBackground percentage={percentage}>
                        {percentage}%
                    </GraphBackground>
                </StickGraph>
                :
                <CircleGraph>
                    <GraphBackground percentage={percentage}>
                        {percentage}%
                    </GraphBackground>
                </CircleGraph>
            }
        </>
    );
};

const CircleGraph = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #b281ff;
  border-radius: 50%;
  text-align: center;
  line-height: 130px;
  margin: 5px;
  overflow: hidden;
`
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
`


export default Graph;