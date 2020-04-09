import React from "react";
import "./App.css";
import Homepage from "./pages.component/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
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

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninAndSignup />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
