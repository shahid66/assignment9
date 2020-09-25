import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './Booking.css'
import place from '../../FakeData/place';
import { BookingIdContext, UserContext } from '../../App';

const Booking = (props) => {
    const history=useHistory();
    const handelBookingCheckout=(e)=>{
        history.push('/destination');
        e.preventDefault();
    }
    const { bookingID } = useParams();
    const [bookingid,setBookingid]=useContext(BookingIdContext);

    
    const fakeData=place;
    const PlaceDetails = place.find(pl=>pl.id===bookingID);
    const [data,setData]=useState({
        bookingId:bookingID,
        placeName:PlaceDetails.placeName,
    });
    setBookingid(data);
    return (
        <div>
            <Row>
                <Col sx={6}>
                    <div className='bookingDescription'>
                        <h1>{PlaceDetails.placeName}</h1>
    <p>{PlaceDetails.placeDescription}</p>
                    </div>
                </Col>
                <Col sx={6}>
                    <div className='bookingFrom'>
                    <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">Origin</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Destination</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" />
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="inputEmail4">Form</label>
                            <input className='dateField' type="date" class="form-control" /><FontAwesomeIcon className='clanderIcon' icon={faCalendarAlt}></FontAwesomeIcon>
                        </div>
                        <div class="col">
                            <label for="inputEmail4">To</label>
                            <input className='dateField' type="date" class="form-control" /><FontAwesomeIcon className='clanderIcon' icon={faCalendarAlt}></FontAwesomeIcon>
                        </div>
                    </div><br/><br/>
                    <button type="submit" onClick={handelBookingCheckout}  class="btn btn-warning submitbtn">Start Booking</button>
                </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Booking;