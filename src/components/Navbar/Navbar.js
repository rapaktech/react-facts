import './Navbar.css';
import React from "react";
import logo from "../../logo.svg";

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={logo} className="nav--icon" alt="React logo" />
                <h3 className='nav--icon-text'>React Facts</h3>
                <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )
}
