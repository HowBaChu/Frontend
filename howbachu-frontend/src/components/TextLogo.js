import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/text_logo.svg";

const TextLogo = () => {
  const navigate = useNavigate();
  return (
    <LogoBox>
      <Button onClick={() => navigate("/")}>
        <img src={logo} alt={logo} />
      </Button>
    </LogoBox>
  );
};

const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.BG_PURPLE};
  padding: 30px 0 30px 16px;
`;
const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;

export default TextLogo;
