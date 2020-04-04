import React from "react";
import "./App.css";
import Homepage from "./pages.component/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages.component/shop/shop.component";
import Header from "./components/Header/header.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
