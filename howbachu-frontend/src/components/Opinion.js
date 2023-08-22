import styled from "styled-components";
import default_profile_icon from "../assets/default-profile-img_icon.svg";
import FIRE from "../assets/fire_icon.svg"
import HEART_EMPTY from "../assets/empty_heart_icon.svg"
import SIREN from "../assets/siren_icon.svg";

const Opinion = ({ isMine, isHot, ...attrProps }) => {
  return (
    <OpinionWrapper $isMine={isMine} $isHot={isHot} {...attrProps}>
      <OpinionBox $isMine={isMine}>
        <TopBox $isMine={isMine}>
          <ProfileImgBox>
            <ProfileImg src={default_profile_icon} />
          </ProfileImgBox>
          <ContentContainer $isMine={isMine}>
            <InfoBox $isMine={isMine}>
              <UserName>말랑카우</UserName>
              <OpinTitle $isMine={isMine}>찍먹이다!</OpinTitle>
            </InfoBox>
            <Content>탕수육 맛있겠다 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Content>
          </ContentContainer>
        </TopBox>
        <IconBox>
          <IconImg $isHot={isHot} />
          <LikeCount>24</LikeCount>
        </IconBox>
      </OpinionBox>
      <UserActionBtn $isMine={isMine}>
        <ReOpinTxt>답글달기</ReOpinTxt>
        <button>
          <img src={SIREN} />
        </button>
      </UserActionBtn>
    </OpinionWrapper>
  );
};

const OpinionWrapper = styled.div`
  width: ${({ $isHot }) => ($isHot ? `100%` : `290px`)};
  box-shadow: 0 0 1px gray;
  border-radius: 15px;
  padding: 14px 10px 12px 9px;
  background-color: ${({ $isMine, theme }) =>
    $isMine ? `white` : theme.colors.PURPLE1};
  background-color: ${({ $isHot, theme }) => $isHot && theme.colors.HOT_PINK};
  align-self: ${({ $isMine }) => ($isMine ? `end` : `start`)};
  align-self: ${({ $isHot }) => $isHot && `center`};
  display: flex;
  flex-direction: column;
`;
const OpinionBox = styled.div`
  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? `row-reverse` : `row`)};
  justify-content: space-between;
  align-items: center;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? `row-reverse` : `row`)};
  align-items: start;
`;
const ProfileImgBox = styled.div`
  width: 34px;
  height: 36px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.LIGHT_PURPLE};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
`;
const ContentContainer = styled.div`
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: ${({ $isMine }) => ($isMine ? `row-reverse` : `row`)};
  align-items: center;
  margin-top: 3px;
  gap: 5px;
`;
const UserName = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
const OpinTitle = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.DARK_PURPLE};
`;
const Content = styled.div`
  max-width: 230px;
  padding: 0 1px;
  font-size: 11px;
  font-weight: 500;
  text-align: start;
  line-height: 1.1;
  word-break: break-all;
`;
const IconBox = styled.button`
  height: 42px;
`;
const IconImg = styled.img.attrs((props) => ({
  src: props.$isHot ? FIRE : HEART_EMPTY,
  alt: "icon",
}))`
  width: 34px;
  height: 34px;
`;

const LikeCount = styled.p`
  margin-top: -5px;
  font-size: 6px;
  font-weight: 400;
`
const UserActionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $isMine }) => ($isMine ? `end` : `start`)};
`;
const ReOpinTxt = styled.button`
  font-size: 10px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.TXT_GRAY};
  white-space: nowrap;
`;
const SirenIcon = styled.button`
`;

export default Opinion;
