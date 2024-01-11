import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import mvpBanner from "../Assets/mvp-banner.png"
import './HomePage.css';
import Footer from "../components/Footer";


const StyledBackground = styled.div`
  background-image: url(${mvpBanner});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  width: 100%
`;

const HomePage = () => {
  return (
    <>
      <div className="rootContainer">
        <Header/>
        <StyledBackground>
          <div className="home-background" id="motto">
            KOD ACIKTIRIR, <br/>
            PİZZA DOYURUR.
          </div>
          <div>
            <NavLink to="/pizza" id="order-pizza">ACIKTIM</NavLink>
          </div>
        </StyledBackground>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
