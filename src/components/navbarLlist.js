import React from 'react';
import {Link} from 'react-router-dom';

const navbarList = () => {
    return (
        <>
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
        </>
    )
}

export default navbarList;