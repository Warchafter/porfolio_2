import React from 'react';
import "./css/NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div id="header-menu-outer">
        <div className='table'>
            <ul id="horizontal-list">
                <li>
                    <Link to="/">a</Link>
                </li>
                <li>
                    <Link to="/b">b</Link>
                </li>
                <li>
                    <Link to="/c">c</Link>
                </li>
                <li>
                    <Link to="/d">d</Link>
                </li>
            </ul>
        </div>
    </div>

    )
}

export default NavBar;