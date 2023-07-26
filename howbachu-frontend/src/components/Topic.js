import styled from "styled-components";
import Graph from "./Graph";

const Topic = ({isSmall, className}) => {
    return (
        <TopicWrapper isSmall={isSmall} className={className}>
            <Title isSmall={isSmall} className={className}>탕수육은 부먹 vs 찍먹</Title>
            <Graph isSmall={isSmall} className={className}/>
            <LeftTime>13 : 05 : 14</LeftTime>
        </TopicWrapper>
    );
};

const TopicWrapper = styled.div`
  width: ${({className}) => className ? `275px` : `320px`};
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({className}) => className ? `static` : `fixed`};
  top: 100px;
  background-color: white;
`
const Title = styled.h2`
  padding: ${({isSmall})=>isSmall?`10px`:`5px`};
  font-size: ${({isSmall, className}) => isSmall || className ?`20px`:`25px`};
  font-weight: 600;
`
const LeftTime = styled.div`
  font-weight: 500;
  margin: 5px;
`

export default Topic;