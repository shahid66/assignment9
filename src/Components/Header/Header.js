import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../Image/logo.png'
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
    return (
        <Navbar  expand="lg">
            
  <Navbar.Brand href="#home"><img style={{marginLeft:'146px'}} src={Logo} alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav className="ml-auto ulMargin">
    
      
      <Link className='nav-link' to="/home">Home</Link>
      <Link className='nav-link' to="/booking">Booking</Link>
      <Link className='nav-link' to="/login">Login</Link>

    </Nav>




  </Navbar.Collapse>
  
</Navbar>
    );
};

export default Header;