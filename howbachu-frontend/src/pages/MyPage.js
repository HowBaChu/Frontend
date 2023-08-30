import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DEFAULT_IMG from "../assets/imgs/logo.png";
import COMMENT_ICON from "../assets/imgs/my-opins_icon.svg";
import EDIT_ICON from "../assets/imgs/edit_icon.svg";
import REPORT_ICON from "../assets/imgs/siren_big_icon.svg";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <ProfileImgBox>
        <ProfileImg src={DEFAULT_IMG} />
      </ProfileImgBox>
      <BottomWrapper>
        <InfoContainer>
          <InfoTxt>
            <UserName>하우바츄</UserName>
            <MBTI>INTJ</MBTI>
          </InfoTxt>
          <Email>howbachu@naver.com</Email>
          <ProfileMsgBox>안뇽</ProfileMsgBox>
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
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ProfileImgBox = styled.div`
  width: 250px;
  height: 250px;
  box-shadow: 0 0 3px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
`;
const ProfileImg = styled.img`
  width: 250px;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;
const InfoContainer = styled.div`
  width: 250px;
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
  font-size: 20px;
  font-weight: 700;
`;
const MBTI = styled.p`
  font-size: 12px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.DARK_PURPLE};
`;
const Button = styled.button`
  width: 320px;
  height: 60px;
  margin-bottom: 15px;
  padding: 0 15px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
`;
const Email = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
`;
const ProfileMsgBox = styled.div`
  width: 250px;
  margin-top: 12px;
  padding: 10px;
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-size: 12px;
  font-weight: 600;
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
