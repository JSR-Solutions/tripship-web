import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

import "./Auth.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function EditUserDetails() {
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
    getUser();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const getUser = () => {
    auth.onAuthStateChanged((userCredentials) => {
      const uid = userCredentials.uid;
      db.collection("Users")
        .doc(uid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          setUserData((prev) => {
            return {
              ...prev,
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
            };
          });
        });
    });
  };

  const updateUser = (event) => {
    event.preventDefault();
    auth.onAuthStateChanged((userCredentials) => {
      const uid = userCredentials.uid;

      db.collection("Users")
        .doc(uid)
        .update({
          name: userData.name,
          phone: userData.phone,
          address: userData.address,
          email: userData.email,
        })
        .then(() => {
          setRegistered(true);
        });
    });
  };

  return (
    <div>
      <Header />
      <div className="auth-main-div">
        {registered && <Redirect to="/user" />}
        <Card className="auth-card">
          <Card.Body>
            <h4>Edit Details</h4>
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
              <Button onClick={updateUser} className="auth-button">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default EditUserDetails;
