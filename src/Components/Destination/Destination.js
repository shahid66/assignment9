import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BookingIdContext, UserContext } from '../../App';
import hotel from '../../FakeData/hotel';
import Hotel from '../Hotel/Hotel';
import Map from '../Map/Map';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const Destination = () => {
    const[userAllinfo]=useContext(BookingIdContext);
    console.log(userAllinfo.bookingId)
    const fakeData=hotel;
    const PlaceDetails = hotel.filter(pl=>pl.id===userAllinfo.bookingId);
    console.log(PlaceDetails)

    
    return (
        <Container fluid>
            <Row>
    
                <Col sx={6}>
                <h2>{userAllinfo.placeName}</h2>
                    {
                        PlaceDetails.map(pd=><Hotel details={pd}></Hotel>)
                    }
                </Col>
                <Col sx={6}><Map></Map></Col>
            </Row>
        </Container>
    );
};

export default Destination;