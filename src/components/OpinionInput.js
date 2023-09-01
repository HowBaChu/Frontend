import styled from "styled-components";
import SEND_ICON from "../assets/imgs/send_icon.svg";

const OpinionInput = ({ ...attrProps }) => {
  return (
    <InputWrapper {...attrProps}>
      <Form>
        <InputContainer>
          <UserName>하우바츄</UserName>
          <Input placeHolder="댓글을 입력하세요" />
          <SendBtn>
            <SendIcon src={SEND_ICON} alt="send_icon" />
          </SendBtn>
        </InputContainer>
      </Form>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
`;
const InputContainer = styled.div`
  margin: 10px auto 5px auto;
  padding: 10px;
  width: 90%;
  height: 35px;

  border: 1px solid rgb(196, 196, 196);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const UserName = styled.p`
  padding: 11px 0 10px 0;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  white-space: nowrap;
`;
const Form = styled.form``;
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
