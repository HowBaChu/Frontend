import styled from "styled-components";

const InfoInput = ({title}) => {
    return (
        <InfoInputBox>
            <InputTitle>{title}</InputTitle>
            <InputContainer>
                <Input type="text" id="inputField"/>
            </InputContainer>
        </InfoInputBox>
    );
};

const InfoInputBox = styled.div`
  width: 280px;
  flex-direction: column;
  align-items: start;
`
const InputTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: ${({theme}) => theme.colors.DARK_PURPLE};
`
const InputContainer = styled.div`
  box-shadow: 0 0 1px gray;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  margin: 5px 10px;
  border: none;
  font-size: 16px;
  color: ${({theme}) => theme.colors.DARK_GRAY};
`

export default InfoInput;