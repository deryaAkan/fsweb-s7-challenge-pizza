import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pizza" component={OrderPizza}>
        </Route>
        <Route path="/success" component={Success}>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
