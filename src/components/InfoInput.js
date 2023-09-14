import styled from "styled-components";
const MAX_CONTENT = 60;

const InfoInput = ({
  name,
  title,
  autoFocus,
  placeHolder,
  disabled,
  value,
  textArea,
  onValueChange,
}) => {
  const onChange = (e) => {
    const newValue = e.target.value.slice(0, MAX_CONTENT);
    // 부모 컴포넌트로 변경된 값을 전달.
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <InfoInputBox>
      <InputTitle>{title}</InputTitle>
      <InputContainer textArea={textArea}>
        {textArea ? (
          <TextAreaBox>
            <TextArea name={name} type="text" value={value} onChange={onChange} />
            <LimitMsg>({value && value.length} / 60)</LimitMsg>
          </TextAreaBox>
        ) : (
          <Input
            name={name}
            type="text"
            autoFocus={autoFocus}
            placeHolder={placeHolder}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
        )}
      </InputContainer>
      {disabled && <NotiMsg>&#8251; 이메일은 수정할 수 없어요 :(</NotiMsg>}
    </InfoInputBox>
  );
};

const InfoInputBox = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: start;
`;
const InputTitle = styled.div`
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const InputContainer = styled.div`
  padding: 0 15px;
  height: ${({ textArea }) => (textArea ? `120px` : `40px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
`;
const NotiMsg = styled.p`
  padding: 5px 0 0 10px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
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
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  border: none;
  overflow: hidden;
  resize: none;
  letter-spacing: -1px;
`;
const LimitMsg = styled.div`
  padding: 5px;
  align-self: end;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  white-space: nowrap;
`;

export default InfoInput;
