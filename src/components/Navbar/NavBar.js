import './NavBar.scss';
import React from 'react';
import suitcase from '../../images/svgs/suitcase.svg';

export const NavBar = () => {
    const Logo = () => {
        return (
            <div>
                <a href="/">
                    <div className="logo-wrap">
                        <div id="logo" className="logo" alt="Brand logo">
                            <img
                                src={suitcase}
                                alt="suitcase"
                                width="100"
                                height="40"
                            />
                        </div>
                    </div>
                </a>
            </div>
        );
    };

    const Navbar = () => {
        return (
            <nav>
                <ul className="navbar">
                    <li>
                        <a href="/suggestion">All services</a>
                    </li>
                    <li>
                        <a href="#">Dropdown menu cities</a>
                    </li>
                    <li>
                        <a href="#"> something else</a>
                    </li>
                </ul>
            </nav>
        );
    };

    const Header = () => {
        return (
            <header>
                <div className="h-container">
                    <Logo />
                    <Navbar />
                </div>
            </header>
        );
    };

    return (
        <>
            <Header />
        </>
    );
};
