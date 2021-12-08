import React, {useEffect} from 'react';

import {useState} from 'react';
import database from './firebase';
import AlumniList from './components/AlumniList';

function Alumni() {
const [prn, setPrn] = useState();
const [name , setName] = useState();
const [address , setAddress] = useState();
const [cgpa, setCgpa] = useState();
const [dept, setDept] = useState();
const [passYr, setPassyr] = useState();
const [streamType, setStreamType] = useState();



// SubmitAlumni Function
const submitAlumni = () => {
	if (name != null && prn != null){
		database.ref("alumni").child(String(prn)).set({
			name : name,
			address: address,
			cgpa: cgpa,
			department: dept,
			passing_year: passYr,
			type: streamType
			}).catch(alert);
	}
}

return (
	<div className="App" style={{marginTop : 30}}>
	<center>
	<h2>Alumni Data</h2>
	<input placeholder="Enter your PRN" value={prn}
	onChange={(e) => setPrn(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter your name" value={name}
	onChange={(e) => setName(e.target.value)}/>
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
	<input placeholder="Enter your Passing Year" value={passYr}
	onChange={(e) => setPassyr(e.target.value)}/>
	<br/><br/>
	<div align="center" marginLeft="20">
		Select your Stream:<br/>
		<input type="radio" name="streamtype" value="job" onChange={(e) => setStreamType(e.target.value)}/>Job<br/>
		<input type="radio" name="streamtype" value="civil_services" onChange={(e) => setStreamType(e.target.value)}/>Civil Services<br/>
		<input type="radio" name="streamtype" value="masters" onChange={(e) => setStreamType(e.target.value)}/>Masters<br/>
	</div>
	<br />
	
	<button onClick={submitAlumni}>Submit</button><br/><br/>
	{<AlumniList/>}
	</center>
	</div>
);
}
export default Alumni;
