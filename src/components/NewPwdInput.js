import styled from "styled-components";
import { useEffect, useState } from "react";

const NewPwdInput = ({
  value,
  placeholder,
  type,
  name,
  valid,
  isSame,
  errorMsg,
  register,
  autoFocus,
  ...attrProps
}) => {
  const [isValid, setIsValid] = useState(false);
  const [helperMsg, setHelperMsg] = useState(errorMsg);

  useEffect(() => {
    setIsValid(!valid); // 유효성 검사
  }, [valid]);

  useEffect(() => {
    if (value[name]) {
      if (!isValid) {
        // 유효성 검사 메시지
        setHelperMsg(valid?.message);
      } else if (isSame === false) {
        // 재입력 불일치
        setHelperMsg(errorMsg);
      }
    }
  }, [value[name], valid, isSame]);

  return (
    <InputContainer {...attrProps}>
      <InputBox>
        <Input
          value={value[name]}
          placeholder={placeholder}
          type={type}
          autoFocus={autoFocus}
          {...register(name)}
        />
      </InputBox>
      {(!isValid || !isSame) && <HelperTextBox>{helperMsg}</HelperTextBox>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  padding: 0 15px;
  height: ${({ textArea }) => (textArea ? `120px` : `40px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  line-height: 15px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const HelperTextBox = styled.p`
  padding: 3px 0 0 10px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TOMATO};
`;

export default NewPwdInput;
