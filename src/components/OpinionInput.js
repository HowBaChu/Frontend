import styled from "styled-components";
import SEND_ICON from "../assets/imgs/send_icon.svg";
import { useState } from "react";
import { PostOpin } from "../api/PostOpin";
import { useParams } from "react-router-dom";

const OpinionInput = ({ onOpinSubmit, ...attrProps }) => {
  const [opin, setOpin] = useState("");
  const { opinId } = useParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await PostOpin(opin, opinId);
      if (result) {
        setOpin("");
        onOpinSubmit();
      }
    } catch (error) {
      console.error("댓글 등록 실패:", error);
    }
  };
  return (
    <InputWrapper {...attrProps}>
      <Form onSubmit={(e) => onSubmit(e)}>
        <InputContainer>
          <UserName>하우바츄</UserName>
          <Input
            placeholder="댓글을 입력하세요"
            value={opin}
            onChange={(e) => setOpin(e.target.value)}
          />
          <SendBtn type="submit">
            <SendIcon src={SEND_ICON} alt="send_icon" />
          </SendBtn>
        </InputContainer>
      </Form>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 100%;
  height: 45px;
`;
const InputContainer = styled.div`
  margin: 5px auto 0;
  padding: 10px;
  width: 90%;
  height: 40px;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
`;
const UserName = styled.p`
  padding: 11px 0 10px 0;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  white-space: nowrap;
`;
const Form = styled.form``;
const Input = styled.input`
  width: 100%;
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
