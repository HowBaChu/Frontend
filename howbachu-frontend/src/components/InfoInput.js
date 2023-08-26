import styled from "styled-components";

const InfoInput = ({
  title,
  autoFocus,
  placeHolder,
  disabled,
  value,
  textArea,
}) => {
  return (
    <InfoInputBox>
      <InputTitle>{title}</InputTitle>
      <InputContainer textArea={textArea}>
        {textArea ? (
          <TextAreaBox>
            <TextArea type="text" value={value} />
            <LimitMsg>({value.length} / 60)</LimitMsg>
          </TextAreaBox>
        ) : (
          <Input
            type="text"
            autoFocus={autoFocus}
            placeHolder={placeHolder}
            disabled={disabled}
            value={value}
          />
        )}
      </InputContainer>
      {disabled && <NotiMsg>&#8251; 이메일은 수정할 수 없어요 :(</NotiMsg>}
    </InfoInputBox>
  );
};

const InfoInputBox = styled.div`
  width: 280px;
  flex-direction: column;
  align-items: start;
`;
const InputTitle = styled.div`
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const InputContainer = styled.div`
  height: ${({ textArea }) => (textArea ? `120px` : `30px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const NotiMsg = styled.p`
  padding: 5px 0 0 10px;
  font-size: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const Input = styled.input`
  width: 100%;
  margin: 5px 10px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const TextAreaBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 2px 2px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const TextArea = styled.textarea`
  padding: 7px;
  height: 135px;
  font-size: 18px;
  border: none;
  overflow: hidden;
  resize: none;
  letter-spacing: -1px;
`;
const LimitMsg = styled.div`
  padding: 5px;
  align-self: end;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
`;

export default InfoInput;
