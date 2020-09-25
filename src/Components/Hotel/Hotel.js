import React from 'react';
import './Hotel.css'

const Hotel = (props) => {
    const{hotelName,placeDescription,img}=props.details;
    return (
        <div className='hotel'>
            <img src={img} alt=""/>
            <div className='hotelDetails'>
                <h2>{hotelName}</h2>
                <p><small>samthing</small></p>
                <p>{placeDescription}</p>
                
            </div>
        </div>
    );
};

export default Hotel;