import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Auth.css";

function SignIn() {
  return (
    <div className="auth-main-div">
      <Card className="auth-card">
        <Card.Body>
          <h4>Sign In</h4>
          <Form className="auth-form">
            <Form.Group>
              <Form.Control type="email" name="email" className="auth-input" placeholder="Email"/>
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" name="password" className="auth-input" placeholder="Password"/>
            </Form.Group>
            <Button className="auth-button">Sign In</Button>
          </Form>
          <div className="auth-text">
              New here? <Link to="/signup">Sign Up</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;
