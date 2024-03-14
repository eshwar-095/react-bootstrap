import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const UserList = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch(url);
    const d = await res.json();
    console.log(d);
    return setData(d);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h3 className="text-primary">User List</h3>
            <p className="fst-italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga
              dolores aut ducimus ullam, cum corrupti quidem, dolor unde
              repudiandae aspernatur! Vitae, eveniet deserunt incidunt quae
              praesentium rem doloremque voluptatum.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover className="shadow-lg text-center">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
                    <td>{user.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
