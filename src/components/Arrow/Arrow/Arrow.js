import React from 'react';
import PropTypes from 'prop-types';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

import './Arrow.scss';

export const NextArrow = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="customArrowNext"
            type="button"
        >
            <FaAngleRight />
        </button>
    );
};

export const PrevArrow = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="customArrowPrev"
            type="button"
        >
            <FaAngleLeft />
        </button>
    );
};

NextArrow.propTypes = {
    onClick: PropTypes.func,
};

PrevArrow.propTypes = {
    onClick: PropTypes.func,
};
