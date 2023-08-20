import Opinion from "../components/Opinion";
import styled from "styled-components";
import DEFAULT_IMG from "../assets/logo.png";

const MyOpinionPage = () => {
    return (
        <PageWrapper>
            <InfoContainer>
                <ProfileImgBox>
                    <ProfileImg src={DEFAULT_IMG}/>
                </ProfileImgBox>
                <InfoTxt>
                    <UserName>
                        하우바츄
                    </UserName>
                    <MBTI>
                        INTJ
                    </MBTI>
                    <p>howbachu@naver.com</p>
                </InfoTxt>
            </InfoContainer>
            <ButtonBox>
                <Button />
                <Button />
            </ButtonBox>
            <MyOpinList>
                <Opin className="list"/>
                <Opin className="list"/>
                <Opin className="list"/>
                <Opin className="list"/>
                <Opin className="list"/>
                <Opin className="list"/>
                <Opin className="list"/>
            </MyOpinList>
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`
const Opin = styled(Opinion)`
  &.list {
    margin: 10px auto 0 auto;
    width: 98%;
    align-self: center;
    justify-self: center;
  }
`
const InfoContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 5px;
  display: flex;
  gap: 20px;
`
const ProfileImgBox = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0 0 3px ${({theme}) => theme.colors.DARK_GRAY};
  border-radius: 25px;
  overflow: hidden;
`
const ProfileImg = styled.img`
  width: 100px;
`
const InfoTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`
const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`
const MBTI = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.DARK_PURPLE};
`
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`
const Button = styled.button`
  margin-right: 5px;
  width: 50px;
  height: 20px;
  border: 1px solid ${({theme}) => theme.colors.DARK_GRAY};
  border-radius: 8px;
`
const MyOpinList = styled.div`
  margin-top: 20px;
  height: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

export default MyOpinionPage;