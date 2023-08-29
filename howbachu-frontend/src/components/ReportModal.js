import styled from "styled-components";
import { useState } from "react";
import REPORT_LIST from "../assets/data/report_reasons_data";

const ReportModal = ({ closeModal }) => {
  const [selectReport, setSelectReport] = useState(undefined);

  return (
    <ModalContainer onClick={() => closeModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>신고 사유 선택</Title>
        <ReasonList>
          {REPORT_LIST.map((reason, index) => (
            <Reason
              key={reason.title}
              onClick={() => setSelectReport(index)}
              $selected={selectReport}
              index={index}
            >
              <ReasonTxt $selected={selectReport} index={index}>
                {reason.title}
              </ReasonTxt>
              <DetailTxt $selected={selectReport} index={index}>
                {reason.detail}
              </DetailTxt>
            </Reason>
          ))}
        </ReasonList>
        <SubmitBtn disabled={selectReport === undefined} type="submit">
          신고하기
        </SubmitBtn>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(208, 208, 208, 0.6);
  backdrop-filter: blur(1px);
  position: fixed;
  z-index: 1;
`;
const Modal = styled.div`
  width: 360px;
  height: 560px;
  margin: 150px auto 0 auto;
  background-color: white;
  border-radius: 8px;
`;
const Title = styled.p`
  padding: 13px;
  font-size: 22px;
  font-weight: 600;
`;
const ReasonList = styled.div``;

const Reason = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 55px;
  cursor: pointer;
  background-color: ${({ $selected, index, theme }) => {
    if ($selected === index) {
      return theme.colors.PURPLE3;
    } else if (index % 2 === 0) {
      return theme.colors.DIV_BG_LIGHT_PURPLE;
    } else {
      return "white";
    }
  }};
}
`;
const ReasonTxt = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $selected, index, theme }) =>
    $selected === index ? `white` : theme.colors.DARK_GRAY};
`;
const DetailTxt = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ $selected, index, theme }) =>
    $selected === index ? theme.colors.BG_GRAY : theme.colors.GRAY};
`;

const SubmitBtn = styled.button`
  display: block;
  margin: 18px auto 0 auto;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  font-size: 15px;
  font-weight: 700;
  color: white;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.TXT_GRAY};
  }
`;

export default ReportModal;
