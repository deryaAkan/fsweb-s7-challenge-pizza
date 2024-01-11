import React from "react";
import LogoSvg from "../Assets/logo.svg";
import './Header.css';



function Header () {

    return  (
    <>
    <header>
    <img  id="headerImg" src={LogoSvg} alt="Logo" />
    </header>
    </>)

}

export default Header;