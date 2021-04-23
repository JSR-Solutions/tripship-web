import React, { useEffect } from "react";
import "../Core/Aboutus.css";
import Headings from "../Core/Headings"
import { Row, Col, Container } from "react-bootstrap";
import $ from "jquery";

const Aboutus = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div className="aboutus-god">
      <div class="main-heading">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-sec1">
          <Headings text="About TripShrip"></Headings>
      </div>

      
      
    </div>
  );
};
export default Aboutus;
