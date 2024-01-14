import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import BACK_BTN_ICON from "../assets/imgs/back_icon.svg";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <GoLogInBtn onClick={() => navigate("/login")}>
        <Img src={BACK_BTN_ICON} />
      </GoLogInBtn>
      <Title>회원 정보를 입력해주세요</Title>
      <SignUpForm />
    </PageWrapper>
  );
};
const PageWrapper = styled.div`
  width: 393px;
  height: 852px;
  padding: 20px;
`;
const GoLogInBtn = styled.button`
  margin-top: 50px;
  width: 30px;
  height: 30px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const Title = styled.p`
  margin: 30px 0 50px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;

export default SignUpPage;
