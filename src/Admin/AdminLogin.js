import React from "react";
import { useState } from "react";
import firebase from "firebase";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillLock } from "react-icons/ai";
import { reactLocalStorage } from "reactjs-localstorage";
import { Redirect } from "react-router";
import {toast, ToastContainer} from "react-toastify"

import "./AdminLogin.css";


function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [isAdmin, setAdmin] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        
        if (user) {
          const uid = user.uid;
          db.collection("Admin")
            .doc(uid)
            .get()
            .then((querySnapshot) => {
              const data = querySnapshot.data();
              console.log(data);
              if (data.role === "admin") {
                reactLocalStorage.setObject("tripshrip-admin", {
                  email: credentials.email,
                  adminId: uid,
                  role: "admin",
                });
                setAdmin(true);
              } else {
                console.log("Not an admin");
                auth.signOut();
                setCredentials({ email: "", password: "" });
              }
            });
        }
      })
      .catch((error) =>{
             toast.error(error.message)
      });
  };

  return (
    <div>
      {isAdmin ? <Redirect to="/admin/dashboard" /> : null}
      <ToastContainer />
      <Row>
      
        <Col lg={8} className="admin-login-bg"></Col>
        <Col lg={4} className="admin-login-side">
          <div className="admin-login-main-div">
            <div className="admin-icon-div">
              <AiFillLock className="admin-icon" />
            </div>
            <h2 className="admin-title">Admin Login </h2>
            <hr />
            <Form className="admin-login-form">
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  className="admin-input"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="admin-input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <div>
                <Button onClick={signInHandler} className="admin-button">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AdminLogin;
