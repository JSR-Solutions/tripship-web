import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";

const firebaseConfig = {
    apiKey: "AIzaSyCH1nnrIIzQztaOt0Qi1QWXfQBOWe-5FbI",
    authDomain: "tripshrip-752e9.firebaseapp.com",
    projectId: "tripshrip-752e9",
    storageBucket: "tripshrip-752e9.appspot.com",
    messagingSenderId: "790251777580",
    appId: "1:790251777580:web:25c93299868be58f55eb89",
    measurementId: "G-8YDS10SQHR"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

AOS.init({duration: 1500});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);