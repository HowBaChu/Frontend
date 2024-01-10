import styled from "styled-components";
import { useEffect, useState } from "react";
import AuthInput from "../components/AuthInput";
import { PostSignUp } from "../api/PostSignUp";
import { useNavigate } from "react-router-dom";
import { sign } from "chart.js/helpers";

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState({
    password: false,
    checkPwd: false,
  });
  const [formData, setFormData] = useState({
    email: "",
    mbti: "",
    password: "",
    statusMessage: "",
    username: "",
  });

  const toggleEye = (fieldName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      mbti: formData.mbti,
      password: formData.password,
      statusMessage: formData.statusMessage,
      username: formData.username,
    };
    const signupResponse = await PostSignUp(data);

    if (signupResponse?.code === "201") {
      navigate("/login");
    } else {
      alert(signupResponse?.response?.data?.message);
      setFormData({ ...formData, email: "" });
      setFormData({ ...formData, mbti: "" });
      setFormData({ ...formData, password: "" });
      setFormData({ ...formData, username: "" });
    }
  };

  return (
    <StyledSignUpForm onSubmit={(e) => onSubmit(e)}>
      <AuthInput
        inputId="email"
        label="이메일"
        placeholder="이메일을 입력하세요."
        type="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <AuthInput
        inputId="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        type={isOpen.password ? "text" : "password"}
        toggleEye={() => toggleEye("password")}
        eyeState={isOpen.password}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <AuthInput
        inputId="checkPwd"
        label="비밀번호 재입력"
        placeholder="비밀번호를 재입력하세요"
        type={isOpen.checkPwd ? "text" : "password"}
        toggleEye={() => toggleEye("checkPwd")}
        eyeState={isOpen.checkPwd}
      />
      <AuthInput
        inputId="username"
        label="이름"
        placeholder="이름을 입력하세요."
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <AuthInput
        inputId="mbti"
        label="MBTI"
        placeholder="MBTI를 입력하세요."
        type="text"
        value={formData.mbti}
        onChange={(e) => setFormData({ ...formData, mbti: e.target.value })}
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
