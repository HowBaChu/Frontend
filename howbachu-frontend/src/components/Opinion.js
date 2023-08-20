import styled from "styled-components";
import PROFILE_PURPLE from "../assets/default-profile-img-purple.png"
import FIRE_WHITE from "../assets/fire-white.png"
import HEART from "../assets/empty_heart_icon.png"


const Opinion = ({isMine, isHot, className}) => {
    return (
        <OpinionWrapper isMine={isMine} isHot={isHot} className={className}>
            <OpinionBox isMine={isMine}>
                <ProfileImgBox>
                    <ProfileImg src={PROFILE_PURPLE}/>
                </ProfileImgBox>
                <ContentContainer isMine={isMine}>
                    <InfoBox isMine={isMine}>
                        <UserName>말랑카우</UserName>
                        <OpinTitle isMine={isMine}>찍먹이다!</OpinTitle>
                    </InfoBox>
                    <Content>
                        탕수육 맛있겠다 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    </Content>
                </ContentContainer>
                <IconBox>
                    <IconImg isHot={isHot}/>
                </IconBox>
            </OpinionBox>
        </OpinionWrapper>
    );
};

const OpinionWrapper = styled.div`
  width: ${({isHot}) => isHot ? `100%` : `80%`};
  box-shadow: 0 0 1px gray;
  border-radius: 8px;
  padding: 5px 10px;
  background-color: ${({isMine, theme}) => isMine ? `white` : theme.colors.PURPLE1};
  background-color: ${({isHot, theme}) => isHot && theme.colors.HOT_PINK};

  align-self: ${({isMine}) => isMine ? `end` : `start`};
  align-self: ${({isHot}) => isHot  && `center`};
`
const OpinionBox = styled.div`
  display: flex;
  flex-direction: ${({isMine, className}) => isMine ? `row-reverse` : `row`};
  justify-content: space-between;
  align-items: center;
`


const ProfileImgBox = styled.div`
  min-width: 40px;
  min-height: 40px;
  background-color: ${({theme}) => theme.colors.LIGHT_PURPLE};
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
`
const ContentContainer = styled.div`
  padding: 5px;
  color: ${({theme}) => theme.colors.DARK_GRAY};
`
const InfoBox = styled.div`
  display: flex;
  flex-direction: ${({isMine}) => isMine ? `row-reverse` : `row`};
  align-items: end;
  margin: 5px;
  gap: 5px;
`
const UserName = styled.div`
  font-weight: bold;
`
const OpinTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.DARK_PURPLE};
`
const Content = styled.div`
  max-width: 230px;
  margin: 3px 0 0 5px;
  font-size: 11px;
  font-weight: 500;
  text-align: start;
  line-height: 1.1;
  word-break: break-all;
`
const IconBox = styled.div`
  width: 30px;
  height: 30px;
`
const IconImg = styled.img.attrs(props => ({
    src: props.isHot ? FIRE_WHITE : HEART,
    alt: "icon"
}))`
  width: 30px;
  height: 30px;
`

export default Opinion;