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
    <NewPizzaForm/>
    <OrderForm id='pizza-form'/> _buraya artık yeni for m gelecek_
    </>
  );
};
export default OrderPizza;
