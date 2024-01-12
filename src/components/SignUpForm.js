import styled from "styled-components";
import { useState } from "react";
import { PostSignUp } from "../api/PostSignUp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup_schema } from "../validation/Schema";
import AuthInput from "../components/AuthInput";

const SignUpForm = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signup_schema),
    mode: "onChange",
  });
  const value = watch();

  const [isOpen, setIsOpen] = useState({
    password: false,
    checkPwd: false,
  });

  const navigate = useNavigate();

  const toggleEye = (fieldName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
      username: data.username,
      mbti: data.mbti,
    };
    const signupResponse = await PostSignUp(formData);

    if (signupResponse?.code === "201") {
      navigate("/login");
    } else {
      alert(signupResponse?.response?.data?.message);

      setValue("email", "");
      setValue("password", "");
      setValue("checkPwd", "");
      setValue("username", "");
    }
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        inputId="email"
        name="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력하세요."
        value={value}
        register={register}
        errorMsg={errors.email?.message}
        autoFocus
      />
      <AuthInput
        inputId="password"
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        type={isOpen.password ? "text" : "password"}
        toggleEye={() => toggleEye("password")}
        eyeState={isOpen.password}
        value={value}
        register={register}
        errorMsg={errors.password?.message}
      />
      <AuthInput
        inputId="checkPwd"
        name="checkPwd"
        label="비밀번호 재입력"
        placeholder="비밀번호를 재입력하세요"
        type={isOpen.checkPwd ? "text" : "password"}
        toggleEye={() => toggleEye("checkPwd")}
        eyeState={isOpen.checkPwd}
        value={value}
        register={register}
        errorMsg={errors.checkPwd?.message}
      />

      <AuthInput
        inputId="username"
        name="username"
        label="이름"
        placeholder="이름을 입력하세요."
        type="text"
        value={value}
        setValue={setValue}
        register={register}
        errorMsg={errors.username?.message}
      />

      <AuthInput
        inputId="mbti"
        name="mbti"
        label="MBTI"
        placeholder="MBTI를 입력하세요."
        type="text"
        value={value}
        setValue={setValue}
        register={register}
        errorMsg={errors.username?.message}
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
