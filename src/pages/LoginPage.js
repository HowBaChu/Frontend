import styled from "styled-components";
import { PostLogIn } from "../api/PostLogIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login_schema } from "../validation/Schema";
import AuthInput from "../components/AuthInput";

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login_schema),
    mode: "onChange",
  });
  const value = watch();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleEye = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = async (data) => {
    const loginResponse = await PostLogIn(data);

    if (loginResponse?.code === "200") {
      navigate("/");
      setIsLoggedIn(true);
    } else {
      alert(loginResponse?.response?.data?.message);
      setValue("email", "");
      setValue("password", "");
    }
  };

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  return (
    <PageContainer>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          inputId="email"
          name="email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={value}
          setValue={setValue}
          register={register}
          errorMsg={errors.email?.message}
          autoFocus
        />
        <AuthInput
          inputId="password"
          name="password"
          label="비밀번호"
          type={isOpen ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          toggleEye={toggleEye}
          eyeState={isOpen}
          value={value}
          setValue={setValue}
          register={register}
          errorMsg={errors.password?.message}
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
