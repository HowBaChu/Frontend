import styled from "styled-components";

const NavBar = () => {
    return (
        <Nav>
            <Menu>홈</Menu>
            <Menu>검색</Menu>
            <Menu>좋아요</Menu>
            <Menu>마이</Menu>
        </Nav>
    );
};


const Nav = styled.nav`
  width: 100%;
  overflow: hidden;
`
const Menu = styled.button`
  float: left;
  width: 25%;
  background: none;
  border: 1px solid #252525;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
`

export default NavBar;