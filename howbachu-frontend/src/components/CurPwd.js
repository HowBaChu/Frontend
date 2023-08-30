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
      <div>
        <InputBox>
          <Input placeholder="현재 비밀번호를 입력해주세요." type="password" />
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
    </InputForm>
  );
};

const InputForm = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 215px;
  box-shadow: 0 0 1px gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.div`
  margin: 25px 0 20px 20px;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 45px;
`;
const Btn = styled.button`
  width: 80px;
  height: 34px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === "cancel" ? theme.colors.GRAY : theme.colors.PURPLE3};
`;
const InputBox = styled.div`
  width: 260px;
  margin: 0 auto;
  padding: 0 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const Input = styled.input`
  width: 190px;
  margin: 5px 10px 5px 0;
  border: none;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const HelperTextBox = styled.p`
  margin: 5px 0 0 30px;
  font-size: 10px;
  font-weight: 600;
  color: ${({ $isVerified }) => ($isVerified ? `#4ECB71` : `tomato`)};
`;

export default CurPwd;
