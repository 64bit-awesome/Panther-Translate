import React from 'react';

import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../panther_translate_draft_2.png';

function NavigationBar() {
  return(
    <Navbar bg="primary" variant="dark">
        <Nav style={{marginLeft: "22%"}}>
        <Nav.Link as={Link} to={'/Translate'}>Translate</Nav.Link>
        </Nav>
        <Nav className="m-auto">
          <Nav.Link as={Link} to={'/'}>
            <h2>
              <span style={{color: 'white'}}>Panther </span>
              <img style={{width: '65px'}} src={logo}/>
              <span style={{color: 'yellow'}}> Translate</span>
            </h2>
          </Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/Login'} className={'navigation-right'}>Login</Nav.Link>
          <Nav.Link as={Link} to={'/Register'} className={'navigation-right'}>Register</Nav.Link>
          <Nav.Link as={Link} to={'/About'} className={'navigation-right'}>About</Nav.Link>
        </Nav>
  </Navbar>
  );
}

export default NavigationBar;