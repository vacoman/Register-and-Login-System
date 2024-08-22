import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Login from './Login';
//import RegisterButton from './RegisterButton';
import reportWebVitals from './reportWebVitals';
import Navegation from './Nav';
import Register from './Register';
import LoginButton from './LoginButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegation />
    <Register />
    <LoginButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
