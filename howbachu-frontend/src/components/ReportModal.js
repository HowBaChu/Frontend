import styled from "styled-components";

const ReportModal = ({ closeModal }) => {
  return (
    <ModalContainer onClick={() => closeModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>신고하기 모달</Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(208, 208, 208, 0.4);
  backdrop-filter: blur(1px);
  position: fixed;
  z-index: 1;
`;
const Modal = styled.div`
  width: 350px;
  height: 560px;
  margin: 150px auto 0 auto;
  padding: 20px;
  background-color: white;

  border-radius: 8px;
`;

export default ReportModal;
