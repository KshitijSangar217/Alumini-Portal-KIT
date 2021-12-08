import React, {useState, useEffect} from 'react'
import firebase from 'firebase'

export default function CollegeList() {

    // Fetching Data from DATABASE
    const [collegeEventList, setCollegeEventList] = useState();
    const [collegeWorkshopList, setCollegeWorkshopList] = useState();
    useEffect(() => {
        const collegeEventRef = firebase.database().ref("college").child("news_feed").child("events");
        collegeEventRef.on('value', (snapshot) =>{
            //Displaying data in console
            console.log(snapshot.val())

            const collegeEventSnap = snapshot.val();
            const collegeEventList = [];
            for(let id in collegeEventSnap){
                collegeEventList.push({id, ...collegeEventSnap[id]});
            }   
            console.log(collegeEventList);
            setCollegeEventList(collegeEventList);

        });

        const collegeWorkshopRef = firebase.database().ref("college").child("news_feed").child("workshop");
        collegeWorkshopRef.on('value', (snapshot) =>{
            //Displaying data in console
            console.log(snapshot.val())

            const collegeWorkshopSnap = snapshot.val();
            const collegeWorkshopList = [];
            for(let id in collegeWorkshopSnap){
                collegeWorkshopList.push({id, ...collegeWorkshopSnap[id]});
            }   
            console.log(collegeWorkshopList);
            setCollegeWorkshopList(collegeWorkshopList);

        });

    }, []);

    const deleteAlumni = (studentID) => {
        console.log(studentID)
        //const alumniRef = firebase.database().ref("alumni").child(alumniID);
        /*
        <th>Action</th>

        <td><button onClick={()=> deleteAlumni} id={alumni.id}>Delete</button></td>
        */
    }

    const capitalizeFirst = (s) =>{
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return (
        <div style={{marginBottom:100}}>
            <hr />
            <center>
            <h3>List of Events</h3>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Venue</th>
                        </tr>
                        {collegeEventList ?
                         collegeEventList.map((collegeEvent, index)=>( 
                            <tr>
                                <td>{capitalizeFirst(collegeEvent.id)}</td>
                                <td>{collegeEvent.date}</td>
                                <td>{collegeEvent.venue}</td>
                            </tr>
                        )) : ""}
                    </table>
                </div> 
                <br /><br />
                <h3>List of Workshops</h3>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Venue</th>
                        </tr>
                        {collegeWorkshopList ?
                         collegeWorkshopList.map((collegeWorkshop, index)=>( 
                            <tr>
                                <td>{capitalizeFirst(collegeWorkshop.id)}</td>
                                <td>{collegeWorkshop.date}</td>
                                <td>{collegeWorkshop.venue}</td>
                            </tr>
                        )) : ""}
                    </table>
                </div>
            </center>
        </div>
    )
}
