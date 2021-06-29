import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';
import { createBrowserHistory } from 'history';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

const firebaseConfig = {
  apiKey: 'AIzaSyCdxtxrAle5FDE33LpqKFSSfVn5Kysvfic',
  authDomain: 'mini-twitter-ffd82.firebaseapp.com',
  projectId: 'mini-twitter-ffd82',
  storageBucket: 'mini-twitter-ffd82.appspot.com',
  messagingSenderId: '251752021580',
  appId: '1:251752021580:web:66f60b6d94b1cc8043bee9',
  measurementId: 'G-HEPDS3ET9C',
};

firebase.initializeApp(firebaseConfig);

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
