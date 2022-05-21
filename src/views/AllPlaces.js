import React from 'react';
import PropTypes from 'prop-types';

// project imports
import { Card } from '../components/Card/Card';
import Loader from '../components/Loader/Loader';
import * as Constansts from '../constants';

// 3rd party
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

export const AllPlaces = (props) => {
    const { isLoading, isError, data, error } = useQuery(
        'get_all_users',
        () => {
            return fetch(`${Constansts.LOCAL_ENDPOINT}/places/allPlaces/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                mode: 'cors',
            }).then((res) => res.json());
        }
    );

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        toast.error(`Something went wrong ${error}`, {
            toastId: 'only once',
        });
    }

    const filteredData = data.filter((place) => {
        if (place.location === props.selectedCity) {
            return place;
        }
        return null;
    });

    return (
        <>
            <Card
                places={filteredData.length === 0 ? data : filteredData}
                setSelectedPlace={props.setSelectedPlace}
            />
        </>
    );
};

AllPlaces.propTypes = {
    selectedCity: PropTypes.string,
    setSelectedCity: PropTypes.func,
    setSelectedPlace: PropTypes.func,
};
