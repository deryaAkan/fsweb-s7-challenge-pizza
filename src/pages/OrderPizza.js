import React from "react";
import Header from "../components/Header";
import PizzaDescription from "../components/PizzaDescription";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer";

const OrderPizza = ({ handlePizzaOrder }) => {
  return (
    <>
      <Header />
      <PizzaDescription />
      <OrderForm handlePizzaOrder={handlePizzaOrder} />
      <Footer />
    </>
  );
};

export default OrderPizza;
