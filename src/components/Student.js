import React from 'react'

import {useState} from 'react';
import database from '../firebase';
import StudentList from './StudentList';
//import AlumniList from './components/AlumniList';

export default function Student() {
    const [prn, setPrn] = useState();
    const [name , setName] = useState();
    const [email, setEmail] = useState();
    const [address , setAddress] = useState();
    const [cgpa, setCgpa] = useState();
    const [dept, setDept] = useState();
    const [div, setDiv] = useState();
    const [passYr, setPassyr] = useState();
    const [streamType, setStreamType] = useState();

    // submitStudent Function
    const submitStudent = () => {
        if (name != null && prn != null){
            database.ref("student").child(String(prn)).set({
                name : name,
                email: email,
                address: address,
                cgpa: cgpa,
                department: dept,
                division: div,
                passingYear: passYr,
                target: streamType
                }).catch(alert);
        }
    }

    return (
        <div className="App" style={{marginTop : 10}}>
        <center>
        <h2>Student Data</h2>
        <input placeholder="Enter your PRN" value={prn}
        onChange={(e) => setPrn(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your name" value={name}
        onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your email ID" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your Address" value={address}
        onChange={(e) => setAddress(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your CGPA" value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your Department" value={dept}
        onChange={(e) => setDept(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your Division" value={div}
        onChange={(e) => setDiv(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your Passing Year" value={passYr}
        onChange={(e) => setPassyr(e.target.value)}/>
        <br/><br/>
        <div align="center" marginLeft="20">
            Select your Goal:<br/>
            <input type="radio" name="streamtype" value="job" onChange={(e) => setStreamType(e.target.value)}/>Job<br/>
            <input type="radio" name="streamtype" value="civil_services" onChange={(e) => setStreamType(e.target.value)}/>Civil Services<br/>
            <input type="radio" name="streamtype" value="masters" onChange={(e) => setStreamType(e.target.value)}/>Masters<br/>
        </div>
        <br />
        
        <button onClick={submitStudent}>Submit</button><br/><br/>
        
        {<StudentList/>}
        </center>
        </div>
    )
}
