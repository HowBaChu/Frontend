import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/imgs/text_logo.svg";

const Logo = () => {
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
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  text-align: left;
`;

export default Logo;
