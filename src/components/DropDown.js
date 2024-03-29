import styled from "styled-components";
import OPTION_DATA from "../assets/data/option_data";

const DropDown = ({ mbti, onValueChange }) => {
  return (
    <InfoInputBox>
      <InputContainer>
        <Select
          name="mbti"
          value={mbti}
          onChange={(e) => onValueChange(e.target.value)}
        >
          {OPTION_DATA.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </Select>
      </InputContainer>
    </InfoInputBox>
  );
};
const InfoInputBox = styled.div`
  width: 100%;

  flex-direction: column;
  align-items: start;
`;
const InputContainer = styled.div`
  height: ${({ textArea }) => (textArea ? `120px` : `40px`)};
  padding: 0 15px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.TXT_GRAY};
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
`;
const Select = styled.select`
  margin-bottom: 10px;
  margin-top: 10px;
  outline: 0;
  color: black;
  border: none;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  padding: 4px;
  border-radius: 9px;
`;

export default DropDown;
