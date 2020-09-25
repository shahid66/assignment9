import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header'
import './App.css';
import SliderContent from './Components/SliderContent/SliderContent';
import { Button, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Header2 from './Components/Header2/Header2';
import Map from './Components/Map/Map';


export const UserContext=createContext();
export const BookingIdContext=createContext();



function App() {
  const[login,setLogin]=useState({});
  const[bookingId,setBookingId]=useState({});
  console.log(bookingId)
  return (
    <div className="App">
     
      
      <UserContext.Provider value={[login,setLogin]}>
        <BookingIdContext.Provider value={[bookingId,setBookingId]}>
      <Router>
      
      <Switch>
          <Route path="/home">
          <div className='backGround'>
            <div className='shadoMask'>
          <Header></Header>
            <SliderContent></SliderContent>
            </div>
            </div>
          </Route>
          <Route path="/login">
          <Header2></Header2>
            <Login></Login>
          </Route>
          <Route path="/map">
          <Header2></Header2>
            <Map></Map>
          </Route>
          <Route path="/booking/:bookingID">
          <div className='backGround'>
          <div className='shadoMask'>
          <Header></Header>
            <Booking></Booking>
            </div>
            </div>
          </Route>
          <PrivateRoute path="/destination">
          <Header2></Header2>
            <Destination></Destination>
          </PrivateRoute>
          <Route exact path="/">
          <SliderContent></SliderContent>
          </Route>
          <Route path="*">
          <Header2></Header2>
          <h4>Erro 404</h4>
          </Route>
        </Switch>
      </Router>
      </BookingIdContext.Provider>
      </UserContext.Provider>  
      
      </div>   
   
  );
}

export default App;
