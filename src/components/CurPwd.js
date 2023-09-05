import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Verified_MSG = "인증 되었습니다:)";
const NO_Verified_MSG = "현재 비밀번호 확인이 필요합니다.";

const CurPwd = () => {
  const [isVerified, setIsVerified] = useState(false);
  const helperMsg = isVerified ? Verified_MSG : NO_Verified_MSG;

  const onSubmit = (e, data) => {
    // PostCurPwd(data); //TODO Axios POST Current Pwd
    e.preventDefault();
    e.stopPropagation();
  };
  const navigate = useNavigate();

  return (
    <InputForm onSubmit={(e) => onSubmit(e)}>
      <InputTitle>현재 비밀번호</InputTitle>
      <ContentBox>
        <div>
          <InputBox>
            <Input
              placeholder="현재 비밀번호를 입력해주세요."
              type="password"
              autoFocus
            />
          </InputBox>
          <HelperTextBox $isVerified={isVerified}>{helperMsg}</HelperTextBox>
        </div>
        <Buttons>
          <Btn type="cancel" onClick={() => navigate("/profile")}>
            취소
          </Btn>
          <Btn type="submit" onClick={() => navigate("/profile/edit")}>
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
  margin: 0 auto;
  padding: 0 10px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const Input = styled.input`
  width: 100%;
  margin: 5px 10px 5px 0;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const HelperTextBox = styled.p`
  margin: 5px 0 0 30px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TOMATO};
`;

export default CurPwd;
