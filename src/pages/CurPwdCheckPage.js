import styled from "styled-components";
import CurPwd from "../components/CurPwd";

const CurPwdCheckPage = () => {
  return (
    <PageWrapper>
      <CurPwd />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;

export default CurPwdCheckPage;
