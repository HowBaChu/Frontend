import styled from "styled-components";

const OpinDeleteModal = ({ closeDelModal }) => {
  return (
    <ModalContainer onClick={() => closeDelModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>삭제하시겠습니까?</Title>
        <Buttons>
          <Btn>취소</Btn>
          <Btn>확인</Btn>
        </Buttons>
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
  width: calc(100vw - 30px);
  height: 20vh;
  margin: 280px auto 0 auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
`;
const Title = styled.p`
  white-space: pre-line;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  margin: 25px;
  color: ${({ theme }) => theme.colors.PURPLE3};
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Btn = styled.button`
  width: 30%;
  height: 34px;
  color: white;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  border-radius: 5px;
  background-color: ${({ theme, type }) =>
    type === "cancel" ? theme.colors.GRAY : theme.colors.PURPLE3};
`;

export default OpinDeleteModal;
