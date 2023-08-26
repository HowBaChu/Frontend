import styled from "styled-components";
import { useState } from "react";
import InfoInput from "../components/InfoInput";
import DEFAULT_IMG from "../assets/imgs/logo.png";
import EDIT_ICON from "../assets/imgs/edit_purple_icon.svg";
import CurPwd from "../components/CurPwd";
import NewPwd from "../components/NewPwd";

const ProfileEditPage = () => {
  const [selectedImage, setSelectedImage] = useState(DEFAULT_IMG);
  const [profileData, setProfileData] = useState({
    nickname: "하우바츄",
    MBTI: "INTJ",
    msg: "안녕하세요 이메일 수정은 불가합니다. 글자수 60자 제한 있습니다.",
  });
  const [editingData, setEditingData] = useState({ ...profileData });

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // URL로 변환해서 state에 저장 -> 렌더링 위함
      setSelectedImage(imageURL);
      // TODO 필요없어진 후에 URL을 해제하는 코드
      // URL.revokeObjectURL(imageURL);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO 폼 데이터를 서버로 POST
    setProfileData(editingData); // 저장 버튼 클릭 시
  };
  const handleCancel = () => {
    setEditingData(profileData); // 취소 버튼 클릭 시
    setSelectedImage(DEFAULT_IMG);
  };
  const handleInputChange = (field, value) => {
    setEditingData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <PageWrapper>
      <Form onSubmit={handleFormSubmit}>
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
              <UserName>{profileData.nickname}</UserName>
            </InfoTxt>
            <Email>{profileData.MBTI}</Email>
            <ProfileMsgBox>{profileData.msg}</ProfileMsgBox>
          </InfoContainer>
        </ProfileContainer>
        <hr />
        <InputWrapper>
          <InfoInput
            title="email"
            placeHolder="howbachu@gmail.com"
            disabled={true}
          />
          <PwdInputBox>
            <CurPwd />
            <NewPwd />
          </PwdInputBox>
          <InfoInput
            title="nickname"
            name="nickname"
            value={editingData.nickname}
            onValueChange={(newValue) =>
              handleInputChange("nickname", newValue)
            }
          />
          <InfoInput
            title="MBTI"
            name="MBTI"
            value={editingData.MBTI}
            onValueChange={(newValue) => handleInputChange("MBTI", newValue)}
          />
          <InfoInput
            title="상태메세지"
            name="msg"
            value={editingData.msg}
            textArea={true}
            onValueChange={(newValue) => handleInputChange("msg", newValue)}
          />
        </InputWrapper>
        <Buttons>
          <Btn onClick={handleCancel} type="button">
            취소
          </Btn>
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
  gap: 30px;
`;
const PwdInputBox = styled.div``;
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
