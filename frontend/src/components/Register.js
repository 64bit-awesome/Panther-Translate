import React, {useState} from 'react';
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Register() {

  const handleRegister = () => {
    //TODO
  }

  return(
    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col></Col>
        <Col>
          <h3>You're going to love it here</h3>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              We'll never ask you for your password over the phone.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Register;