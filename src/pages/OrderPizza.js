import React, {useState} from "react";
import Header from "../components/Header";
import PizzaDescription from "../components/PizzaDescription";
import OrderForm from "../components/OrderForm";




const OrderPizza = () => {
  const [pizzaOrderData, setPizzaOrderData] = useState(null);
  const [formData, setFormData] = useState({
    name: "Position Absolute Acı Pizza",
    toppings: [],
    size: "",
    extras: [],
    fullName: "",
    orderNote: "",
    selectedToppings: [],
    price: 85.5,
  });

  const handlePizzaOrder = (formData, apiResponse) => {
    console.log("Pizza Order:", formData);
    console.log("API Response:", apiResponse);

    setPizzaOrderData({ formData, apiResponse });
  };
  return (
    <>
    <Header/>
    <PizzaDescription/>
    <OrderForm onPizzaOrder={handlePizzaOrder}
            formData={formData}
            setFormData={setFormData}/>
    </>
  ); 
};
export default OrderPizza;
