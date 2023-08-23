import Opinion from "../components/Opinion";
import styled from "styled-components";
import DEFAULT_IMG from "../assets/logo.png";

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
        <MyOpin isMine={true} isList={true} />
        <MyOpin isMine={true} />
        <MyOpin isMine={true} />
        <MyOpin isMine={true} />
        <MyOpin isMine={true} />
        <MyOpin isMine={true} />
      </MyOpinList>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const MyOpin = styled(Opinion)`
  margin: 10px auto 0 auto;
  width: 98%;
  align-self: center;
  justify-self: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  padding: 10px;
  display: flex;
  gap: 20px;
`;
const ProfileImgBox = styled.div`
  width: 80px;
  height: 80px;
  margin: 2px;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
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
`;
const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const MBTI = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.DARK_PURPLE};
`;
const Email = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
`;
const MyOpinList = styled.div`
  margin-top: 20px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export default MyOpinionPage;
