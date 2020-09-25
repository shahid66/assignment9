import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = (props) => {
    const{id,placeName,img}=props.item;
    return (
        <Col xs={4}>
        <div className='slidItem'>
            <Link to={'/booking/'+id}><img src={img} alt=""/></Link>
            <h2>{placeName}</h2>
        </div>
        </Col>
    );
};

export default SingleItem;