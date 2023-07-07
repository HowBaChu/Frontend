import styled from "styled-components";

const NavBar = ({className}) => {
    return (
        <Nav className={className}>
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
  display: flex;
  justify-content: space-around;
`
const Menu = styled.button`
  width: 100%;
  background: none;
  border: 1px solid #252525;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
`

export default NavBar;