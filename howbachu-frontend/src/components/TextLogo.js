import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const TextLogo = () => {
    const navigate = useNavigate();
    return (
        <LogoBox>
            <Button onClick={() => navigate("/")}>
                <Colored>하우바츄</Colored><br/>
                HowBaChu
            </Button>
        </LogoBox>
    );
};

const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: ${({theme}) => theme.colors.BG_PURPLE};
  padding: 30px 0 30px 30px;
`
const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`
const Colored = styled.span`
  color: ${({theme}) => theme.colors.DARK_PURPLE};
`

export default TextLogo;