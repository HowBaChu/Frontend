import styled from "styled-components";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";

const MainPage = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        // 스크롤 이벤트 처리
        const handleScroll = () => {
            setIsSmall((window.scrollY || document.documentElement.scrollTop) > 30)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <MainPageLayout>
            <Wrapper>
                <TopicContainer>
                    <Topic id="topic" isSmall={isSmall}/>
                </TopicContainer>
                <OpinionWrapper isSmall={isSmall}>
                <OpinionContainer isSmall={isSmall}>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                    <OpinionBox className="Opin"/>
                </OpinionContainer>
                </OpinionWrapper>
            </Wrapper>
            <ColorNav className="yellow"/>
        </MainPageLayout>
    );
};

const MainPageLayout = styled.div`
  padding: 100px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Wrapper = styled.div`
`
const TopicContainer = styled.div`
`
const OpinionWrapper = styled.div`
  width: 320px;
  margin-top: ${(props)=>props.isSmall &&`200px`};
  border: 1px solid #7605d3;
`
const OpinionContainer = styled.div`
  width: 320px;
  overflow: hidden;
  margin-top: 30px;
`
const OpinionBox = styled(Opinion)`
  &.Opin {
    margin-bottom: 20px;
  }
`
const ColorNav = styled(NavBar)`
  &.yellow {
    background-color: #bdddff;
    position: fixed;
    bottom: 0;
  }
`

export default MainPage;