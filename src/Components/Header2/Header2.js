import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo2 from '../../Image/Logo2.png';
import './Header2.css'

const Header2 = () => {
    return (
<Navbar  expand="lg">
            
            <Navbar.Brand href="#home"><img style={{marginLeft:'146px',width:'121px',height:'56px'}} src={Logo2} alt="Logo"/></Navbar.Brand>
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

export default Header2;