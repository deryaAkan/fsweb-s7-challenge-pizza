import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import OrderPizza from "./pages/OrderPizza";
import Success from './pages/Success';
import Menu from "./pages/Menu";
import NewPizzaForm from "./components/NewPizzaForm";

const App = () => {
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
  
    console.log('Pizza Order:', formData);
    console.log('API Response:', apiResponse);

    setPizzaOrderData({ formData, apiResponse });
  };
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pizza" exact component={OrderPizza}>
      <NewPizzaForm onPizzaOrder={handlePizzaOrder} formData={formData} setFormData={setFormData} />
      </Route>
      <Route path="/success" exact component={Success}>
      <Success pizzaOrderData={pizzaOrderData} />
      </Route>
      <Route path="/menu" exact component={Menu} />
    </Switch>
  </Router>
  );
};

export default App;
