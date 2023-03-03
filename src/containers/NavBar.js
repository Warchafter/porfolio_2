import React from 'react';
import "./css/NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <div id="header-menu-outer">
        <div className='table'>
            <ul id="horizontal-list">
                <li className='list-item-nav'>
                    a
                </li>
                <li>
                    b
                </li>
                <li>
                    c
                </li>
                <li>
                    d
                </li>
            </ul>
        </div>
    </div>

    )
}

export default NavBar;