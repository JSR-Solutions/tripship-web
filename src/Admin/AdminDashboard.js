import React from "react";
import AdminSidebar from "./AdminSidebar";
import { Card, Col, Row, Button } from "react-bootstrap";

import "./AdminDashboard.css";
import packages from "../Assets/packages.png";
import addpackage from "../Assets/addpackage.png";
import allusers from "../Assets/allusers.png";
import booking from "../Assets/booking.png";
import callbackrequest from "../Assets/callbackrequest.png";
import custompackage from "../Assets/custompackage.png";
import { Link } from "react-router-dom";
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
              img={allusers}
              title="All Users"
              link="/admin/users"
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
