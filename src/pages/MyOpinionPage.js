import Opinion from "../components/Opinion";
import styled from "styled-components";
import DEFAULT_IMG from "../assets/imgs/logo.png";

const MyOpinionPage = () => {
  return (
    <PageWrapper>
      <InfoContainer>
        <ProfileImgBox>
          <ProfileImg src={DEFAULT_IMG} />
        </ProfileImgBox>
        <InfoTxt>
          <InfoBox>
            <UserName>하우바츄</UserName>
            <MBTI>INTJ</MBTI>
          </InfoBox>
          <Email>howbachu@naver.com</Email>
        </InfoTxt>
      </InfoContainer>
      <MyOpinList>
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕"
        />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
        />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!!!! ! ! ! !! !  !"
        />
        <MyOpin isMine={true} isList={true} content="탕 수 육" />
        <MyOpin
          isMine={true}
          isList={true}
          content="나는 찍어먹는게 좋아 !!~!~!!!!!!!!!!!!~!~~~~~~~~~~~~~~~~~~~~~"
        />
        <MyOpin isMine={true} isList={true} content="부어서 먹기" />
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
        />
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕 탕탕탕탕탕탕탕탕탕"
        />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
        />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!!!! ! ! ! !! !  !"
        />
        <MyOpin isMine={true} isList={true} content="탕 수 육" />
        <MyOpin
          isMine={true}
          isList={true}
          content="나는 찍어먹는게 좋아 !!~!~!!!!!!!!!!!!~!~~~~~~~~~~~~~~~~~~~~~"
        />
        <MyOpin isMine={true} isList={true} content="부어서 먹기" />
        <MyOpin isMine={true} isList={true} content="탕수육 맛있겠다" />
        <MyOpin
          isMine={true}
          isList={true}
          content="탕 수 육 맛 있 겠 다 !!!!!! !! ! ! !!!!!!! !! ! !"
        />
      </MyOpinList>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
  padding-top: 10px;
`;

const MyOpin = styled(Opinion)`
  margin: 0 auto;
  width: 98%;
  align-self: center;
  justify-self: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.DARK_GRAY};
  padding: 10px;
  display: flex;
  gap: 6%;
`;
const ProfileImgBox = styled.div`
  width: 80px;
  height: 80px;
  margin: 2px;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
const InfoTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  //flex-wrap: wrap;
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
const Email = styled.p`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.GRAY};
  word-break: break-all;
`;
const MyOpinList = styled.div`
  margin: 10px 0;
  //height: 550px;

  height: calc(100vh - 70px - 50px - 130px); // 헤더, Nav, 상단 요소

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: scroll;
`;

export default MyOpinionPage;