import styled from "styled-components";

const BeforeVoteTopic = ({ subTitle, handleVote }) => {
  return (
    <TopicBox>
      <Section $type="A" onClick={() => handleVote("A")}>
        {subTitle?.sub_A}
      </Section>
      <Section $type="B" onClick={() => handleVote("B")}>
        {subTitle?.sub_B}
      </Section>
    </TopicBox>
  );
};

const TopicBox = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
`;
const Section = styled.div`
  width: 50%;
  height: 100%;
  line-height: 100px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme, $type }) =>
    $type === "A" ? theme.colors.PURPLE1 : theme.colors.PURPLE2};
  &:hover {
    cursor: pointer;
  }
`;
export default BeforeVoteTopic;
