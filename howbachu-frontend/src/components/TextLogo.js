import React from 'react';
import styled from "styled-components";

const TextLogo = () => {
    return (
        <LogoBox>
            <p>
                <Colored>하우바츄</Colored><br />
                HowBaChu
            </p>
        </LogoBox>

    );
};

const LogoBox = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: rgba(255, 255, 255);
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  padding: 30px 0 30px 30px;
`
const Colored = styled.span`
  color: rebeccapurple;
`
export default TextLogo;