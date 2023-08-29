import styled from "styled-components";
import Opinion from "../components/Opinion";

const Threadpage = ({ openModal }) => {

  return (
    <ThreadWrapper>
      <ThreadOpinion openModal={openModal} />
      <Hr />
      <OpinList>
        <ReOpin isMine={true} openModal={openModal} />
        <ReOpin isMine={false} openModal={openModal} />
        <ReOpin isMine={true} openModal={openModal} />
      </OpinList>
    </ThreadWrapper>
  );
};

const ThreadWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const ThreadOpinion = styled(Opinion)`
  width: 100%;
`;
const Hr = styled.hr`
  margin: 20px 0;
`;
const OpinList = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReOpin = styled(Opinion)`
  margin-bottom: 20px;
`;

export default Threadpage;
