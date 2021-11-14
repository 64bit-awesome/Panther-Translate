import React, {useState} from 'react';
import { Container, Col, Row, ListGroup } from "react-bootstrap";

function Home() {

  const [eventText, setEventText] = useState("Celebrating your Achievements:\nExperience Graduation! December 11th & 12th"); // holds the text of the current event selected.

  const setText = (item) => {
    switch (item) {
      case "event1":
        setEventText("Celebrating your Achievements:\nExperience Graduation! December 11th & 12th");
        break;
      case "event2":
        setEventText("De-stress this semester with some free croquetas and coffee.\n\n\nWe love our croquetas and coffee so you'll have to find us first!\n We'll be hiding in GC around 2pm November 16th 2021.\n\n\nps:not really, this is just for demo purposes.");
        break;
      default:
        // do nothing
        break;
    }
  };


  return(
    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col><h2>Artifical Intelligence Powered Translation</h2></Col>
      </Row>
      <Row>
        <p>
          An app designed to help you communicate on and off campus.
          <br/>
          this lit AI understands slang, no cap &#128540;
        </p>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col>
        <h3>Upcoming Events on Campus:</h3>
          <ListGroup defaultActiveKey="#event1">
          <ListGroup.Item action href="#event1" onClick={() => { setText("event1"); }}>
            Fall 2021 Graduation
          </ListGroup.Item>
          <ListGroup.Item action href="#event2" onClick={() => { setText("event2"); }}>
            Free Croquetas and Coffee at GC around 2pm
          </ListGroup.Item>
        </ListGroup>
        </Col>
        <Col>
          <pre>{eventText}</pre>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;