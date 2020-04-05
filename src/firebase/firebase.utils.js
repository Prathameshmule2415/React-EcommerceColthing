import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCosyDrTsJsnbWJlE7MwsNCaJaspIQ7N9E",
  authDomain: "ecommerceclothing-21fc5.firebaseapp.com",
  databaseURL: "https://ecommerceclothing-21fc5.firebaseio.com",
  projectId: "ecommerceclothing-21fc5",
  storageBucket: "ecommerceclothing-21fc5.appspot.com",
  messagingSenderId: "995192211937",
  appId: "1:995192211937:web:606ca9fbdd10d7ee0e2aa0",
  measurementId: "G-0FBM4W83EJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// trying to implement facebook sign in

// const provider = new firebase.auth.FacebookAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithFacebook = () => auth.signInWithPopup(provider);

export default firebase;
