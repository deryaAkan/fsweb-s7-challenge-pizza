// Success.js

import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const SuccessRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  background-color: #ce2829;
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

const Congrats = styled.div`
  color: white;
  font-size: 80px;
  width: 100%;
`;

const OrderResult = styled.div`
  border: 1px solid white;
  padding: 10px;
  font-family; 'Roboto Condensed', sans serif;
  width: 200px;
  text-align: flex-start;
`;

const Success = ({ pizzaOrderData }) => {
  if (!pizzaOrderData || !pizzaOrderData.formData) {
    
    return <p>Loading...</p>; 
  }

  return (
    <>
      <SuccessRoot>
        <Header />
        <SuccessBackground>
          <Congrats>
            <p style={{ fontSize: "20px", color: "#FDC913", fontFamily: "cursive" }}>lezzetin yolda</p>
            SİPARİŞ ALINDI
            <hr style={{ width: "600px" }}></hr>
          </Congrats>
          <h4 style={{color: "white", fontSize: "20px"}}>{pizzaOrderData.formData.name}</h4>
            <p style={{color: "white"}}>Hamur: {pizzaOrderData.formData.dough}</p>
            <p style={{color: "white"}}>Boyut: {pizzaOrderData.formData.size}</p>
             <OrderResult>
              <h4 style={{color: "white"}}>Sipariş Toplamı</h4>
              <h5 style={{color: "white"}}>Seçimler {pizzaOrderData.formData.selectedToppings.length * 5}₺</h5>
              <h5 style={{color: "white"}}>Toplam    110{pizzaOrderData.formData.price.quantity}₺ </h5>
          </OrderResult>
        </SuccessBackground>
      </SuccessRoot>
    </>
  );
};

export default Success;
