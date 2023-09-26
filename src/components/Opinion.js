import styled from "styled-components";
import { useState } from "react";
import FIRE from "../assets/imgs/fire_icon.svg";
import HEART_EMPTY from "../assets/imgs/empty_heart_icon.svg";
import HEART_FULL from "../assets/imgs/full_heart_icon.svg";
import SIREN from "../assets/imgs/siren_icon.svg";
import default_profile_icon from "../assets/imgs/default-profile-img_icon.svg";

const Opinion = ({ isHot, isList, opinContent, openModal, ...attrProps }) => {
  const { nickname, content, selection, topicSubTitle, likeCnt } = opinContent;
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const isMine = selection === "B";

  const onClickHeart = (e, isHot) => {
    e.stopPropagation(); // 상위 div의 클릭 이벤트 방지
    if (!isHot) {
      // 하트(좋아요)일 경우
      setIsLikeClicked((prev) => !prev);
    }
  };
  const onClickReport = (e) => {
    e.stopPropagation(); // 상위 div의 클릭 이벤트 방지
    openModal();
  };

  return (
    <OpinionWrapper $isMine={isMine} $isHot={isHot} {...attrProps}>
      {opinContent && (
        <>
          <OpinionBox $isMine={isMine}>
            <TopBox $isMine={isMine}>
              <ProfileImgBox>
                <ProfileImg src={default_profile_icon} />
              </ProfileImgBox>
              <ContentContainer $isMine={isMine}>
                <InfoBox $isMine={isMine}>
                  <UserName>{nickname}</UserName>
                  <OpinTitle $isMine={isMine}>{topicSubTitle}</OpinTitle>
                </InfoBox>
                <Content $isHot={isHot}>{content}</Content>
              </ContentContainer>
            </TopBox>
            <IconBtn
              isHot={isHot}
              onClick={(e, isHot) => onClickHeart(e, isHot)}
            >
              <IconImg $isHot={isHot} $isLikeClicked={isLikeClicked} />
              <LikeCount>{likeCnt}</LikeCount>
            </IconBtn>
          </OpinionBox>
          <UserActionBtn
            $isMine={isMine}
            $isList={isList}
            onClick={(e) => onClickReport(e)}
          >
            <ReOpinTxt>신고하기</ReOpinTxt>
            <SirenIcon>
              <img src={SIREN} />
            </SirenIcon>
          </UserActionBtn>
        </>
      )}
    </OpinionWrapper>
  );
};

const OpinionWrapper = styled.div`
  width: ${({ $isHot }) => ($isHot ? `100%` : `85%`)};
  box-shadow: 0 0 1px gray;
  border-radius: 15px;
  padding: 5px 10px;
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
  justify-content: space-between;
  align-items: center;
`;
const TopBox = styled.div`
  display: flex;
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
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? `row-reverse` : `row`)};
  align-items: end;
  margin: 5px 5px 5px 8px;
  gap: 5px;
`;
const UserName = styled.div`
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  white-space: nowrap;
`;
const OpinTitle = styled.div`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.DARK_PURPLE};
  white-space: nowrap;
`;
const Content = styled.div`
  margin-left: 8px;
  padding: 0 1px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  text-align: start;
  line-height: 1.1;
  word-break: break-all;
`;
const IconBtn = styled.button`
  height: 42px;
`;
const IconImg = styled.img.attrs((props) => ({
  src: props.$isHot ? FIRE : props.$isLikeClicked ? HEART_FULL : HEART_EMPTY,
  alt: "icon",
}))`
  width: 30px;
  height: 30px;
`;
const LikeCount = styled.p`
  margin-top: -5px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;
const UserActionBtn = styled.div`
  width: auto;
  height: 20px;
  margin-right: auto;
  display: ${({ $isList }) => ($isList ? `none` : `inline-flex`)};
  align-items: center;
  gap: 6px;
`;
const ReOpinTxt = styled.button`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  white-space: nowrap;
`;
const SirenIcon = styled.button`
  padding-top: 2px;
`;

export default Opinion;
