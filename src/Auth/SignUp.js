import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { toast, ToastContainer } from "react-toastify";

import "./Auth.css";

function SignUp() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const auth = firebase.auth();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSignUp(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        user
          .sendEmailVerification()
          .then(() => {
            toast.success("Please check your email inbox.");
            setCredentials({ email: "", password: "" });
          })
          .catch((e) => {
            toast.error("ERROR : " + e.message);
          });
        auth.signOut();
        setRedirect(true);
      })
      .catch((err) => {
        toast.error("ERROR : " + err.message);
      });
  }

  return (
    <div className="auth-main-div">
      <ToastContainer />
      {redirect && <Redirect to="/signin" />}
      <Card className="auth-card">
        <Card.Body>
          <center>
            <h4>Sign Up</h4>
          </center>
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
            <Button onClick={handleSignUp} className="auth-button">
              Sign Up
            </Button>
          </Form>
          <center>
            <div className="auth-text">
              Already Registered? <Link to="/signin">Sign In</Link>
            </div>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
