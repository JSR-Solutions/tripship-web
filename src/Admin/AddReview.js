import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import firebase from "firebase";

import "./AdminDashboard.css";
import AdminSidebar from "./AdminSidebar";
import { toast, ToastContainer } from "react-toastify";

function AddReview() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [isAdded, setAdded] = useState(false);
  const [customerImage, setCustomerImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const db = firebase.firestore();
  const storage = firebase.storage();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else {
      setReview(value);
    }
  };

  //Customer image change handle function
  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setCustomerImage(selectedFile);
    } else {
      setCustomerImage(null);
    }
  }

  //Add Package Function
  const addReview = (e) => {
    e.preventDefault();
    if (name === "" || customerImage === null || review === "") {
      toast.error("Some fields are empty ");
    } else {
      const uploadTask = storage
        .ref("Reviews/" + customerImage.name)
        .put(customerImage);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (err) => {
          console.log(err.message);
        },
        () => {
          storage
            .ref("Reviews")
            .child(customerImage.name)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("Reviews")
                .add({
                  name: name,
                  imageUrl: imageUrl,
                  review: review,
                })
                .then((docRef) => {
                  db.collection("Reviews")
                    .doc(docRef.id)
                    .update({ reviewId: docRef.id })
                    .then(() => {
                      setAdded(true);
                    });
                });
            });
        }
      );
    }
  };

  return (
    <div>
      {isAdded ? <Redirect to="/admin/reviews" /> : null}
      <AdminSidebar />
      <ToastContainer />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the Add Reviews section.</h2>
        <p>
          Please fill all the required fields below to add the review to your
          website.
        </p>
        <div className="admin-dashboard-content-div">
          <Form className="admin-dashboard-form">
            <h5 className="form-admin-title">Customer Name</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder={"Customer Name"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Customer Review</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    required
                    className="admin-dashboard-form-input"
                    type="text"
                    name="review"
                    value={review}
                    placeholder={"Customer Review"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h5 className="form-admin-title">Customer Image</h5>
            <Row>
              <Col lg={10}>
                {" "}
                <Form.Group className="admin-dashboard-form-group">
                  <Form.File
                    required
                    id="form-image"
                    name="customerImage"
                    onChange={handleImageChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Button onClick={addReview} className="admin-button">
              Add Review
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
