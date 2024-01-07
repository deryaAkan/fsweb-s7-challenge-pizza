import React from "react";
import styled from "styled-components";
import LogoSvg from "../Assets/logo.svg";



const HeaderT = styled.header`
  background-color: #CE2829;
  background-size: cover;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
`;

const Logo = styled.img`
  width: 35%;
  margin-top: auto;
`;

function Header () {

    return  (
    <>
    <HeaderT>
    <Logo src={LogoSvg} alt="Logo" />
    </HeaderT>
    </>)

}

export default Header;