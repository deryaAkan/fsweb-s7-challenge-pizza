import React from "react";
import Header from "../components/Header";
import styled from "styled-components";


const SuccessRoot = styled.div`
display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%
  background-color: #CE2829;
  background-size: cover;
`;

const SuccessBackground = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #ce2829;
  background-size: cover;
  background-position: center;
  height: 150vh;
  text-align: center;
  width: 100%;
  align-items: center;
`;

const Congrats = styled.p`
  color: white;
  font-size: 90px;
  width: 100%;
`;

const OrderResult = styled.div`
  border: 1px solid white;
  padding: 10px;
  width: 200px;
  height: 30vh;
`;

const Success = () => {
 
  return (
    <>
      <SuccessRoot>
        <Header />
        <SuccessBackground>
          <Congrats>
          <p style={{ fontSize: "20px", color: "#FDC913" }}>lezzetin yolda</p>
            SİPARİŞ ALINDI
            <hr style={{ width: "600px" }}></hr>
            <p style={{ fontSize: "20px" }}>Position Absolute Acı Pizza</p>
          </Congrats>
          <OrderResult>
          </OrderResult>
        </SuccessBackground>
      </SuccessRoot>
    </>
  );
};
export default Success;
