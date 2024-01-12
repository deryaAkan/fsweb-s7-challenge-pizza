import React from "react";
import Header from "../components/Header";
import "./Success.css";

const Success = ({ pizzaOrderData }) => {
  console.log("pizzaOrderData:", pizzaOrderData);

  if (!pizzaOrderData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="success-main-container">
        <Header />
        <div className="background-div">
          <div className="congrats-div">
            <p
              style={{
                fontSize: "20px",
                color: "#FDC913",
                fontFamily: "cursive",
              }}
            >
              lezzetin yolda
            </p>
            <h3 id="siparis-success">SİPARİŞ ALINDI</h3>
            <hr className="congrats-div"></hr>
          </div>
          <div id="pizza-receipt">
            <h4 style={{ fontSize: "15px", color: "white" }}>
              {pizzaOrderData.name}
            </h4>
            <p style={{ color: "white" }}>Hamur: {pizzaOrderData.dough}</p>
            <p style={{ color: "white" }}>Boyut: {pizzaOrderData.size}</p>
            <p style={{ color: "white" }}>
              Ek Malzemeler: {pizzaOrderData.toppings.join(", ")}
            </p>
          </div>
          <div className="order-result">
            <h4 style={{ color: "white" }}>Sipariş Toplamı</h4>
            <h5 style={{ color: "white" }}>Seçimler 50₺</h5>
            <h5 style={{ color: "white" }}>
              Toplam {pizzaOrderData.totalPrice}₺{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
