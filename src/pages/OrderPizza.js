import React from "react";
import Header from "../components/Header";
import OrderForm from "../components/OrderForm"
import PizzaDescription from "../components/PizzaDescription";


const OrderPizza = () => {
  return (
    <>
    <Header>
    </Header>
    <PizzaDescription/>
    <OrderForm id='pizza-form'/>
    </>
  );
};
export default OrderPizza;
