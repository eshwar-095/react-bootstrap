import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e)=>{
    e.preventDefault();
    console.log(data)
  }
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}>
            <Card className="shadow-lg">
              <Card.Header
                className="p-3"
                style={{ backgroundColor: "#ffc107" }}
              >
                <h4>Register</h4>
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#f7f5f0" }}>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      onChange={updateInput}
                      type="text"
                      placeholder="Username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={updateInput}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button onClick={register} variant="warning" type="submit">
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
