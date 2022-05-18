import './Card.scss';
import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../Arrow/Arrow/Arrow';

export const Card = () => {
    const slideSettings = {
        infinite: false,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        variableWidth: false,
    };

    const dummyData = {
        name: 'Topkapi Palace',
        location: 'Istanbul',
        type: 'DO',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/54/c7/fd/topkapi-palace-museum.jpg?w=700&h=-1&s=1',
        detail: 'This enormous palace was the Imperial residence of Ottoman sultans for almost 400 years. Although much of the palace is not accessible, the daily tours of the Harem are of great interest to tourists.',
        rating: 9,
        comments: [
            'Well worth a visit !! Be sure to include the Harem in your visit... so interesting... beautiful interiors and exteriors. The ceramic tiles are staggering ! Also the palace kitchens.... especially the confectionary. Look for the cakes !! (private joke).',
            'This is a must go palace where you will learn about the life of Ottoman Sultans, their wives and cadinas. It is now a museum but has numerous decorated rooms which will remind you of okd times. A visit to the Harem is a must',
            'Excellent place to visit and explore. Bring comfortable shoes, there are around 400 different rooms to see. We spent around 4 hours here and it was great.',
            'Anyone who loves history, architecture or just exploring old cultures this is 100% worth it theres so much to see you can easily spend over 5-7 hours in there. My big recommendation would be to arrive as early as possible in the morning and BUY THE TICKETS ONLINE. When I was leaving around 4 PM there were thousands of people waiting in line for tickets and entrance while I just walked in and started the tour',
            'This was my second time going, this time with friends. The Topkapi Palace is such an amazing piece of history to visit in Istanbul. Don’t rush, take your time and soak up the history, the views and the architecture. It is well worth the visit.',
        ],
    };

    return (
        <div className="card-container">
            <div
                className="card"
                style={{ backgroundImage: `url(${dummyData.image})` }}
            >
                <div className="card-content">
                    <h2 className="card-title">
                        {dummyData.name} / {dummyData.location}
                    </h2>
                    <p className="card-body">{dummyData.detail}</p>
                    <div className="features">
                        <p className="card-body">Type : {dummyData.type}</p>
                        <p className="card-body">Rating: {dummyData.rating}</p>
                    </div>
                    <div className="comment-body">
                        <Slider {...slideSettings}>
                            {dummyData.comments.map((comment, index) => (
                                <p key={`comment_${index}`}>{comment}</p>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};
