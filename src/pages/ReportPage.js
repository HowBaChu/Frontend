import styled from "styled-components";

const ReportPage = () => {
  return (
    <PageContainer>
      <TitleBox>
        <Title>받은 신고 내역</Title>
        <WarningMsg>3회 누적 신고 시 영구 제한됩니다.</WarningMsg>
      </TitleBox>
      <ReportItemWrapper>
        <Report>
          <Date>2023.05.02</Date>
          <Msg>바보야</Msg>
          <Count>1회</Count>
        </Report>
        <Report>
          <Date>2023.05.14</Date>
          <Msg>으악</Msg>
          <Count>2회</Count>
        </Report>
        <Report>
          <Date>2023.09.28</Date>
          <Msg>바보</Msg>
          <Count>정지</Count>
        </Report>
      </ReportItemWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 345px;
  height: 690px;
  margin: 110px auto 0 auto;
`;
const TitleBox = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-size: 20px;
  font-weight: 700;
`;
const WarningMsg = styled.p`
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  font-size: 10px;
  font-weight: 400;
`;
const ReportItemWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
const Report = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Date = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: tomato;
`;
const Msg = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
`;
const Count = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  border-radius: 5px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
`;

export default ReportPage;