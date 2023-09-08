import styled from "styled-components";

const LoginPage = () => {
    return (
        <PageWrapper>
            이 밖으로 나가지 않게 해주세요
            <LoginFormContainer>
                눈에 보이는 모든 요소 감싸는 div
            </LoginFormContainer>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  /*height은 테두리 그리려고 임의로 작성했어요 345px만 바꾸지 말아주세요*/
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
  border: 2px solid #ff8f8f;
`
const LoginFormContainer = styled.div`
  border: 1px solid #98b3ff;
  height: 500px;
`
export default LoginPage;