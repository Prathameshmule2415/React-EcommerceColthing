import React from "react";
import "./signin_and_signup.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/signup/signup.component";
const SigninAndSignup = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SigninAndSignup;
