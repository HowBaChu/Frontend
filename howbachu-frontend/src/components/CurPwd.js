import styled from "styled-components";
import { useState } from "react";

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

  return (
    <InputForm onSubmit={(e) => onSubmit(e)}>
      <InputTitle>비밀번호 변경</InputTitle>
      <SmallTitle>현재 비밀번호</SmallTitle>
      <InputBox>
        <Input placeholder="현재 비밀번호" type="password" />
        <Btn type="submit" $isVerified={isVerified}>확인</Btn>
      </InputBox>
      <HelperTextBox $isVerified={isVerified}>{helperMsg}</HelperTextBox>
    </InputForm>
  );
};

const InputForm = styled.div`
  margin-bottom: 15px;
  width: 280px;
  display: flex;
  flex-direction: column;
`;
const InputTitle = styled.div`
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const SmallTitle = styled.p`
  margin: 4px 0 2px 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const InputBox = styled.div`
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
const Btn = styled.button`
  visibility: ${({$isVerified}) => $isVerified ? `hidden` : `visible`};
  width: 50px;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  color: white;
  font-size: 12px;
  font-weight: 700;
`;
const HelperTextBox = styled.p`
  padding: 3px 0 0 10px;
  font-size: 10px;
  font-weight: 600;
  color: ${({ $isVerified }) => ($isVerified ? `#4ECB71` : `tomato`)};
`;

export default CurPwd;
