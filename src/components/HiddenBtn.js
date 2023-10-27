import styled from 'styled-components';
import OPEN_EYE from '../assets/imgs/eye_open.svg'
import CLOSE_EYE from '../assets/imgs/eye_close.svg'

const HiddenBtn = ({ toggleEye, eyeState }) => {
  let eye = eyeState ? OPEN_EYE : CLOSE_EYE;
  return (
    <StyledBtn>
      <BtnIcon src={eye} onClick={() => toggleEye()} />
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  align-self: center;
`;
const BtnIcon = styled.img`
  width: 18px;
  height: 18px;
`;
export default HiddenBtn;
