import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Root2 = styled.div`
display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%
`;

const SuccessBackground = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #CE2829;
background-size: cover;
background-position: center;
height: 80vh;
text-align: center;
width: 100%
`;

const Congrats = styled.p`
color: white;
  font-size: 40px;
  width: 100%;
  padding: 10% 0 0 0;
  margin: 0 auto;
`;



const Success = () => {
  return (
    <>
     <Root2>
        <Header/>
        <SuccessBackground>
          <Congrats>
            TEBRİKLER! <br/>
            SİPARİŞİNİZ ALINDI!
          </Congrats>
        </SuccessBackground>
      </Root2>
    </>
  );
};
export default Success;
