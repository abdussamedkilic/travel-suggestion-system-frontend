import './NavBar.scss';
import React from 'react';

export const NavBar = () => {
    return (
        <nav role="navigation">
            <ul>
                <li>
                    <a href="/">
                        <div className="Logo">Travel Suggestion System</div>
                    </a>
                </li>
                <li>
                    <a href="/Cities" aria-haspopup="true">
                        Two
                    </a>
                    <ul class="dropdown" aria-label="submenu">
                        <li>
                            <a href="/cities1">Sub-1</a>
                        </li>
                        <li>
                            <a href="/cities2">Sub-2</a>
                        </li>
                        <li>
                            <a href="/cities3">Sub-3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/suggestion">Three</a>
                </li>
            </ul>
        </nav>
    );
};
