import React from "react";
import Header from "../components/Header";
import PizzaDescription from "../components/PizzaDescription";
import OrderForm from "../components/OrderForm";

const OrderPizza = ({ handlePizzaOrder }) => {
  return (
    <>
      <Header />
      <PizzaDescription />
      <OrderForm handlePizzaOrder={handlePizzaOrder} />
    </>
  );
};

export default OrderPizza;
