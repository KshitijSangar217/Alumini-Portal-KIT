import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand">AlumniPortal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class='nav-link' to="/">Alumni</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/student">Student</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/college">College</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/alumnilist">Alumni List</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/studentlist">Student List</Link>
                    </li>
                    <li class="nav-item">
                        <Link class='nav-link' to="/collegelist">College List</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>  
    )
}
