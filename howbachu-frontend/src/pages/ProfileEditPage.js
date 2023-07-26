import styled from "styled-components";
import DEFAULT_IMG from "../assets/logo.png";
import InfoInput from "../components/InfoInput";

const ProfileEditPage = () => {
    return (
        <PageWrapper>
            <ProfileContainer>
                <ProfileImgBox>
                    <ProfileImg src={DEFAULT_IMG}/>
                </ProfileImgBox>
                <InfoContainer>
                    <InfoTxt>
                        <UserName>
                            하우바츄
                        </UserName>
                    </InfoTxt>
                    <p>howbachu@naver.com</p>
                    <ProfileMsgBox>안뇽</ProfileMsgBox>
                </InfoContainer>
            </ProfileContainer>
            <hr/>
            <InputWrapper>
                <InfoInput title="email"/>
                <InfoInput title="password"/>
                <InfoInput title="nickname"/>
                <InfoInput title="MBTI"/>
                <InfoInput title="상태메세지"/>
            </InputWrapper>
            <Buttons>
                <Btn type="cancel">취소</Btn>
                <Btn type="save">저장</Btn>
            </Buttons>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
`
const ProfileImgBox = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 3px ${({theme}) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
`
const ProfileImg = styled.img`
  width: 110px;
`
const InfoContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InfoTxt = styled.div`
  width: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  align-items: center;
`
const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`
const ProfileMsgBox = styled.div`
  width: 180px;
  text-align: center;
  margin-top: 7px;
  padding: 5px;
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
`
const InputWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`
const Btn = styled.button`
  width: 65px;
  height: 30px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  background-color: ${({theme, type}) => 
      type === "cancel" 
          ? theme.colors.GRAY 
          : theme.colors.DARK_PURPLE
  };
`
export default ProfileEditPage;