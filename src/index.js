import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebasedb from "./firebase";
import AlumniList from './components/AlumniList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AlumniList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();