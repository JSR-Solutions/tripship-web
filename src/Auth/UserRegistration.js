import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

import "./Auth.css";

function UserRegistration() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    getUserEmail();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getUserEmail = () => {
    auth.onAuthStateChanged((userCredentials) => {
      const email = userCredentials.email;
      setUserData((prev) => {
        return { ...prev, email: email };
      });
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    auth.onAuthStateChanged((userCredentials) => {
      const uid = userCredentials.uid;

      db.collection("Users")
        .doc(uid)
        .set({
          name: userData.name,
          phone: userData.phone,
          address: userData.address,
          email: userData.email,
          uid: uid,
        })
        .then(() => {
          setRegistered(true);
        });
    });
  };

  return (
    <div className="auth-main-div">
      {registered && <Redirect to="/" />}
      <Card className="auth-card">
        <Card.Body>
          <center>
            <h4>Register</h4>
          </center>
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
            <Button onClick={registerUser} className="auth-button">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserRegistration;
