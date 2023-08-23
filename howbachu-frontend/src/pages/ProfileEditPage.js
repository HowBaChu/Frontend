import styled from "styled-components";
import { useState } from "react";
import InfoInput from "../components/InfoInput";
import DEFAULT_IMG from "../assets/logo.png";
import EDIT_ICON from "../assets/edit_purple_icon.svg";

const ProfileEditPage = () => {
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMG);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // URL로 변환해서 state에 저장 -> 렌더링 위함
      setSelectedImage(imageURL);
      // // 필요없어진 후에 URL을 해제하는 코드
      // URL.revokeObjectURL(imageURL);
    }
  };

  return (
    <PageWrapper>
      <Form>
        <ProfileContainer>
          <ProfileImgContainer>
            <ProfileImgBox>
              <ProfileImg type="file" src={selectedImage} />
              <ImgInput
                className="profileImg-input"
                type="file"
                accept="image/*"
                id="profileImg"
                onChange={handleImageChange}
              />
            </ProfileImgBox>
            <LabelBtn className="profileImg-label" htmlFor="profileImg">
              <Edit_icon src={EDIT_ICON} />
            </LabelBtn>
          </ProfileImgContainer>

          <InfoContainer>
            <InfoTxt>
              <UserName>하우바츄</UserName>
            </InfoTxt>
            <Email>howbachu@naver.com</Email>
            <ProfileMsgBox>안뇽</ProfileMsgBox>
          </InfoContainer>
        </ProfileContainer>

        <hr />
        <InputWrapper>
          <InfoInput
            title="email"
            placeHolder="howbachu@gmail.com"
            disabled={true}
          />
          <InfoInput title="password" name="password" autoFocus />
          <InfoInput title="nickname" name="nickname" value="하우바츄" />
          <InfoInput title="MBTI" name="MBTI" value="INTJ" />
          <InfoInput
            title="상태메세지"
            name="msg"
            value="안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요 안녕하세요안녕하세요"
            textArea={true}
          />
        </InputWrapper>
        <Buttons>
          <Btn type="cancel">취소</Btn>
          <Btn type="submit">저장</Btn>
        </Buttons>
      </Form>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const ProfileContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ProfileImgContainer = styled.div`
  height: 100px;
`;
const ProfileImgBox = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;
const ProfileImg = styled.img`
  width: 110px;
`;
const LabelBtn = styled.label`
  width: 37px;
  height: 37px;
  margin-left: calc(100% - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
  font-weight: bold;
  font-size: 13px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 50%;
  cursor: pointer;
`;
const Edit_icon = styled.img``;
const ImgInput = styled.input`
  display: none;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;
const InfoTxt = styled.div`
  width: 200px;
  margin: 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const Email = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
`;
const UserName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const ProfileMsgBox = styled.div`
  width: 180px;
  margin-top: 7px;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  text-align: center;
  font-size: 8px;
  font-weight: 600;
`;
const Form = styled.form`
  height: 670px;
  padding-top: 5px;
  overflow: scroll;
`;
const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
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
export default ProfileEditPage;
