import styled from "styled-components";
import { PostLogIn } from "../api/PostLogIn";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    PostLogIn(formData);
  };

  return (
    <PageContainer>
      로그인 폼
      <Form onSubmit={onSubmit}>
        <Input
          placeHolder="이메일"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        ></Input>
        <Input
          placeHolder="비밀번호"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></Input>
        <SubmitBtn type="submit">제출</SubmitBtn>
      </Form>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px);
  margin: 70px auto 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
const Input = styled.input`
  width: 100%;
`;
const SubmitBtn = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 8px;
  color: white;
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: #b08bff;
`;

export default LoginPage;
