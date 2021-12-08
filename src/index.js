import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebasedb from "./firebase";


import NavBar from './components/NavBar';
import Alumni from './Alumni';
import Student from './components/Student'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

const pageContent = (val) => {
  //document.getElementById('mainPage').innerHTML(<Alumni/>)
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Alumni/>}/>
            <Route exact path="/student" element={<Student/>}/>
          </Routes>
      </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();