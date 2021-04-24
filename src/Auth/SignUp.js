import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Auth.css";

function SignUp() {
    return (
      <div className="auth-main-div">
        <Card className="auth-card">
          <Card.Body>
            <h4>Sign Up</h4>
            <Form className="auth-form">
              <Form.Group>
                <Form.Control type="email" name="email" className="auth-input" placeholder="Email"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" name="password" className="auth-input" placeholder="Password"/>
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


export default SignUp
