import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/add-account">Add Account</Link></li>
                <li><Link to="/emails">Email List</Link></li>
                <li><Link to="/sync-status">Sync Status</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
