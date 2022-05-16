import './NavBar.scss';
import React from 'react';

export const NavBar = () => {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check"></input>
            <div className="nav-header">
                <div className="nav-title">Travel Suggestion System</div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/suggestion">Suggestions</a>
            </div>
        </div>
    );
};
