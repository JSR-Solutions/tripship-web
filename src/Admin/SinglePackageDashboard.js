import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Card, Col, Row, Button } from "react-bootstrap";

import "./AdminDashboard.css";
import { Link } from "react-router-dom";

function SinglePackageDashboard(props) {
    return (
      <div>
        <AdminSidebar />
        <div className="admin-dashboard-main-div">
          <h2>Hello, Admin! Welcome to package dashboard.</h2>
          <p>Here are some things you can do with this package.</p>
          <Row className="admin-dashboard-row">
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>All Packages</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/admin/allpackages">
                    {" "}
                    <Button className="admin-button">View All Packages</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>Add Packages</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/admin/addpackage">
                    {" "}
                    <Button className="admin-button">Add A Package</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>Custom Package Requests</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/admin/customrequests">
                    {" "}
                    <Button className="admin-button">View All Requests</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
  
          <Row className="admin-dashboard-row">
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>Callback Requests</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/admin/callback">
                    {" "}
                    <Button className="admin-button">View All Requests</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>All Packages</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/">
                    {" "}
                    <Button className="admin-button">View All Packages</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <h4>All Packages</h4>
                </Card.Body>
                <Card.Footer>
                  <Link to="/">
                    {" "}
                    <Button className="admin-button">View All Packages</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default SinglePackageDashboard;
