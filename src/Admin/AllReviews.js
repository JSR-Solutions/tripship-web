import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { DataGrid } from "@material-ui/data-grid";
import AdminSidebar from "./AdminSidebar";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customer Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={3}>Name : </Col>
          <Col lg={9}>{props.name}</Col>
        </Row>
        <Row>
          <Col lg={3}>Review ID : </Col>
          <Col lg={9}>{props.id}</Col>
        </Row>
        <Row>
          <Col lg={3}>Review : </Col>
          <Col lg={9}>{props.review}</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button className="admin-button" onClick={props.onHide}>
              Close
            </Button>
          </Col>
          <Col>
            <Button className="admin-button" onClick={props.deleteReview}>
              Delete
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [review, setReview] = useState({
    name: "",
    review: "",
    id: "",
  });

  const columns = [
    { field: "id", headerName: "Review ID", width: 280 },
    { field: "name", headerName: "Customer Name", width: 220 },
    {
      field: "review",
      headerName: "Customer Review",
      width: 760,
    },
  ];

  function getReviews() {
    const db = firebase.firestore();
    setReviews([]);
    setLoading(true);
    db.collection("Reviews")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data) {
              setReviews((prev) => {
                return [...prev, doc.data()];
              });
              setLoading(false);
            }
          });
        } else {
          setLoading(false);
        }
      });
  }

  const rows = reviews.map((review) => {
    return {
      id: review.reviewId,
      name: review.name,
      review: review.review,
    };
  });

  const updateReview = (row) => {
    console.log(row.data);
    setReview((prev) => {
      return {
        ...prev,
        id: row.data.id,
        name: row.data.name,
        review: row.data.review,
      };
    });
    setModalShow(true);
  };

  const deleteReview = () => {
    const db = firebase.firestore();
    db.collection("Reviews")
      .doc(review.id)
      .delete()
      .then(() => {
        setModalShow(false);
        getReviews();
      });
  };

  return (
    <div>
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the All Reviews section.</h2>
        <p>Here are all the reviews currently displayed on your website.</p>
        <div className="admin-dashboard-content-div">
          <Link to="/admin/reviews/add">
            <Button className="admin-button">Add Review</Button>
          </Link>
          {reviews && (
            <div style={{ height: 600, width: "100%" }}>
              <DataGrid
                loading={isLoading}
                rowCount={reviews.length}
                rowsPerPageOptions={[5, 10, 15]}
                rows={rows}
                columns={columns}
                pageSize={10}
                onRowSelected={updateReview}
              />
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                name={review.name}
                id={review.id}
                review={review.review}
                deleteReview={deleteReview}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllReviews;
