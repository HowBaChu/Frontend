import styled from "styled-components";
import DEFAULT_IMG from "../assets/logo.png";
import COMMENT_ICON from "../assets/comment_icon.png"
import EDIT_ICON from "../assets/edit_icon.png"
import CROWN_ICON from "../assets/crown_icon.png"
import REPORT_ICON from "../assets/report_icon.png"

import {useNavigate} from "react-router-dom";

const MyPage = () => {
    const navigate = useNavigate();

    return (
        <Div>
            <ProfileImgBox>
                <ProfileImg src={DEFAULT_IMG}/>
            </ProfileImgBox>
            <BottomWrapper>
                <InfoContainer>
                    <InfoTxt>
                        <UserName>
                            하우바츄
                        </UserName>
                        <MBTI>
                            INTJ
                        </MBTI>
                    </InfoTxt>
                    <p>howbachu@naver.com</p>
                    <ProfileMsgBox>안뇽</ProfileMsgBox>
                </InfoContainer>
                <ButtonContainer>
                    <Button onClick={()=>navigate("/profile/edit")}>
                        <BtnIcon src={EDIT_ICON}/>
                        프로필수정
                    </Button>
                    <Button onClick={()=>navigate("/my-opinions")}>
                        <BtnIcon src={COMMENT_ICON}/>
                        내가 쓴 글
                    </Button>
                    <Button onClick={()=>navigate("/popular-posts")}>
                        <BtnIcon src={CROWN_ICON}/>
                        명예의 전당
                    </Button>
                    <Button onClick={()=>navigate("/reports")}>
                        <BtnIcon src={REPORT_ICON}/>
                        신고내역
                    </Button>
                </ButtonContainer>
            </BottomWrapper>
        </Div>
    );
};

const Div = styled.div`
  display: flex;
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const ProfileImgBox = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: 0 0 3px ${({theme}) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
`
const ProfileImg = styled.img`
  width: 250px;
`
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoContainer = styled.div`
  width: 250px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
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
const MBTI = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.DARK_PURPLE};
`
const Button = styled.button`
  width: 320px;
  height: 60px;
  margin-top: 15px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 0 1px ${({theme}) => theme.colors.DARK_GRAY};
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  line-height: 60px;
  color: ${({theme}) => theme.colors.DARK_GRAY};
`
const ProfileMsgBox = styled.div`
  width: 250px;
  margin-top: 7px;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 8px;
`
const ButtonContainer = styled.div`
  margin-top: 7px;
`
const BtnIcon = styled.img`
  width: 25px;
  height: 25px;
`

export default MyPage;