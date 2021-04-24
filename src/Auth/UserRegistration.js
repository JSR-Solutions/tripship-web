import React from "react";
import { Button, Card, Form } from "react-bootstrap";

import "./Auth.css";

function UserRegistration() {
    return (
      <div className="auth-main-div">
        <Card className="auth-card">
          <Card.Body>
            <h4>Register</h4>
            <Form className="auth-form">
              <Form.Group>
                <Form.Control type="text" name="name" className="auth-input" placeholder="Name"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="phone" className="auth-input" placeholder="Phone Number"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" name="email" className="auth-input" placeholder="Email Address"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="address" className="auth-input" placeholder="Address"/>
              </Form.Group>
              <Button className="auth-button">Register</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
}

export default UserRegistration;
