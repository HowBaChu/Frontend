import styled from "styled-components";
import { DeleteOpin } from "../api/DeleteOpin";

const DeleteModal = ({ closeModal, opinId }) => {
  const onSubmit = () => {
    DeleteOpin(opinId);
  };

  return (
    <ModalContainer onClick={() => closeModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Title>댓글 삭제 {opinId}</Title>
        <Content>댓글을 삭제할까요?</Content>
        <SubmitBtn onClick={onSubmit}>삭제하기</SubmitBtn>
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
  margin: 330px auto 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  overflow: scroll;
`;
const Title = styled.p`
  white-space: pre-line;
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;

const Content = styled.div`
  padding: 20px 20px 20px 10px;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
`;

const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
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

export default DeleteModal;
