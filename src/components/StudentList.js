import React, {useState, useEffect} from 'react'
import firebase from 'firebase'

export default function StudentList() {

    // Fetching Data from DATABASE
    const [studentList, setStudentList] = useState();
    useEffect(() => {
        const studentRef = firebase.database().ref("student");
        studentRef.on('value', (snapshot) =>{
            //Displaying data in console
            console.log(snapshot.val())

            const studentSnap = snapshot.val();
            const studentList = [];
            for(let id in studentSnap){
                studentList.push({id, ...studentSnap[id]});
            }   
            console.log(studentList);
            setStudentList(studentList);

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

    return (
        <div class="memberlist" style={{marginBottom:100}}>
            <center>
            <h1>List of Students</h1>
                <div>
                    
                    <table>
                        <tr>
                            <th>PRN</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Division</th>
                            <th>Address</th>
                            <th>Passing Year</th>
                            <th>CGPA</th>
                        </tr>
                        {studentList ?
                         studentList.map((student, index)=>( 
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.department}</td>
                                <td>{student.div}</td>
                                <td>{student.address}</td>
                                <td>{student.passing_year}</td>
                                <td>{student.cgpa}</td>
                            </tr>
                        )) : ""}
                    </table>
                </div> 
            </center>
        </div>
    )
}
