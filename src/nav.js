import React from 'react';
import './nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <img src="/images/logo.png" alt="Logo" className="nav-logo" />
            <div>
                <div className="nav-heading">Eightfold Alliance</div>
                <div className="nav-tagline">Eightfold Strength, Infinite Possibilities</div>
            </div>
            <p><strong>Team No: 6</strong></p>
        </div>
    );
};

export default Nav;
