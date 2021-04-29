import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Col, Row } from "react-bootstrap";

import "./AdminDashboard.css";
import packages from "../Assets/packages.png";
import addpackage from "../Assets/addpackage.png";
import reviews from "../Assets/reviews.png";
import booking from "../Assets/booking.png";
import callbackrequest from "../Assets/callbackrequest.png";
import custompackage from "../Assets/custompackage.png";
import AdminCard from "./AdminCard";

function AdminDashboard() {
  return (
    <div>
      <AdminSidebar />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to your dashboard.</h2>
        <p>Here are some shortcuts to get you started immediately.</p>
        <Row className="admin-dashboard-row">
          <Col lg={4}>
            <AdminCard
              img={packages}
              title="All Packages"
              link="/admin/allpackages"
            />
          </Col>
          <Col lg={4}>
            <AdminCard
              img={addpackage}
              title="Add Packages"
              link="/admin/addpackage"
            />
          </Col>
          <Col lg={4}>
            <AdminCard
              img={custompackage}
              title="Custom Package Requests"
              link="/admin/customrequests"
            />
          </Col>
        </Row>

        <Row className="admin-dashboard-row">
          <Col lg={4}>
            <AdminCard
              img={callbackrequest}
              title="Callback Requests"
              link="/admin/callback"
            />
          </Col>
          <Col lg={4}>
            <AdminCard
              img={reviews}
              title="Reviews"
              link="/admin/reviews"
            />
          </Col>
          <Col lg={4}>
            <AdminCard
              img={booking}
              title="All Bookings"
              link="/admin/dashboard"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AdminDashboard;
