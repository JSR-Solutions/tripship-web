import React, { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import firebase from "firebase";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Loader from "../Components/Loader"

function UserDashboard() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const auth = firebase.auth();
  const db = firebase.firestore();
  const [isLoggedOut, setLoggedOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setIsLoading(true);
    auth.onAuthStateChanged((userCredentials) => {
      const uid = userCredentials.uid;
      db.collection("Users")
        .doc(uid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          if(data){setUserData((prev) => {
            return {
              ...prev,
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
            };
          });}
          setIsLoading(false)
        });
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setLoggedOut(true);
    });
  };

  if(isLoading) {
    return <Loader />
  }

  return (
    <div>
      {isLoggedOut && <Redirect to="/" />}
      <Header />
      <div className="auth-main-div">
        <Card className="auth-card">
          <Card.Body>
            <center>
              <h4>My Profile</h4>
            </center>
            <Card className="auth-card">
              <Card.Body>Name : {userData.name}</Card.Body>
            </Card>
            <Card className="auth-card">
              <Card.Body>Phone Number : {userData.phone}</Card.Body>
            </Card>
            <Card className="auth-card">
              <Card.Body>Email : {userData.email}</Card.Body>
            </Card>
            <Card className="auth-card">
              <Card.Body>Address : {userData.address}</Card.Body>
            </Card>
          </Card.Body>
          <Row className="auth-button-row">
            <Col>
              <Button onClick={signOut} className="auth-button auth-button-2">
                Sign Out
              </Button>
            </Col>
            <Col>
              <Link to="/user/editprofile">
                <Button className="auth-button auth-button-2">
                  Edit Profile
                </Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
