import firebase, { firestore } from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, Data) => {
  if (!userAuth) return;
  const userRef = firesotre.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const CreatedAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        CreatedAt,
        ...Data,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
