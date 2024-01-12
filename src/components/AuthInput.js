import styled from "styled-components";
import { useEffect, useState } from "react";
import HiddenBtn from "./HiddenBtn";

const AuthInput = ({
  inputId,
  label,
  name,
  type,
  placeholder,
  toggleEye,
  eyeState,
  value,
  register,
  errorMsg,
}) => {
  let hasHiddenBtn = ["password", "checkPwd"].includes(inputId);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(errorMsg !== undefined);
  }, [errorMsg]);

  return (
    <>
      <StyledInput $isError={isError}>
        <Label htmlFor={inputId} $isError={isError}>
          {label}
        </Label>
        <InputWrapper>
          <Input
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value[name]}
            {...register(name)}
          />
          {hasHiddenBtn && (
            <HiddenBtn toggleEye={toggleEye} eyeState={eyeState} />
          )}
        </InputWrapper>
      </StyledInput>
      <HelperTxt $isError={isError}>{errorMsg && errorMsg}</HelperTxt>
    </>
  );
};

const StyledInput = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.TOMATO : theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.TOMATO : theme.colors.TXT_GRAY};
`;
const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  border: none;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  &::placeholder {
    color: ${({ theme }) => theme.colors.TXT_GRAY};
  }
`;
const HelperTxt = styled.p`
  width: 100%;
  margin-left: 10px;
  line-height: 16px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  color: ${({ theme, $isError }) => $isError && theme.colors.TOMATO};
`;

export default AuthInput;
