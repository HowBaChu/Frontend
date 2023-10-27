import styled from 'styled-components';
import { useState } from 'react';
import AuthInput from "../components/AuthInput";

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState({
    password: false,
    checkPwd: false,
  });
  const toggleEye = (fieldName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledSignUpForm onSubmit={(e) => onSubmit(e)}>
      <AuthInput
        inputId="name"
        label="이름"
        placeholder="이름을 입력하세요."
        type="text"
      />
      <AuthInput
        inputId="email"
        label="이메일"
        placeholder="이메일을 입력하세요."
        type="email"
      />
      <AuthInput
        inputId="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        type={isOpen.password ? 'text' : 'password'}
        toggleEye={() => toggleEye('password')}
        eyeState={isOpen.password}
      />
      <AuthInput
        inputId="checkPwd"
        label="비밀번호 재입력"
        placeholder="비밀번호를 재입력하세요"
        type={isOpen.checkPwd ? 'text' : 'password'}
        toggleEye={() => toggleEye('checkPwd')}
        eyeState={isOpen.checkPwd}
      />
      <SubmitBtn type="submit">회원가입</SubmitBtn>
    </StyledSignUpForm>
  );
};

const StyledSignUpForm = styled.form`
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
export default SignUpForm;