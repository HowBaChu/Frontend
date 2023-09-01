import styled from "styled-components";
import Opinion from "../components/Opinion";
import OpinionInput from "../components/OpinionInput";

const Threadpage = ({ openModal }) => {
  return (
    <ThreadWrapper>
      <ThreadOpinion openModal={openModal} />
      <Hr />
      <OpinionArea>
        <OpinList>
          <ReOpin isMine={true} openModal={openModal} />
          <ReOpin isMine={false} openModal={openModal} />
          <ReOpin isMine={true} openModal={openModal} />
          <ReOpin isMine={true} openModal={openModal} />
          <ReOpin isMine={false} openModal={openModal} />
          <ReOpin isMine={true} openModal={openModal} />
          <ReOpin isMine={true} openModal={openModal} />
          <ReOpin isMine={false} openModal={openModal} />
          <ReOpin isMine={true} openModal={openModal} />
        </OpinList>
      </OpinionArea>
      <Input />
    </ThreadWrapper>
  );
};

const ThreadWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const ThreadOpinion = styled(Opinion)`
  width: 345px;
  position: fixed;
  top: 110px;
`;
const Hr = styled.hr`
  width: 345px;
  margin-top: 110px;
  position: fixed;
`;
const OpinionArea = styled.div`
  width: 345px;
  height: 580px;
  margin-top: 130px;
  overflow: scroll;
  position: fixed;
`;
const OpinList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
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
