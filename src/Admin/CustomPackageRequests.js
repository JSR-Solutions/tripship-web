import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { DataGrid } from "@material-ui/data-grid";
import { Button, Col, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
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
          Callback Request
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tr>
            <td>Name :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Phone Number :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.phone}</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.email}</td>
          </tr>
          <tr>
            <td>Destination :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.destination}</td>
          </tr>
          <tr>
            <td>Budget :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.budget}</td>
          </tr>
          <tr>
            <td>Number Of People :</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{props.noOfPeople}</td>
          </tr>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button className="admin-button" onClick={props.onHide}>
              Close
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

function CustomPackageRequests() {
  const [modalShow, setModalShow] = React.useState(false);
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    budget: "",
    destination: "",
    noOfPeople: ""
  });

  useEffect(() => {
    getRequests();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const columns = [
    { field: "id", headerName: "Request ID", width: 200 },
    { field: "name", headerName: "User Name", width: 200 },
    { field: "phone", headerName: "User Phone Number", width: 200 },
    { field: "email", headerName: "User Email", width: 200 },
    { field: "destination", headerName: "Destination", width: 200 },
    { field: "budget", type: "number", headerName: "Budget", width: 200 },
  ];

  function getRequests() {
    const db = firebase.firestore();
    setRequests([]);
    setLoading(true);
    db.collection("CustomPackage")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.docs.length) {
          console.log(querySnapshot.docs.length !== 0);
          querySnapshot.docs.forEach((doc) => {
            console.log(doc.data());
            if (doc.data) {
              setRequests((prev) => {
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

  const rows = requests.map((request) => {
    return {
      id: request.id,
      name: request.name,
      phone: request.phoneNo,
      email: request.email,
      destination: request.destination,
      noOfPeople: request.noOfPeople,
      budget: request.budget,
    };
  });

  const updateRequest = (row) => {
    console.log(row.data);
    setRequest((prev) => {
      return {
        ...prev,
        name: row.data.name,
        phone: row.data.phone,
        email: row.data.email,
        message: row.data.message,
        budget: row.data.budget,
        noOfPeople: row.data.noOfPeople,
        destination: row.data.destination,
      };
    });
    setModalShow(true);
  };

  return (
    <div>
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the Custom Package Requests section.</h2>
        <p>Please check all the callback requests generated on your website.</p>
      </div>
      <div className="admin-dashboard-content-div">
        {requests && (
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              loading={isLoading}
              rowCount={requests.length}
              rowsPerPageOptions={[5, 10, 15]}
              rows={rows}
              columns={columns}
              pageSize={10}
              onRowSelected={updateRequest}
            />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              name={request.name}
              email={request.email}
              phone={request.phone}
              message={request.message}
              budget={request.budget}
              destination={request.destination}
              noOfPeople={request.noOfPeople}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomPackageRequests
