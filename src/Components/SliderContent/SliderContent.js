import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Sajek from '../../Image/Sajek.png'
import './SliderContent.css'
import place from '../../FakeData/place';
import SingleItem from '../SingleItem/SingleItem';


const SliderContent = (props) => {
        const FakeData= place;
        const [places, setPlaces] = useState(place);

    return (
        <Row>
                <Col xs={5}>
                <div className='sideTitle'>
            <h2>COX'S BAZAR</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, vel!</p>
            <Button variant="warning">Booking <FontAwesomeIcon  icon={faLongArrowAltRight} /></Button>
          </div>
                </Col>
            <Col xs={7}>
                <div className="sliderWraper">
                <Row>
                
                        {
                                place.map(pl=><SingleItem item={pl}></SingleItem>)
                        }
                

                </Row>
                </div> 
                </Col>
        </Row>
    );
};

export default SliderContent;