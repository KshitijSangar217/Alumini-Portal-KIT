import React, {useState, useEffect} from 'react'
import firebase from 'firebase';

export default function RowAlumni(alumni) {
    const deleteAlumni = (alumniID) => {
        //console.log(alumniID)
        const alumniRef = firebase.database().ref("alumni").child(alumni.id);
        alumniRef.remove();
        
    }
    return (
        <tr>
            <td>{alumni.id}</td>
            <td>{alumni.name}</td>
            <td>{alumni.department}</td>
            <td>{alumni.address}</td>
            <td>{alumni.passing_year}</td>
            <td>{alumni.cgpa}</td>
            <td><button onClick={deleteAlumni} id={alumni.id}>Delete</button></td>
        </tr>
    )
}
