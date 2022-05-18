import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// project imports
import { Card } from '../components/Card/Card';
import Loader from '../components/Loader/Loader';
import * as Constansts from '../constants';
import { get } from '../utils/functions/fetchWrapper';

// 3rd party
import { toast } from 'react-toastify';

export const AllPlaces = (props) => {
    // const [filteredPlaces, setFilteredPlaces] = useState([]);
    // const [showLoader, setShowLoader] = useState(false);

    // useEffect(() => {
    //     const getAllPlaces = async () => {
    //         const response = await fetch(
    //             'http://47c0-31-141-33-198.ngrok.io/api/place/places/allPlaces/'
    //         );
    //         const data = await response.json();
    //         console.log({ data });
    //     };

    //     getAllPlaces();
    // }, []);

    // if (showLoader) {
    //     return <Loader />;
    // }

    return (
        <>
            <Card />
        </>
    );
};

AllPlaces.propTypes = {
    selectedCity: PropTypes.string,
    setSelectedCity: PropTypes.func,
};
