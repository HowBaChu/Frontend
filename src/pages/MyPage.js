import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetProfileDetail } from "../api/GetProfileDetail";
import DEFAULT_IMG from "../assets/imgs/logo.png";
import COMMENT_ICON from "../assets/imgs/my-opins_icon.svg";
import EDIT_ICON from "../assets/imgs/edit_icon.svg";
import REPORT_ICON from "../assets/imgs/siren_big_icon.svg";

const MyPage = ({ setIsCheckedPwd }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState([]);
  const { avatar, email, mbti, statusMessage, username } = profileData;

  let avatarImg;
  if (avatar === undefined) {
    avatarImg = DEFAULT_IMG;
  } else avatarImg = avatar;

  useEffect(() => {
    GetProfileDetail((profileDetail) => setProfileData(profileDetail));
  }, []);

  useEffect(() => {
    setIsCheckedPwd(false);
  }, []);

  return (
    <Div>
      <ProfileImgBox>
        <ProfileImg src={avatarImg} />
      </ProfileImgBox>
      <BottomWrapper>
        <InfoContainer>
          <InfoTxt>
            <UserName>{username}</UserName>
            <MBTI>{mbti}</MBTI>
          </InfoTxt>
          <Email>{email}</Email>
          <ProfileMsgBox>{statusMessage}</ProfileMsgBox>
        </InfoContainer>
        <ButtonContainer>
          <Button onClick={() => navigate("/profile/pwdcheck")}>
            프로필수정
            <BtnIcon src={EDIT_ICON} />
          </Button>
          <Button onClick={() => navigate("/my-opinions")}>
            내가 쓴 글
            <BtnIcon src={COMMENT_ICON} $comment={true} />
          </Button>
          <Button onClick={() => navigate("/reports")}>
            신고내역
            <BtnIcon src={REPORT_ICON} />
          </Button>
        </ButtonContainer>
      </BottomWrapper>
    </Div>
  );
};

const Div = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ProfileImgBox = styled.div`
  width: calc(100vw - 140px); // 좌우 마진
  height: calc(100vw - 140px); // 좌우 마진
  max-width: 250px;
  max-height: 250px;
  margin-top: 5px;
  box-shadow: 0 0 2px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
const InfoContainer = styled.div`
  width: calc(100vw - 140px); // 좌우 마진
  margin-top: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;
const InfoTxt = styled.div`
  width: 200px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;
const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const MBTI = styled.p`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.DARK_PURPLE};
`;
const Button = styled.button`
  width: calc(100vw - 44px);
  height: 60px;
  margin: 0 auto 15px;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  line-height: 60px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
`;
const Email = styled.p`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.GRAY};
`;
const ProfileMsgBox = styled.div`
  width: calc(100vw - 140px); // 좌우 마진
  margin-top: 12px;
  padding: 10px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  border-radius: 5px;
`;
const ButtonContainer = styled.div`
  margin-top: 7px;
`;
const BtnIcon = styled.img`
  width: ${({ $comment }) => ($comment ? `25px` : `35px`)};
  margin-right: ${({ $comment }) => $comment && `5px`};
  height: 35px;
`;

export default MyPage;
