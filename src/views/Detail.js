import './Detail.scss';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//project imports
import { NextArrow, PrevArrow } from '../components/Arrow/Arrow';
import Loader from '../components/Loader/Loader';
import * as Constansts from '../constants';

// 3rd party
import Slider from 'react-slick';
import Rating from '@mui/material/Rating';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';

const DetailCard = ({ onePlace, setSelectedPlace }) => (
    <NavLink
        className="card"
        style={{ backgroundImage: `url(${onePlace.image})` }}
        to={'/places/place/'}
        onClick={() => {
            setSelectedPlace(onePlace);
        }}
    >
        <div className="card-content">
            <h2 className="card-title">
                {onePlace.name} / {onePlace.location}
            </h2>
        </div>
    </NavLink>
);

DetailCard.propTypes = {
    onePlace: PropTypes.object,
    setSelectedPlace: PropTypes.func,
};

export const Detail = ({ place, setSelectedPlace }) => {
    const slideSettings = {
        infinite: false,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: false,
    };

    const { isLoading, isError, data, error, refetch } = useQuery(
        'get_place_detail',
        () => {
            return fetch(
                `${Constansts.LOCAL_ENDPOINT}/top10similar/${place.location}/${place.name}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    mode: 'cors',
                }
            ).then((res) => res.json());
        }
    );

    useEffect(() => {
        if (place) {
            refetch();
        }
    }, [place, refetch]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        toast.error(`Something went wrong ${error}`, {
            toastId: 'only once',
        });
    }

    return (
        <div className="profile_container">
            <div className="profile_img_infos">
                <div className="profile_img_section">
                    <img
                        className="profile_img-LG"
                        src={place.image}
                        alt="place_image"
                    />
                    <div className="flag_wrapper">
                        <img
                            className="flag"
                            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/flag-turkey_1f1f9-1f1f7.png"
                            alt="turkey_flag"
                        />
                    </div>
                </div>

                <div className="info">
                    <ul>
                        <li>
                            <div className="link_img_wrapper">
                                <img
                                    className="link_img"
                                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/round-pushpin_1f4cd.png"
                                    alt=""
                                />
                            </div>
                            <p>{place.name}</p>
                        </li>
                        <li>
                            <div class="link_img_wrapper">
                                <img
                                    class="link_img"
                                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png"
                                    alt=""
                                />
                            </div>
                            <p>{place.location}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="profile_desc_section">
                <div className="profile_description">
                    <h3>Description : </h3>
                    <p className="description">{place.detail}</p>
                </div>
                <hr />

                <div className="profile_details">
                    <h3>Details : </h3>
                    <div className="interests">
                        <span className="interests_item">
                            Type : {place.type}
                        </span>
                        <span className="interests_item">
                            Rating :
                            <Rating
                                name="customized-10"
                                defaultValue={place.rating / 2}
                                max={5}
                                precision={0.5}
                                readOnly
                            />
                        </span>
                    </div>
                </div>
                <hr />

                <div className="profile_comments">
                    <h3>Comments : </h3>
                    <div className="commentSection">
                        <Slider {...slideSettings}>
                            {place.comments.map((comment, index) => (
                                <span key={`comment_${index}`}>{comment}</span>
                            ))}
                        </Slider>
                    </div>
                </div>
                <hr />

                <div className="profile_top_ten">
                    <h3>Top 10 Similar Place: </h3>
                    <div className="commentSection">
                        <Slider {...slideSettings}>
                            {data.map((onePlace, index) => (
                                <DetailCard
                                    onePlace={onePlace}
                                    setSelectedPlace={setSelectedPlace}
                                    key={`detailCard_${index}`}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

Detail.propTypes = {
    place: PropTypes.object,
    setSelectedPlace: PropTypes.func,
};

export default Detail;
