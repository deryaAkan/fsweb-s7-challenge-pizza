import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import mvpBanner from "../Assets/mvp-banner.png"

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%
`;

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

const Motto = styled.h1`
  color: white;
  font-size: 70px;
  width: 100%;
  margin: 0 auto;
  padding: 5% 0 2% 0 ;
`;

const AciktimLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 40px;
  text-decoration: none;
  color: black; 
  background-color: #FDC913; 
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;
  font-size: 15px;

  &:hover {
    background-color: #fdd342; 
    color: black; 
  }
  

  &.active {
    background-color: #fdd342; 
    color: black; 
  }
`;

const HomePage = () => {
  return (
    <>
      <RootContainer>
        <Header/>
        <StyledBackground>
          <Motto>
            KOD ACIKTIRIR, <br/>
            PİZZA DOYURUR.
          </Motto>
          <div>
            <AciktimLink to="/pizza" id="order-pizza">ACIKTIM</AciktimLink>
          </div>
        </StyledBackground>
      </RootContainer>
    </>
  );
};

export default HomePage;
