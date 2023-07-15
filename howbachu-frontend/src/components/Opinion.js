import styled from "styled-components";
import PROFILE_PURPLE from "../assets/default-profile-img-purple.png"

const Opinion = ({className, isMine}) => {
    return (
        <OpinionWrapper className={className} isMine={isMine}>
            <OpinionBox>
                <ProfileImgBox>
                    <ProfileImg src={PROFILE_PURPLE}/>
                </ProfileImgBox>
                <ContentContainer isMine={isMine}>
                    <InfoBox isMine={isMine}>
                        <UserName>말랑카우</UserName>
                        <OpinTitle >찍먹이다!</OpinTitle>
                    </InfoBox>
                    <Content>탕수육 맛있겠다 탕수육 야호 ~~~~~~~</Content>
                </ContentContainer>
            </OpinionBox>
        </OpinionWrapper>
    );
};

const OpinionWrapper = styled.div`
  min-width: 200px;
  max-width: 80%;
  box-shadow: 0 0 1px gray;
  border-radius: 8px;
  padding: 5px;
  background-color: ${({isMine, theme}) => isMine? `white` : theme.colors.PURPLE1};
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
export default Opinion;