import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAyCAquwRY4dshjGhQLroovpH4oBB5C_8A",
  authDomain: "cv-maker-6e537.firebaseapp.com",
  databaseURL: "https://cv-maker-6e537.firebaseio.com",
  projectId: "cv-maker-6e537",
  storageBucket: "cv-maker-6e537.appspot.com",
  messagingSenderId: "723339987021",
  appId: "1:723339987021:web:040022d428ddc49ce53404",
  measurementId: "G-HF7K550KXB"
};
// Initialize Firebase
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
