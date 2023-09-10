import styled from "styled-components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NewPwdInput from "./NewPwdInput";

const MIN_PWD = 8;
const MAX_PWD = 15;

export const PWD_VALID_MSG = `영문과 숫자, 특수기호를 조합하여 ${MIN_PWD}~${MAX_PWD} 글자 미만`;
export const PWD_ERROR_MSG = `비밀번호가 일치하지 않습니다.`;

const regexPattern = new RegExp(
  "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_+=`|\\\\(){}[\\]:;\"'<>,.?])[a-zA-Z\\d~!@#$%^&*_+=`|\\\\(){}[\\]:;\"'<>,.?]{" +
    MIN_PWD +
    "," +
    MAX_PWD +
    "}$",
);

const schema = yup.object().shape({
  newPwd: yup.string().matches(
    regexPattern,
    PWD_VALID_MSG,
  ),
});

const NewPwd = () => {
  const [isSame, setIsSame] = useState(false); // 새로운 비밀번호 재확인 -> 일치 여부 관리 state
  const [isAble, setIsAble] = useState(false); // 유효성 검사, 일치 여부 확인
  const {
    register,
    watch,
    // setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const value = watch();

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
      <InputTitle>비밀번호 변경</InputTitle>
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
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
  width: 100%;
`;
const PwdInput = styled(NewPwdInput)`
  margin-bottom: 3px;
`;
const InputTitle = styled.div`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;

export default NewPwd;
