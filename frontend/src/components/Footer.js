// Modified from code by: <gurjotloveparmar> Feb 26, 2021 / GeeksForGeeks.com
// Source: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/

import React from "react";
import {
  Box,
  Container,
  FooterLink
} from "./FooterStyles";

import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Nav className="justify-content-center">
          <FooterLink as={Link} to="/Translate" style={{marginLeft: "5%", marginRight: "5%"}}>Translate</FooterLink>
          <FooterLink as={Link} to="/" style={{marginLeft: "5%", marginRight: "5%"}}>Home</FooterLink>
          <FooterLink as={Link} to="/Login" style={{marginLeft: "5%", marginRight: "5%"}}>Login</FooterLink>
          <FooterLink as={Link} to="/Register" style={{marginLeft: "5%", marginRight: "5%"}}>Register</FooterLink>
          <FooterLink as={Link} to="/About" style={{marginLeft: "5%", marginRight: "5%"}}>About Us</FooterLink>
        </Nav>
        <h5>
            <span style={{color: 'white'}}>Panther </span>
            <span style={{color: 'yellow'}}>Translate</span>
            <br/>
            <p style={{color: 'white'}}>Built in (the 305) Miami, Florida</p>
            <p style={{color: 'white'}}>&#169; Team 6 2021 </p>
        </h5>
      </Container>
    </Box>
  );
};
export default Footer;