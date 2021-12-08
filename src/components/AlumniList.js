import React, {useState, useEffect} from 'react'
import firebase from 'firebase';

export default function AlumniList() {

    // Fetching Data from DATABASE
    const [alumniList, setAlumniList] = useState();
    useEffect(() => {
        const alumniRef = firebase.database().ref("alumni");
        alumniRef.on('value', (snapshot) =>{
            //Displaying data in console
            console.log(snapshot.val())

            const alumniSnap = snapshot.val();
            const alumniList = [];
            for(let id in alumniSnap){
                alumniList.push({id, ...alumniSnap[id]});
            }   
            console.log(alumniList);
            setAlumniList(alumniList);

        });
    }, []);

    const deleteAlumni = (alumniID) => {
        console.log(alumniID)
        //const alumniRef = firebase.database().ref("alumni").child(alumniID);
        /*
        <th>Action</th>

        <td><button onClick={()=> deleteAlumni} id={alumni.id}>Delete</button></td>
        */
    }

    return (
        <div style={{marginBottom:100}}>
            <hr />
            <center>
            <h1>List of Alumni</h1>
                <div>
                    
                    <table>
                        <tr>
                            <th>PRN</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Address</th>
                            <th>Passing Year</th>
                            <th>CGPA</th>
                        </tr>
                        {alumniList ?
                         alumniList.map((alumni, index)=>( 
                            <tr>
                                <td>{alumni.id}</td>
                                <td>{alumni.name}</td>
                                <td>{alumni.email}</td>
                                <td>{alumni.department}</td>
                                <td>{alumni.address}</td>
                                <td>{alumni.passing_year}</td>
                                <td>{alumni.cgpa}</td>
                            </tr>
                        )) : ""}
                    </table>
                </div>  
                
            </center>
        </div>
    )
}
