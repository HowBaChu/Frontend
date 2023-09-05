import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HOME_ICON from "../assets/imgs/home_icon.svg";
import SERCH_ICON from "../assets/imgs/search_nav_icon.svg";
import MYPAGE_ICON from "../assets/imgs/person_icon.svg";
import CROWN_ICON from "../assets/imgs/crown_nav_icon.svg";

const NavBar = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Nav className={className}>
      <Menu onClick={() => navigate("/")}>
        <Icon src={HOME_ICON} />
      </Menu>
      <Menu onClick={() => navigate("/serch")}>
        <Icon src={SERCH_ICON} />
      </Menu>
      <Menu onClick={() => navigate("/popular-posts")}>
        <Icon src={CROWN_ICON} />
      </Menu>
      <Menu onClick={() => navigate("/profile")}>
        <Icon src={MYPAGE_ICON} />
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  background-color: white;
`;
const Menu = styled.button`
  width: 100%;
  background: none;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  scale: 0.8;
`;

export default NavBar;
