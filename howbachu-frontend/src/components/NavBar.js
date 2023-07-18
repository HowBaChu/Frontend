import styled from "styled-components";
import HOME_ICON from "../assets/home_icon.png"
import SERCH_ICON from "../assets/search_icon.png"
import LIKE_ICON from "../assets/good_icon.png"
import MYPAGE_ICON from "../assets/mypage_icon.png"
import {useNavigate} from "react-router-dom";

const NavBar = ({className}) => {
    const navigate = useNavigate();
    return (
        <Nav className={className}>
            <Menu onClick={() => navigate("/")}>
                <Icon src={HOME_ICON}/>
            </Menu>
            <Menu onClick={() => navigate("/serch")}>
                <Icon src={SERCH_ICON}/>
            </Menu>
            <Menu onClick={() => navigate("/likes")}>
                <Icon src={LIKE_ICON}/>
            </Menu>
            <Menu onClick={() => navigate("/profile")}>
                <Icon src={MYPAGE_ICON}/>
            </Menu>
        </Nav>
    );
};

const Nav = styled.nav`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`
const Menu = styled.button`
  width: 100%;
  background: none;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Icon = styled.img`
  width: 22px;
  height: 22px;
`

export default NavBar;