import React, { useEffect } from "react";
import "../Core/Aboutus.css";
import { Row, Col, Container } from "react-bootstrap";
import $ from "jquery";

const Aboutus = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div>
      <div class="main-heading">
        <h1>Heading</h1>
      </div>
    </div>
  );
};
export default Aboutus;
