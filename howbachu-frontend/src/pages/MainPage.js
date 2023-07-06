import styled from "styled-components";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import NavBar from "../components/NavBar";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <TopicContainer>
                    <Topic/>
                </TopicContainer>
                <OpinionWrapper>
                    <Opinion/>
                    <Opinion/>
                    <Opinion/>
                </OpinionWrapper>
            </Wrapper>
            <NavBar/>
        </>
    );
};


const Wrapper = styled.div`
  border: 1px solid #ff7272;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`
const TopicContainer = styled.div`
  border: 1px solid #fff288;
`
const OpinionWrapper = styled.div`
  width: 320px;
  border: 1px solid #97ff97;
`

export default MainPage;