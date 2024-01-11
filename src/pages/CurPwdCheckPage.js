import styled from "styled-components";
import CurPwd from "../components/CurPwd";

const CurPwdCheckPage = ({ setIsCheckedPwd }) => {
  return (
    <PageWrapper>
      <CurPwd setIsCheckedPwd={setIsCheckedPwd} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
  padding-top: 20vh;
`;

export default CurPwdCheckPage;
