import { useEffect, useState } from "react";
import { GetMyOpin } from "../api/GetMyOpin";
import { GetProfileDetail } from "../api/GetProfileDetail";
import Opinion from "../components/Opinion";
import styled from "styled-components";
import DEFAULT_IMG from "../assets/imgs/logo.png";

const MyOpinionPage = () => {
  const [myOpins, setMyOpins] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    GetProfileDetail((profileDetail) => setUserInfo(profileDetail));
  }, []);

  const { avatar, email, mbti, username } = userInfo;

  const fetchMyOpins = async () => {
    try {
      const response = await GetMyOpin();
      setMyOpins(response?.data?.data || []);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchMyOpins();
  }, []);

  return (
    <PageWrapper>
      <InfoContainer>
        <ProfileImgBox>
          <ProfileImg src={avatar || DEFAULT_IMG} />
        </ProfileImgBox>
        <InfoTxt>
          <InfoBox>
            <UserName>{username || "하우바츄"} </UserName>
            <MBTI>{mbti || "INFP"} </MBTI>
          </InfoBox>
          <Email>{email || "howbachu@naver.com"} </Email>
        </InfoTxt>
      </InfoContainer>

      <MyOpinList>
        {myOpins?.content?.map((opin) => {
          return (
            <MyOpin
              key={opin.id}
              opinContent={opin}
              isMine={true}
              isList={true}
              avatar={avatar}
            />
          );
        })}
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
  object-fit: cover;
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
  height: calc(100vh - 70px - 50px - 130px); // 헤더, Nav, 상단 요소
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: scroll;
`;

export default MyOpinionPage;
