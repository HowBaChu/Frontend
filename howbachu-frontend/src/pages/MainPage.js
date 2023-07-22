import styled from "styled-components";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import {useState} from "react";
import OpinionInput from "../components/OpinionInput";

const MainPage = () => {
    const [isSmall, setIsSmall] = useState(false);

    const handleOpinionScroll = (event) => {
        setIsSmall(event.target.scrollTop > 30);
    };

    return (
        <MainPageLayout>
            <Topic id="topic" isSmall={isSmall}/>
            <OpinionArea isSmall={isSmall} onScroll={handleOpinionScroll}>
                <OpinionContainer isSmall={isSmall}>
                    <OpinionBox className="Opin" isMine={false} isHot={true} hotColor={true}/>
                    <OpinionBox className="Opin" isMine={true} isHot={true}/>
                    <OpinionBox className="Opin" isMine={false} isHot={true}/>
                    <OpinionBox className="Opin" isMine={true}/>
                    <OpinionBox className="Opin" isMine={false}/>
                    <OpinionBox className="Opin" isMine={true}/>
                    <OpinionBox className="Opin" isMine={false}/>
                    <OpinionBox className="Opin" isMine={false}/>
                    <OpinionBox className="Opin" isMine={true}/>
                    <OpinionBox className="Opin" isMine={true}/>
                </OpinionContainer>
            </OpinionArea>
            <Input className="input"/>
        </MainPageLayout>
    );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({theme}) => theme.colors.BG_PURPLE};
`
const OpinionArea = styled.div`
  width: 100%;
  margin-top: 110px;
  height: 580px;
  padding-top: 130px;
  overflow: scroll;
  position: fixed;
`
const OpinionContainer = styled.div`
  width: 320px;
  margin: 0 auto 30px auto;
  display: flex;
  flex-direction: column;
`
const OpinionBox = styled(Opinion)`
  &.Opin {
    margin-bottom: 20px;
  }
`
const Input = styled(OpinionInput)`
  &.input {
    position: fixed;
    bottom: 50px;
    background-color: white;
  }
`

export default MainPage;