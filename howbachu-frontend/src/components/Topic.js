import styled from "styled-components";
import Graph from "./Graph";

const Topic = ({ $isSmall, history, ...attrProps }) => {
  return (
    <TopicWrapper $isSmall={$isSmall} $history={history} {...attrProps}>
      <Title $isSmall={$isSmall} $history={history} {...attrProps}>
        탕수육은 부먹 vs 찍먹
      </Title>
      <Graph $isSmall={$isSmall} {...attrProps} />
      <LeftTime>13 : 05 : 14</LeftTime>
    </TopicWrapper>
  );
};

const TopicWrapper = styled.div`
  width: ${({ $history }) => ($history ? `275px` : `345px`)};
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ $history }) => ($history ? `static` : `fixed`)};
  top: 100px;
  background-color: white;
`;
const Title = styled.h2`
  padding: ${({ $isSmall }) => ($isSmall ? `10px` : `5px`)};
  font-size: ${({ $isSmall, $history }) =>
    $isSmall || $history ? `20px` : `25px`};
  font-weight: 600;
`;
const LeftTime = styled.div`
  font-weight: 500;
  margin: 5px;
`;

export default Topic;
