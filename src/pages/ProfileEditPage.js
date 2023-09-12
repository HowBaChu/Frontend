import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { GetProfileDetail } from "../api/GetProfileDetail";
import { PostAvatar } from "../api/PostAvatar";
import { PatchProfileDetail } from "../api/PatchProfileDetail";
import InfoInput from "../components/InfoInput";
import NewPwd from "../components/NewPwd";
import DEFAULT_IMG from "../assets/imgs/logo.png";
import EDIT_ICON from "../assets/imgs/edit_purple_icon.svg";
import CANCEL_ICON from "../assets/imgs/cancel_icon.svg";
import SAVE_ICON from "../assets/imgs/save_icon.svg";

const ProfileEditPage = () => {
  /* 초기 api response */
  const [apiData, setApiData] = useState({});
  /* '저장'한 데이터 */
  const [profileData, setProfileData] = useState({
    avatar: "",
    email: "",
    mbti: "",
    statusMessage: "",
    username: "",
  });
  /* '수정 중'인 데이터 */
  const [editingData, setEditingData] = useState({
    ...profileData,
  });
  /* '취소'할 때 되돌릴 이미지 */
  const [selectedImage, setSelectedImage] = useState(null);
  /* '저장'전 수정중인 이미지 */
  const [editingImage, setEditingImage] = useState(null);

  /* API response에서 avatar, id를 제외한 객체를 반환*/
  const filterOutKeys = (data, keysToExclude) => {
    let filteredData = { ...data };
    keysToExclude.forEach((key) => {
      delete filteredData[key];
    });
    return filteredData;
  };
  /* avatar, id를 제외한 값만 profile edit data로 관리하기 위함 */
  const filteredState = filterOutKeys(apiData, ["avatar", "id"]);

  // submit 될 때 마다 초기화 되는 문제 useRef 사용해서 해결
  const imgFormDataRef = useRef(new FormData());

  // handleImageChange에서 파일을 변경할 때마다 새로운 FormData 인스턴스를 생성하여 imgFormData를 업데이트
  const updateFormData = (newFile) => {
    let newFormData = new FormData();
    newFormData.append("file", newFile);
    imgFormDataRef.current = newFormData; // useRef의 current 속성을 업데이트

    return newFormData;
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // URL로 변환해서 state에 저장 -> 렌더링 위함
      setEditingImage(imageURL);
      updateFormData(file);
      // console.log(imgFormDataRef.current.getAll("file")[0]); // useRef의 current를 사용하여 접근
    }
  };

  const handleInputChange = (field, value) => {
    setEditingData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProfileData(editingData); // 저장 버튼 클릭 시 수정 중이던 내용 저장
    setSelectedImage(editingImage);

    /* TODO 폼 데이터 전송 Axios PATCH formData */
    // const formData = {
    //   username: editingData.username,
    //   MBTI: value.MBTI,
    // };
    // PostEditForm(formData);

    /* TODO 필요없어진 후에 URL을 해제하는 코드 */
    // URL.revokeObjectURL(editingImage);

    /* API */
    PatchProfileDetail(editingData);
    PostAvatar(imgFormDataRef.current);
    // console.log(imgFormDataRef.current.getAll("file")[0]);
  };

  const handleCancel = () => {
    setEditingData(profileData); // 취소 버튼 클릭 시
    setEditingImage(selectedImage); // 취소 버튼 클릭 시
  };

  useEffect(() => {
    GetProfileDetail((apidata) => setApiData(apidata));
  }, []);

  useEffect(() => {
    setEditingData({ ...profileData });
    // console.log(profileData);
  }, [profileData]);

  useEffect(() => {
    // profileData.avatar 설정, avatar 없으면 default img
    const avatarSrc = apiData.avatar || DEFAULT_IMG;
    setSelectedImage(avatarSrc);
    setEditingImage(avatarSrc);
  }, [profileData]);

  useEffect(() => {
    setProfileData(filteredState);
  }, [apiData]);

  return (
    <PageWrapper>
      {profileData && editingData && (
        <Form onSubmit={handleFormSubmit}>
          <ProfileContainer>
            <ProfileImgContainer>
              <ProfileImgBox>
                {selectedImage && <ProfileImg type="file" src={editingImage} />}
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
                <UserName>{profileData.username}</UserName>
              </InfoTxt>
              <MBTI>{profileData.mbti}</MBTI>
              <ProfileMsgBox>{profileData.statusMessage}</ProfileMsgBox>
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
              value={editingData.username}
              onValueChange={(newValue) =>
                handleInputChange("username", newValue)
              }
            />
            <InfoInput
              title="MBTI"
              value={editingData.mbti}
              onValueChange={(newValue) => handleInputChange("mbti", newValue)}
            />
            <InfoInput
              title="상태메세지"
              value={editingData.statusMessage}
              textArea={true}
              onValueChange={(newValue) =>
                handleInputChange("statusMessage", newValue)
              }
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
      )}
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
  justify-content: space-around;
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
