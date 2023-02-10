import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIFOT54dsdZ45Y0ES2H6-P0eO0yLRkIEo",
  authDomain: "granhand-join-c230e.firebaseapp.com",
  projectId: "granhand-join-c230e",
  storageBucket: "granhand-join-c230e.appspot.com",
  messagingSenderId: "538446459432",
  appId: "1:538446459432:web:eda95b19d372ebee0cfb1d",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
