import React, {useEffect} from 'react';

import {useState} from 'react';
import database from '../firebase';
import CollegeList from './CollegeList';
//import AlumniList from './components/AlumniList';

function College() {
//Event Variables
const [eventName, setEventName] = useState();
const [eventDate, setEventDate] = useState();
const [eventVenue , setEventVenue] = useState();

//Workshop Variables
const [workshopName, setWorkshopName] = useState();
const [workshopDate, setWorkshopDate] = useState();
const [workshopVenue , setWorkshopVenue] = useState();



// SubmitEvent Function
const submitEvent = () => {
	if (eventName != null && eventDate != null){
		database.ref("college").child("news_feed").child("events").child(eventName).set({
			date: eventDate,
            venue: eventVenue
			}).catch(alert);
	}
}

// SubmitWorkshop Function
const submitWorkshop = () => {
	if (workshopName != null && workshopDate != null){
		database.ref("college").child("news_feed").child("workshop").child(workshopName).set({
			date: workshopDate,
            venue: workshopVenue
			}).catch(alert);
	}
}

return (
	<div style={{marginTop : 30}}>
	<center>
    
	<h2>Event Data</h2>
    <input placeholder="Enter Event Name" value={eventName}
	onChange={(e) => setEventName(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter Event Date" value={eventDate}
	onChange={(e) => setEventDate(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter Event Venue" value={eventVenue}
    onChange={(e) => setEventVenue(e.target.value)}/>
    <br/><br/>
	<button onClick={submitEvent}>Submit</button><br/><br/><br />

    <h2>Workshop Data</h2>
    <input placeholder="Enter Workshop Name" value={workshopName}
	onChange={(e) => setWorkshopName(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter Workshop Date" value={workshopDate}
	onChange={(e) => setWorkshopDate(e.target.value)}/>
	<br/><br/>
	<input placeholder="Enter Workshop Venue" value={workshopVenue}
    onChange={(e) => setWorkshopVenue(e.target.value)}/>
    <br/><br/>
	<button onClick={submitWorkshop}>Submit</button><br/><br/><br />
    {<CollegeList/>}
	</center>
	</div>
);
}
export default College;
