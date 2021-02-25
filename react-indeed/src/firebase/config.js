import app from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRx79jThLahsWfeU__JAIRO8H2Btzvwm8",
    authDomain: "react-indeed.firebaseapp.com",
    projectId: "react-indeed",
    storageBucket: "react-indeed.appspot.com",
    messagingSenderId: "217156600591",
    appId: "1:217156600591:web:164427820a39af4e68b47a"
  };
  // Initialize Firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();

  export {firebase, firestore, app};
