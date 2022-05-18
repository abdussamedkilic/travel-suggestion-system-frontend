import './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

//project imports
import { NextArrow, PrevArrow } from '../Arrow/Arrow/Arrow';

// 3rd party
import Slider from 'react-slick';

export const Card = (props) => {
    const slideSettings = {
        infinite: false,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: false,
    };
    console.log(props.places);

    return (
        <div className="card-container">
            {props.places &&
                props.places.map((place, index) => (
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${place.image})` }}
                        key={`place_${index}`}
                    >
                        <div className="card-content">
                            <h2 className="card-title">
                                {place.name} / {place.location}
                            </h2>
                            <p className="card-body">{place.detail}</p>
                            <div className="features">
                                <p className="card-body">Type : {place.type}</p>
                                <p className="card-body">
                                    Rating: {place.rating}
                                </p>
                            </div>
                            <div className="comment-body">
                                <Slider {...slideSettings}>
                                    {place.comments.map((comment, index) => (
                                        <p key={`comment_${index}`}>
                                            {comment}
                                        </p>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

Card.propTypes = {
    places: PropTypes.array,
};
