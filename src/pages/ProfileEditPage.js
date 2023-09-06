import styled from "styled-components";
import { useState } from "react";
import InfoInput from "../components/InfoInput";
import NewPwd from "../components/NewPwd";
import DEFAULT_IMG from "../assets/imgs/logo.png";
import EDIT_ICON from "../assets/imgs/edit_purple_icon.svg";
import CANCEL_ICON from "../assets/imgs/cancel_icon.svg";
import SAVE_ICON from "../assets/imgs/save_icon.svg";

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
    setProfileData(editingData); // 저장 버튼 클릭 시

    //TODO 폼 데이터 전송 Axios POST formData
    // const formData = {
    //   nickname: editingData.nickname,
    //   MBTI: value.MBTI,
    // };
    // PostEditForm(formData);
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
            <MBTI>{profileData.MBTI}</MBTI>
            <ProfileMsgBox>{profileData.msg}</ProfileMsgBox>
          </InfoContainer>
        </ProfileContainer>
        <hr />
        <InputWrapper>
          <InfoInput
            title="이메일"
            placeHolder="howbachu@gmail.com"
            disabled={true}
          />
          <NewPwd />
          <InfoInput
            title="닉네임"
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
          <Btn onClick={handleCancel} type="button" $mode="cancel">
            <Icon src={CANCEL_ICON} />
            <Txt>취소</Txt>
          </Btn>
          <Btn type="submit">
            <Icon src={SAVE_ICON} />
            <Txt>저장</Txt>
          </Btn>
        </Buttons>
      </Form>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
  padding: 2%;
  overflow: scroll;
`;
const ProfileContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 20px;
  align-items: center;
`;
const ProfileImgContainer = styled.div`
  height: 100px;
`;
const ProfileImgBox = styled.div`
  width: 90px;
  height: 90px;
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;
const ProfileImg = styled.img`
  width: 110%;
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
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
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
  margin: 3px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const MBTI = styled.p`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const ProfileMsgBox = styled.div`
  margin-top: 7px;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const Form = styled.form`
  padding: 5px 0 40px 0;
`;
const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
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
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  border-radius: 5px;
  background-color: ${({ theme, $mode }) =>
    $mode === "cancel" ? theme.colors.GRAY : theme.colors.PURPLE3};
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
const Txt = styled.p`
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: white;
`;
export default ProfileEditPage;
