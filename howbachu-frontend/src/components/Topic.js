import styled from "styled-components";
import Graph from "./Graph";

//todo 남은 시간 Timestamp

const Topic = ({isSmall}) => {
    return (
        <TopicWrapper isSmall={isSmall}>
            <Title isSmall={isSmall}>탕수육은 부먹 vs 찍먹</Title>
            <Graph isSmall={isSmall}/>
            <LeftTime>13 : 05 : 14</LeftTime>
        </TopicWrapper>
    );
};

const TopicWrapper = styled.div`
  width: 320px;
  border: 1px solid #252525;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 100px;
  background-color: white;
`
const Title = styled.h2`
  padding: ${(props)=>props.isSmall?`10px`:`5px`};
  font-size: ${(props)=>props.isSmall?`20px`:`25px`};
  font-weight: 600;
`
const LeftTime = styled.div`
  font-weight: 500;
  margin: 5px;
`

export default Topic;