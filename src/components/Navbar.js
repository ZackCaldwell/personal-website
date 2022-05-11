import React from "react";
import { FaBars } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a className="logo" href="/">zack</a>
                <ul className="nav-menu">
                    <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                </ul>
                <button id="hire">Hire Me</button>
                <div id="mobile-icon"><FaBars /></div>
            </div>
        </nav>
    );
};

export default Navbar;