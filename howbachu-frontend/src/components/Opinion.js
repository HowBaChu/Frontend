import styled from "styled-components";
import PROFILE_PURPLE from "../assets/default-profile-img-purple.png"
import FIRE_PURPLE from "../assets/fire-purple.png"
import FIRE_WHITE from "../assets/fire-white.png"

const Opinion = ({className, isMine, isHot, hotColor, opinList}) => {
    return (
        <OpinionWrapper className={className} isMine={isMine} isHot={isHot} hotColor={hotColor} opinList={opinList}>
            <OpinionBox>
                <ProfileImgBox>
                    <ProfileImg src={PROFILE_PURPLE}/>
                </ProfileImgBox>
                <ContentContainer isMine={isMine}>
                    <InfoBox>
                        <UserName>말랑카우</UserName>
                        <OpinTitle isMine={isMine}>찍먹이다!</OpinTitle>
                    </InfoBox>
                    <Content>
                        탕수육 맛있겠다 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    </Content>
                </ContentContainer>
                {isHot &&
                    <FireIconBox>
                        <FireIconImg isMine={isMine} />
                    </FireIconBox>
                }
            </OpinionBox>
        </OpinionWrapper>
    );
};

const OpinionWrapper = styled.div`
  max-width: ${({ isHot, opinList }) => (isHot || opinList ? "320px" : "80%")};
  min-width: ${({ isHot }) => (isHot ? "320px" : "200px")};
  box-shadow: 0 0 1px gray;
  border-radius: 8px;
  padding: 5px;
  background-color: ${({isMine, theme}) => isMine? `white` : theme.colors.PURPLE1};
  background-color: ${({hotColor, theme}) => hotColor && theme.colors.HOT_PINK };
  align-self: ${({isMine}) => isMine? `end` : `start`};
`
const OpinionBox = styled.div`
  display: flex;
  align-items: center;
`
const ProfileImgBox = styled.div`
  min-width: 40px;
  min-height: 40px;
  margin-left: 10px;
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
  color: ${({isMine, theme}) => isMine? theme.colors.DARK_GRAY : `white`};
`
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
`
const UserName = styled.div`
  font-weight: bold;
`
const OpinTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: ${({isMine, theme}) => isMine? theme.colors.YELLOW2 : theme.colors.YELLOW1};
  margin-left: 5px;
`
const Content = styled.div`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 500;
  text-align: start;
  line-height: 1.1;
  word-break: break-all;
`
const FireIconBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`
const FireIconImg = styled.img.attrs(props => ({
    src: props.isMine ? FIRE_PURPLE : FIRE_WHITE,
    alt: "fire_icon"
}))`
  width: 30px;
  height: 30px;
`

export default Opinion;