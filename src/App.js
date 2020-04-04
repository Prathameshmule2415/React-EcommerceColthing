import React from "react";
import "./App.css";
import Homepage from "./pages.component/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages.component/shop/shop.component";
import Header from "./components/Header/header.component";
import SigninAndSignup from "./pages.component/sign_in_and_sign_up/signin_and_signup.component";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
}

export default App;
