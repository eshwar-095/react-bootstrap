import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Counter from "../Counter/Counter";
import Register from "../Register/Register";
import UserList from "../UserList/UserList";

const Sample2 = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      <Counter />
      <Register />
      <UserList/>
    </>
  );
};

export default Sample2;
