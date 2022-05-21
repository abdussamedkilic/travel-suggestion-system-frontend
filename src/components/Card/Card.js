import './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

// 3rd party
import { NavLink } from 'react-router-dom';

export const Card = (props) => {
    return (
        <div className="card-container">
            {props.places &&
                props.places.map((place, index) => (
                    <NavLink
                        className="card"
                        style={{ backgroundImage: `url(${place.image})` }}
                        key={`place_${index}`}
                        to={'/places/place/'}
                        onClick={() => {
                            props.setSelectedPlace(place);
                        }}
                    >
                        <div className="card-content">
                            <h2 className="card-title">
                                {place.name} / {place.location}
                            </h2>
                        </div>
                    </NavLink>
                ))}
        </div>
    );
};

Card.propTypes = {
    places: PropTypes.array,
    setSelectedPlace: PropTypes.func,
};
