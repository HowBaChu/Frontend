import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/imgs/text_logo.svg";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoBox>
      <Button onClick={() => navigate("/")}>
        <Img src={logo} alt={logo} />
      </Button>
    </LogoBox>
  );
};

const LogoBox = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.BG_PURPLE};
  padding: 15px;
`;
const Button = styled.button`
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  text-align: left;
`;
const Img = styled.img`
  height: 40px;
`;

export default Logo;
