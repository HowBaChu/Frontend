import styled from "styled-components";
import HiddenBtn from "./HiddenBtn";

const AuthInput = ({
  inputId,
  label,
  type,
  placeholder,
  toggleEye,
  eyeState,
}) => {
  let hasHiddenBtn = ["password", "checkPwd"].includes(inputId);
  return (
    <StyledInput>
      <Label htmlFor={inputId}>{label}</Label>
      <InputWrapper>
        <Input id={inputId} type={type} placeholder={placeholder} />
        {hasHiddenBtn && (
          <HiddenBtn toggleEye={toggleEye} eyeState={eyeState} />
        )}
      </InputWrapper>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 327px;
  height: 60px;
  padding: 10px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;
const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY};
  }
`;

export default AuthInput;
