import React from "react";
import "../Styles/ContactUs.css";
import Home from "../Assets/home.png";
import Phone from "../Assets/call.png";
import Email from "../Assets/email.png";
import { Col, Row, Form, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div className="contact_back">
        <h1>Contact Us</h1>

        <hr className="contact_hr"></hr>
        <hr className="contact_hr1"></hr>
        <Row className="contact-row">
          <Col>
            <div className="contact-form">
              <h2>Get in Touch</h2>
              <hr className="form_hr"></hr>
              <Form>
                <Form.Control
                  className="h_form_input"
                  type="text"
                  placeholder="Name"
                ></Form.Control>
                <Form.Control
                  className="h_form_input"
                  type="text"
                  placeholder="Phone No."
                ></Form.Control>
                <Form.Control
                  className="h_form_input"
                  type="email"
                  placeholder="Email"
                ></Form.Control>
                <Form.Control
                  className="h_form_input"
                  as="textarea"
                  rows="3"
                  placeholder="Message"
                ></Form.Control>
                <Button className="h_form_button">Send</Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div className="contact-address">
              <h2>Our Address</h2>
              <hr className="form_hr"></hr>
              <img alt="home" src={Home} />
              <h4>Address</h4>
              <p>Lorem Ipsum is simply dummy text </p>
              <img alt="phone" src={Phone} />
              <h4>Phone No</h4>
              <p>99999 55555 </p>
              <img alt="email" src={Email} />
              <h4>Email</h4>
              <p>webdeveloper@gamil.com</p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
