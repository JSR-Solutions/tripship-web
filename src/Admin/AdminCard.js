import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminCard(props) {
  return (
    <Link className="admin-card-link" to={props.link}>
      <Card className="admin-card">
        <Card.Body>
          <img
            className="admin-dashboard-img"
            src={props.img}
            alt={props.title}
          />
          <h4 className="admin-card-title">{props.title}</h4>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default AdminCard;
