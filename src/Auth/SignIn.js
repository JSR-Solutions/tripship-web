import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { toast, ToastContainer } from "react-toastify";

import "./Auth.css";

function SignIn() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [redirectHome, setRedirectHome] = useState(false);
  const [redirectRegistration, setRedirectRegistration] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function handleSignIn(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user.emailVerified) {
          db.collection("Users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              if (snapshot.exists) {
                console.log("Exists");
                setRedirectHome(true);
              } else {
                console.log("Does not exists");
                setRedirectRegistration(true);
              }
            });
        } else {
          toast.error("Please verify your email.");
        }
      })
      .catch((error) => {
        toast.error("ERROR : " + error.message);
      });
  }

  return (
    <div className="auth-main-div">
      <ToastContainer />
      {redirectRegistration ? <Redirect to="/register" /> : null}
      {redirectHome ? <Redirect to="/" /> : null}
      <Card className="auth-card">
        <Card.Body>
          <center>
            <h4>Sign In</h4>
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
            <Button onClick={handleSignIn} className="auth-button">
              Sign In
            </Button>
          </Form>
          <center>
            <div className="auth-text">
              New here? <Link to="/signup">Sign Up</Link>
            </div>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;
