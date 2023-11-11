import styled from "styled-components";
import { useEffect, useState } from "react";
import { GetReport } from "../api/GetReport";

const ReportPage = () => {
  const [reportsData, setReportsData] = useState([]);

  useEffect(() => {
    GetReport((reportList) => setReportsData(reportList));
  }, []);

  return (
    <PageContainer>
      <TitleBox>
        <Title>받은 신고 내역</Title>
        <WarningMsg>3회 누적 신고 시 영구 제한됩니다.</WarningMsg>
      </TitleBox>
      <ReportItemWrapper>
        {reportsData.map((report, index) => (
          <Report key={report.content}>
            <Date>{report.date.split("T")[0]}</Date>
            <Msg>
              <Reason>{report.reason}</Reason>
              {report.content}
            </Msg>
            <Count>{index + 1}회</Count>
          </Report>
        ))}
      </ReportItemWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
`;
const TitleBox = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.DARK_GRAY};
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const WarningMsg = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;
const ReportItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Report = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Date = styled.p`
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TOMATO};
`;
const Msg = styled.p`
  max-width: 50vw;
  padding: 0 2vw;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.TXT_GRAY};
`;
const Reason = styled.p`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const Count = styled.div`
  width: 50px;
  height: 20px;
  align-self: center;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  border-radius: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  line-height: 20px;
  text-align: center;
`;

export default ReportPage;
