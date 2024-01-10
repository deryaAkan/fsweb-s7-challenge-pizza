// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";

const App = () => {
  const [pizzaOrderData, setPizzaOrderData] = useState(null);

  const handlePizzaOrder = (data) => {
    setPizzaOrderData(data);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/pizza"
          render={(props) => (
            <OrderPizza {...props} handlePizzaOrder={handlePizzaOrder} />
          )}
        />
        <Route
          path="/success"
          render={(props) => <Success {...props} pizzaOrderData={pizzaOrderData} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
