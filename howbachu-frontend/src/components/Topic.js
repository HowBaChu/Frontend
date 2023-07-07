import styled from "styled-components";

const Topic = ({isSmall}) => {
    return (
        <TopicWrapper isSmall={isSmall}>
            <Title isSmall={isSmall}>탕수육은 부먹 vs 찍먹</Title>
            {isSmall
              ? <StickGraph>그래프</StickGraph>
              : <CircleGraph>그래프</CircleGraph>
            }
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
  position: ${(props)=>props.isSmall &&`fixed`};
  background-color: white;
`
const Title = styled.h2`
  padding: ${(props)=>props.isSmall?`10px`:`5px`};
  font-size: ${(props)=>props.isSmall?`20px`:`25px`};
  font-weight: 600;
`
const CircleGraph = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid deeppink;
  background-color: rgba(255, 115, 191, 0.4);
  border-radius: 50%;
  text-align: center;
  line-height: 130px;
  margin: 5px;
`
const StickGraph = styled.div`
  width: 300px;
  height: 20px;
  line-height: 20px;
  border: 1px solid deeppink;
  background-color: rgba(255, 115, 191, 0.4);
  border-radius: 15px;
  margin: 5px 0;
`
const LeftTime = styled.div`
  font-weight: 500;
  margin: 5px;
`

export default Topic;