import styled from "styled-components";
import Opinion from "../components/Opinion";
import OpinionInput from "../components/OpinionInput";

const Threadpage = ({ openModal }) => {
  return (
    <ThreadWrapper>
      <ThreadOpinion openModal={openModal} content="오늘 날씨가 정말 좋네요!" />
      <Hr />
      <OpinionArea>
        <OpinList>
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="오늘 날씨가 정말 좋네요!"
          />
          <ReOpin
            isMine={false}
            openModal={openModal}
            content="안녕하세요! 반갑습니다."
          />
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="이번 주말 계획이 있나요?"
          />
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="저는 새로운 책을 읽고 있어요."
          />
          <ReOpin
            isMine={false}
            openModal={openModal}
            content="커피 좋아하세요?"
          />
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="영화 보러 가고 싶어요."
          />
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="요즘 어떻게 지내세요?"
          />
          <ReOpin
            isMine={false}
            openModal={openModal}
            content="맛있는 음식 먹었어요!"
          />
          <ReOpin
            isMine={true}
            openModal={openModal}
            content="여행 가고 싶어요."
          />
        </OpinList>
      </OpinionArea>
      <Input />
    </ThreadWrapper>
  );
};

const ThreadWrapper = styled.div`
  //width: 345px;
  //height: 690px;
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav

  margin: 70px auto 0 auto;
`;
const ThreadOpinion = styled(Opinion)`
  width: calc(100vw - 44px);
  position: fixed;
  top: 80px;
`;
const Hr = styled.hr`
  width: calc(100vw - 44px);
  margin-top: 90px;
  position: fixed;
`;
const OpinionArea = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav
  margin-top: 100px;
  overflow: scroll;
  position: fixed;
`;
const OpinList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;
const ReOpin = styled(Opinion)`
  margin-bottom: 20px;
`;
const Input = styled(OpinionInput)`
  position: fixed;
  left: 0;
  bottom: 50px;
  background-color: white;
`;

export default Threadpage;
