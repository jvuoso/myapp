import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBiurvNHJaM0ewk4F1AkeFChiChN_FJ5SE",
  authDomain: "coderhouse-ecommerce-a8540.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a8540",
  storageBucket: "coderhouse-ecommerce-a8540.appspot.com",
  messagingSenderId: "366342950492",
  appId: "1:366342950492:web:fa69decaf74d5fddd62099"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
