import React, {useState} from 'react';
import { Container, Col, Row, ListGroup } from "react-bootstrap";

import aboutBackground from '../about-background.png';

function Home() {

  const [aboutText, setAboutText] = useState("Choose a team memeber to learn more about them."); // holds the text of the team member selected.

  const setText = (item) => {
    switch (item) {
      case "Jordy":
        setAboutText("Part-time cool person, half-time cod3r, 1/3 time theorist.");
        break;
      case "Morris":
        setAboutText("\"Nothing in life is free except life itself\" \n-Stephen Hawking.");
        break;
      case "Alex":
        setAboutText("Lorem ipsum dolor sit amet.");
        break;
      case "Tyson":
        setAboutText("\"His very first move was to sign Lamar Odom, \nWHO WAS ON CRACK!\" \n-Stephen A Smith.");
        break;
      case "Anthony":
        setAboutText("\"Everybody is a genius. \nBut if you judge a fish by its ability to climb a tree, \nit will live its whole life believing that it is stupid\" \n- Albert Einstein.");
        break;
      case "Frank":
        setAboutText("\"You don’t learn from smart people, you learn from idiots. \nWatch why they do, and then don’t do it!\" \n-Rudolf Wanderone.");
        break;
      default:
        // do nothing
        break;
    }
  };


  return(
    <Container style={{marginTop: "2%", backgroundImage:  `url(${aboutBackground})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "white", textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000", padding: "8%"}}>
      <Row>
        <Col><h2>Meet the Team</h2></Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col style={{color: "white", textShadow: "none"}}>
          <ListGroup>
          <ListGroup.Item action href="#Jordy" onClick={() => { setText("Jordy"); }}>
            Jordy Araujo
          </ListGroup.Item>
          <ListGroup.Item action href="#Morris" onClick={() => { setText("Morris"); }}>
            Morris Silva
          </ListGroup.Item>
          <ListGroup.Item action href="#Alex" onClick={() => { setText("Alex"); }}>
            Alex Byrne
          </ListGroup.Item>
          <ListGroup.Item action href="#Tyson" onClick={() => { setText("Tyson"); }}>
            Tyson Jones 
          </ListGroup.Item>
          <ListGroup.Item action href="#Anthony" onClick={() => { setText("Anthony"); }}>
            Anthony Olivera 
          </ListGroup.Item>
          <ListGroup.Item action href="#Frank" onClick={() => { setText("Frank"); }}>
            Frank Montesino 
          </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col>
          <pre style={{fontSize: "large"}}>{aboutText}</pre>
        </Col>
      </Row>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </Container>
  );
}

export default Home;