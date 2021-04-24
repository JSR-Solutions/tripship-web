import React from "react";
import "../Styles/ContactUs.css";
import Home from "../Assets/home.png";
import Phone from "../Assets/call.png";
import Email from "../Assets/email.png";
import { Col, Row, Form, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {useFormik} from "formik"
import firebase from "firebase"
import { ToastContainer, toast } from "react-toastify";

const ValidateForm=empData=>{
  const errors = {};

  if(!empData.name){
    errors.name = 'Please Enter Your Name';
  }
  else if(empData.name.length > 20){
    errors.name = 'Name Should Not Exeed 20 Characters'
  }

  if(!empData.phNo){
    errors.phNo = 'Please Enter Your Phone number';
  }
  else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(empData.phNo)){
    errors.phNo = 'Phone Number you entered is invalid'
  }

  if(!empData.email){
    errors.email = 'Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = 'Email address you entered in invalid';
  }
  if(!empData.message){
    errors.message = "Please Enter your Message"
  }
  return errors;
}

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phNo : '',
      email: '',
      message: ''
    },
    validate: ValidateForm,
    onSubmit: (values,{resetForm}) => {
      resetForm()
    },
 
   });
   const db = firebase.firestore();
  

  const addEnquiry = (e) => {
    e.preventDefault();
    db.collection("Enquiries")
      .add(formik.values)
      .then((docRef) => {
        
            toast.success("Your enquiry has reached us. We will get in touch with you shortly.");
            formik.handleSubmit()
            db.collection("Enquiries")
          .doc(docRef.id)
          .update({ id: docRef.id })
      });
  };
  return (
    <div>
      <Header />
      <ToastContainer />
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
                  name = "name"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.name}
                ></Form.Control>
                {formik.touched.name && formik.errors.name ? <p className = "errt" >{formik.errors.name}</p> : null}
                <Form.Control
                  className="h_form_input"
                  type="text"
                  placeholder="Phone No."
                  name = "phNo"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.phNo}
                ></Form.Control>
                {formik.touched.phNo && formik.errors.phNo ? <p className = "errt" >{formik.errors.phNo}</p> : null}
                <Form.Control
                  className="h_form_input"
                  type="email"
                  placeholder="Email"
                  name = "email"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.email}
                ></Form.Control>
                {formik.touched.email && formik.errors.email ? <p className = "errt" >{formik.errors.email}</p> : null}
                <Form.Control
                  className="h_form_input"
                  as="textarea"
                  rows="3"
                  placeholder="Message"
                  name = "message"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.message}
                ></Form.Control>
                {formik.touched.message && formik.errors.message ? <p className = "errt" >{formik.errors.message}</p> : null}
                <Button className="h_form_button" onClick = {formik.isValid? addEnquiry: null}>Send</Button>
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
