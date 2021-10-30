import React from 'react';

import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  return(
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to={'/'} className="navigation-logo">[LOGO HERE]</Navbar.Brand>
        <h2 className="m-auto">
          <span style={{color: 'white'}}>Panther</span>
          <span style={{marginLeft: '4%', color: 'yellow'}}>Translate</span>
        </h2>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'}>Translate</Nav.Link>
          <Nav.Link as={Link} to={'/About'} className={'navigation-right'}>About</Nav.Link>
        </Nav>
  </Navbar>
  );
}

export default NavigationBar;