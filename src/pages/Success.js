import React from "react";
import Header from "../components/Header";
import './Success.css';


const Success = ({ pizzaOrderData }) => {
  
  if (!pizzaOrderData || !pizzaOrderData.formData) {
    
    return <p>Loading...</p>; 
  }

  return (
    <>
      <div className="success-main-container">
        <Header />
        <div className="background-div">
          <div className="congrats-div">
            <p style={{ fontSize: "20px", color: "#FDC913", fontFamily: "cursive" }}>lezzetin yolda</p>
            <h3>SİPARİŞ ALINDI</h3>
            <hr></hr>
          </div>
          <h4 style={{fontSize: "20px"}}>{pizzaOrderData.formData.name}</h4>
            <p>Hamur: {pizzaOrderData.formData.dough}</p>
            <p>Boyut: {pizzaOrderData.formData.size}</p>
             <div className="order-result">
              <h4>Sipariş Toplamı</h4>
              <h5>Seçimler {pizzaOrderData.formData.selectedToppings.length * 5}₺</h5>
              <h5>Toplam {pizzaOrderData.formData.price}₺ </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
