import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Auth.css";

function SignUp() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="auth-main-div">
      <Card className="auth-card">
        <Card.Body>
          <h4>Sign Up</h4>
          <Form className="auth-form">
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                className="auth-input"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                className="auth-input"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="auth-button">Sign Up</Button>
          </Form>
          <div className="auth-text">
            Already Registered? <Link to="/signin">Sign In</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
