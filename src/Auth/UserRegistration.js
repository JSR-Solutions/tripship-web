import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import "./Auth.css";

function UserRegistration() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="auth-main-div">
      <Card className="auth-card">
        <Card.Body>
          <h4>Register</h4>
          <Form className="auth-form">
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                className="auth-input"
                placeholder="Name"
                value={userData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="phone"
                className="auth-input"
                placeholder="Phone Number"
                value={userData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                className="auth-input"
                placeholder="Email Address"
                value={userData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="address"
                className="auth-input"
                placeholder="Address"
                value={userData.address}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="auth-button">Register</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserRegistration;
