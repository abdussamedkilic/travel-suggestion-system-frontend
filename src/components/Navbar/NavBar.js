import './NavBar.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// project imports
import suitcase from '../../images/svgs/suitcase.svg';

// 3rd party
import { NavLink } from 'react-router-dom';

export const NavBar = (props) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const citiesName = ['Istanbul', 'Ankara'];

    const Logo = () => {
        return (
            <div>
                <NavLink
                    to="/"
                    onClick={() => {
                        props.setSelectedCity('');
                        setOpenDropDown(false);
                    }}
                >
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
                </NavLink>
            </div>
        );
    };

    const MenuItems = (city, index) => {
        return (
            <li className="menu-items" key={`city_${index}`}>
                <NavLink
                    to={`/places/${city}`}
                    onClick={() => {
                        props.setSelectedCity(city);
                        setOpenDropDown(false);
                    }}
                >
                    {city}
                </NavLink>
            </li>
        );
    };

    const Navbar = () => {
        return (
            <nav>
                <ul className="navbar">
                    <li>
                        <NavLink
                            to="/places"
                            onClick={() => {
                                props.setSelectedCity('');
                                setOpenDropDown(false);
                            }}
                        >
                            All Places
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => setOpenDropDown(!openDropDown)}>
                            Dropdown menu cities
                        </button>
                        <ul
                            className={`dropdown ${openDropDown ? 'show' : ''}`}
                        >
                            {openDropDown &&
                                citiesName.map((city, index) =>
                                    MenuItems(city, index)
                                )}
                        </ul>
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

NavBar.propTypes = {
    selectedCity: PropTypes.string,
    setSelectedCity: PropTypes.func,
};
