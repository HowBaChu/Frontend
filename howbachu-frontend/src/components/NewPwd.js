import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NewPwdInput from "./NewPwdInput";

export const PWD_VALID_MSG = "영문과 숫자, 특수기호를 조합하여 8~14 글자 미만";
export const PWD_ERROR_MSG = "비밀번호가 일치하지 않습니다.";

const schema = yup.object().shape({
  newPwd: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?])[a-zA-Z\d~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?]{8,14}$/,
      PWD_VALID_MSG,
    ),
});

const NewPwd = () => {
  const [isSame, setIsSame] = useState(false); // 새로운 비밀번호 재확인 -> 일치 여부 관리 state
  const [isAble, setIsAble] = useState(false); // 유효성 검사, 일치 여부 확인
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const value = watch();

  const onSubmit = () => {
    //TODO Axios POST New Pwd
    const formData = {
      newPwd: value.newPwd,
      reConfirm: value.reConfirm
    };
    // PostNewPwd(formData);
  };
  const handleButtonClick = () => {
    if (isAble) {
      onSubmit();
    }
  };
  useEffect(() => {
    setIsSame(
      value.newPwd && value.reConfirm && value.newPwd === value.reConfirm,
    );
  }, [value.newPwd, value.reConfirm]);
  useEffect(() => {
    setIsAble(errors.newPwd === undefined && isSame); // 유효성 검사: 통과, 비밀번호 재확인: 일치인 경우
  }, [errors.newPwd, isSame]);

  return (
    <ConfirmContainer>
      <Form>
        <SmallTitle>새로운 비밀번호</SmallTitle>
        {/*새로운 비밀번호*/}
        <PwdInput
          value={value}
          placeholder="새로운 비밀번호를 입력해 주세요."
          type="password"
          name={"newPwd"}
          valid={errors.newPwd}
          errorMsg={PWD_VALID_MSG}
          register={register}
          autoFocus
        />
        {/*재확인*/}
        <PwdInput
          value={value}
          placeholder="한번 더 입력해주세요."
          type="password"
          name={"reConfirm"}
          isSame={isSame}
          errorMsg={PWD_ERROR_MSG}
          register={register}
        />
        {/*<ChangeBtn disabled={!isAble} $isAble={isAble} type="submit">*/}
        <ChangeBtn
          onClick={handleButtonClick}
          disabled={!isAble}
          $isAble={isAble}
        >
          비밀번호 변경하기
        </ChangeBtn>
      </Form>
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
  width: 280px;
`;
const Form = styled.div``;
const PwdInput = styled(NewPwdInput)`
  margin-bottom: 3px;
`;
const SmallTitle = styled.p`
  margin: 4px 0 2px 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const ChangeBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 33px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ $isAble, theme }) =>
    $isAble ? theme.colors.PURPLE3 : theme.colors.LIGHT_GRAY};
  &:disabled {
    cursor: not-allowed;
  }
`;

export default NewPwd;
