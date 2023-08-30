import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import REPORT_LIST from "../assets/data/report_reasons_data";

const ReportModal = ({ closeModal }) => {
  const [selectReport, setSelectReport] = useState(undefined);
  const [isOther, setIsOther] = useState(false);

  useEffect(() => {
    setIsOther(selectReport === REPORT_LIST.length - 1);
  }, [selectReport]);

  useEffect(() => {
    console.log(isOther);
  }, [isOther]);

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
              $isOther={isOther}
            >
              <Content>
                <ReasonTxt $selected={selectReport} index={index}>
                  {reason.title}
                </ReasonTxt>
                <DetailTxt $selected={selectReport} index={index}>
                  {reason.detail}
                </DetailTxt>
              </Content>
            </Reason>
          ))}
          {/*마지막 index(기타)인 경우에만 입력 가능*/}
          {isOther && (
            <ReasonInputBox>
              <InputBox>
                <Input placeholder="신고 사유를 입력해주세요." type="text" />
              </InputBox>
            </ReasonInputBox>
          )}
        </ReasonList>
        <SubmitBtn disabled={selectReport === undefined} type="submit">
          신고하기
        </SubmitBtn>
      </Modal>
    </ModalContainer>
  );
};

const expandScale = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

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
  overflow: scroll;
`;
const Title = styled.p`
  padding: 20px;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const ReasonList = styled.div``;
const ReasonInputBox = styled.div`
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  transform-origin: top; // 애니메이션의 기준점을 상단으로 설정
  animation: ${expandScale} 0.4s forwards;
`;
const InputBox = styled.div`
  width: 330px;
  margin: -1px 0 0 15px;
  padding: 0 10px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const Input = styled.input`
  width: 190px;
  margin: 5px 10px 5px 0;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.DARK_GRAY};
`;
const Reason = styled.div`
  padding: 15px;
  width: 100%;
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
`;
const Content = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 18px;
`;
const ReasonTxt = styled.p`
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ $selected, index, theme }) =>
    $selected === index ? `white` : theme.colors.DARK_GRAY};
`;
const DetailTxt = styled.p`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ $selected, index, theme }) =>
    $selected === index ? theme.colors.BG_GRAY : theme.colors.GRAY};
`;
const SubmitBtn = styled.button`
  display: block;
  margin: 20px auto;
  width: 160px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.PURPLE3};
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: white;
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.TXT_GRAY};
  }
`;

export default ReportModal;
