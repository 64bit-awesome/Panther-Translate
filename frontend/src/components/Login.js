import React, {useState} from 'react';
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Login() {

  const handleSubmit = () => {
    //TODO
  }

  return(
    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col></Col>
        <Col>
          <h3>Welcome back</h3>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Authenticate
          </Button>
        </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;