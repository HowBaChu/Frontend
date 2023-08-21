import styled from "styled-components";
import SEND_ICON from "../assets/imgs/send_icon.png";

const OpinionInput = ({ className }) => {
  return (
    <InputWrapper className={className}>
      <InputContainer>
        <Input />
        <SendBtn>
          <SendIcon src={SEND_ICON} alt="send_icon" />
        </SendBtn>
      </InputContainer>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
`;
const InputContainer = styled.div`
  margin: 10px auto 5px auto;
  width: 90%;
  height: 35px;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Input = styled.input`
  width: 290px;
  height: 30px;
  padding-left: 10px;
  border: none;
`;
const SendBtn = styled.button`
  width: 30px;
  height: 30px;
`;
const SendIcon = styled.img`
  margin-top: 5px;
  width: 20px;
  height: 20px;
`;

export default OpinionInput;
