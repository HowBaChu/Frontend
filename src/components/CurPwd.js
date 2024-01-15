import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostCheckPwd } from "../api/PostCheckPwd";

const CurPwd = ({ setIsCheckedPwd }) => {
  const [password, setPassword] = useState("");
  const [helperMsg, setHelperMsg] = useState("");

  const onSubmit = async (e) => {
    const response = await PostCheckPwd(password);
    if (response === "PASSWORD_CORRECT") {
      navigate("/profile/edit");
      setIsCheckedPwd(true);
    } else {
      setHelperMsg(response);
      setIsCheckedPwd(false);
    }
    e.preventDefault();
    e.stopPropagation();
  };
  const navigate = useNavigate();

  return (
    <InputForm onSubmit={(e) => onSubmit(e)}>
      <InputTitle>현재 비밀번호</InputTitle>
      <ContentBox>
        <InputWrapper>
          <InputBox>
            <Input
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력해주세요."
              type="password"
              autoFocus
            />
          </InputBox>
          <HelperTextBox>{helperMsg}</HelperTextBox>
        </InputWrapper>
        <Buttons>
          <Btn type="cancel" onClick={() => navigate("/profile")}>
            취소
          </Btn>
          <Btn type="submit" disabled={password === ""} onClick={onSubmit}>
            확인
          </Btn>
        </Buttons>
      </ContentBox>
    </InputForm>
  );
};

const InputForm = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: 30vh;
  box-shadow: 0 0 1px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputTitle = styled.div`
  margin: 25px 0 0 20px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
const InputWrapper = styled.div`
  margin: 0 auto;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Btn = styled.button`
  width: 30%;
  height: 34px;
  color: white;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === "cancel" ? theme.colors.GRAY : theme.colors.PURPLE3};
`;
const InputBox = styled.div`
  width: 80vw;
  padding: 0 15px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const HelperTextBox = styled.p`
  margin: 5px 0 0 10px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TOMATO};
`;

export default CurPwd;
