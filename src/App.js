import React from "react";
import "./App.css";
import Homepage from "./pages.component/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages.component/shop/shop.component";
import Header from "./components/Header/header.component";
import SigninAndSignup from "./pages.component/sign_in_and_sign_up/signin_and_signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.action";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((Snapshot) => {
          setCurrentUser({
            id: Snapshot.id,
            ...Snapshot.data(),
          });
        });
      }

      setCurrentUser({ userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
