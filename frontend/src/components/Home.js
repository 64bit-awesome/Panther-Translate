import React, {useState} from 'react';
import { Container, Col, Row, ListGroup } from "react-bootstrap";

function Home() {

  return(
    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col><h2>Artifical Intelligence Powered Translation</h2></Col>
      </Row>
      <Row>
        <p>
          An app designed to help you communicate on and off campus.
          <br/>
          this AI understands support slang &#128540;
        </p>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col>
        <h3>Upcoming Events on Campus:</h3>
          <ListGroup defaultActiveKey="#event1">
          <ListGroup.Item action href="#event1">
            Fall 2021 Graduation
          </ListGroup.Item>
          <ListGroup.Item action href="#event2">
            Free Coffee and Drinks at GC around 2pm
          </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Home;