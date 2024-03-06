import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "./firebaseConfig";

const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

// Whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});

// Apply the default browser language preference

auth.useDeviceLanguage();

export const signInWithGooglePopup = () =>
  firebase.signInWithPopup(auth, provider);

//for mobile it is better to use redirect
export const signInWithGoogleRedirect = () =>
  firebase.signInWithRedirect(auth, provider);
export const getGoogleRedirectResult = () => firebase.getRedirectResult(auth);
