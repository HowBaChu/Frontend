import styled from "styled-components";
import Opinion from "../components/Opinion";

const Threadpage = () => {
  return (
    <ThreadWrapper>
      <ThreadOpinion />
      <hr />
      <OpinList>
        <ReOpin />
        <ReOpin />
        <ReOpin />
      </OpinList>
    </ThreadWrapper>
  );
};

const ThreadWrapper = styled.div`
  width: 345px;
  height: 690px;
  border: 1px solid tomato;
`;
const ThreadOpinion = styled(Opinion)``;

const OpinList = styled.div``;

const ReOpin = styled(Opinion)``;
export default Threadpage;
