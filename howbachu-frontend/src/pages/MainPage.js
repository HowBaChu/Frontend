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
            <Topic id="topic" isSmall={isSmall}/>
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
            <ColorNav className="yellow"/>
            <a href="https://www.flaticon.com" title="아이콘">아이콘 flaticon</a>
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
const OpinionContainer = styled.div`
  width: 320px;
  margin-top: 230px;
  border: 1px solid #0087ff;
`
const OpinionBox = styled(Opinion)`
  &.Opin {
    margin-bottom: 20px;
  }
`
const ColorNav = styled(NavBar)`
  &.yellow {
    background-color: rgb(209, 180, 255);
    position: fixed;
    bottom: 0;
  }
`

export default MainPage;