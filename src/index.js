import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import firebasedb from "./firebaseData";

import NavBar from './components/NavBar';
import Alumni from './Alumni';
import Student from './components/Student';
import College from './components/College';

import AlumniList from './components/AlumniList';
import StudentList from './components/StudentList';
import CollegeList from './components/CollegeList';
//import App from './components/Chat';
/*import App from './components/Chat';*/
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
            <Route exact path="/college" element={<College/>}/>
            <Route exact path="/alumnilist" element={<AlumniList/>}/>
            <Route exact path="/studentlist" element={<StudentList/>}/>
            <Route exact path="/collegelist" element={<CollegeList/>}/>
          </Routes>
      </BrowserRouter>      
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();