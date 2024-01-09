import React from "react";
import Header from "../components/Header";
import OrderForm from "../components/OrderForm"
import PizzaDescription from "../components/PizzaDescription";
import NewPizzaForm from "../components/NewPizzaForm";



const OrderPizza = () => {
  return (
    <>
    <Header>
    </Header>
    <PizzaDescription/>
    <NewPizzaForm id='pizza-form'/>
    </>
  );
};
export default OrderPizza;
