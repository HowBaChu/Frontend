import styled from "styled-components";
import { PostLogIn } from "../api/PostLogIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "../components/AuthInput";

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleEye = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    const loginResponse = await PostLogIn(formData);

    if (loginResponse?.code === "200") {
      navigate("/");
      setIsLoggedIn(true);
    } else {
      alert(loginResponse?.response?.data?.message);
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  return (
    <PageContainer>
      <Title>로그인</Title>
      <Form onSubmit={onSubmit}>
        <AuthInput
          inputId="email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <AuthInput
          inputId="password"
          label="비밀번호"
          type={isOpen ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          toggleEye={toggleEye}
          eyeState={isOpen}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitBtn type="submit">제출</SubmitBtn>
        <GoSignUpBtn type="button" onClick={() => navigate("/join")}>
          회원가입
        </GoSignUpBtn>
      </Form>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px);
  margin: 70px auto 0 auto;
`;
const Title = styled.p`
  margin: 100px 0 30px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const SubmitBtn = styled.button`
  width: 327px;
  height: 48px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.PURPLE2};
  color: white;
`;

const GoSignUpBtn = styled.button`
  align-self: end;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
export default LoginPage;
