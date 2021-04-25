import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { useState } from "react";
import {useFormik} from 'formik'
import { ToastContainer, toast } from "react-toastify";
const ValidateForm=empData=>{
  const errors = {};

  if(!empData.name){
    errors.name = '*Please Enter Your Name';
  }
  else if(empData.name.length > 20){
    errors.name = 'Name Should Not Exeed 20 Characters'
  }

  if(!empData.phoneNo){
    errors.phoneNo = '*Please Enter Your Phone number';
  }
  else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(empData.phoneNo)){
    errors.phoneNo = 'Phone Number you entered is invalid'
  }

  if(!empData.email){
    errors.email = '*Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = 'Email address you entered in invalid';
  }
  if(!empData.destination){
    errors.destination = "*Please Enter your Destination"
  }
  if(!empData.noOfPeople){
    errors.noOfPeople = "*Please Enter the no. of people"
  }
  if(!empData.budget){
    errors.budget = "*Please Enter your budget"
  }
  if(!empData.requirements){
    errors.requirements = "*Please Enter the no. of people"
  }
  
  
  return errors;
}

function CustomPackage() {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNo : '',
      email: '',
      destination: "",
      noOfPeople: "",
      budget: "",
      requirements: "",
    },
    validate: ValidateForm,
    onSubmit: (values,{resetForm}) => {
      resetForm()
    },
 
   });
  
  const db = firebase.firestore();

  
  function handleSubmit(event) {
    event.preventDefault();
      db.collection("CustomPackage")
        .add(formik.values)
        .then((docRef) => {
           toast.success("Your enquiry has reached us. We will get in touch with you shortly.");
            formik.handleSubmit()
          db.collection("CustomPackage")
            .doc(docRef.id)
            .update({ id: docRef.id })
            
        });
    
  }

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="h_custBack">
        <h1>Custom Package</h1>

        <hr className="contact_hr"></hr>
        <hr className="contact_hr1"></hr>
        <Row>
          <Col>
            <div>
              <div className="h_customform">
                <h2>Create your Own Package</h2>
                <hr className="form_hr"></hr>

                <Form>
                  <Form.Group controlId="formname">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      placeholder="Name"
                    />
                  </Form.Group>
                  {formik.touched.name && formik.errors.name ? <p className = "h_error" >{formik.errors.name}</p> : null}
                  <Form.Group controlId="formphone_no">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="number"
                      name="phoneNo"
                      value={formik.values.phoneNo}
                      placeholder="Phone No"
                    />
                  </Form.Group>
                  {formik.touched.phoneNo && formik.errors.phoneNo ? <p className = "h_error" >{formik.errors.phoneNo}</p> : null}
                  <Form.Group controlId="formemail">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="text"
                      name="email"
                      value={formik.values.email}
                      placeholder="Email"
                    />
                  </Form.Group>
                  {formik.touched.email && formik.errors.email ? <p className = "h_error" >{formik.errors.email}</p> : null}
                  <Form.Group controlId="formdestination">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="text"
                      name="destination"
                      value={formik.values.destination}
                      placeholder="Destination"
                    />
                  </Form.Group>
                  {formik.touched.destination && formik.errors.destination ? <p className = "h_error" >{formik.errors.destination}</p> : null}
                  <Form.Group controlId="formNoofPeople">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="text"
                      name="noOfPeople"
                      value={formik.values.noOfPeople}
                      placeholder="No of People"
                    />
                  </Form.Group>
                  {formik.touched.noOfPeople && formik.errors.noOfPeople ? <p className = "h_error" >{formik.errors.noOfPeople}</p> : null}
                  <Form.Group controlId="formbudget">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      type="text"
                      name="budget"
                      value={formik.values.budget}
                      placeholder="Budget"
                    />
                  </Form.Group>
                  {formik.touched.budget && formik.errors.budget ? <p className = "h_error" >{formik.errors.budget}</p> : null}
                  <Form.Group controlId="formrequirements">
                    <Form.Control
                      onChange={formik.handleChange}
                      onBlur = {formik.handleBlur}
                      className="h_form_input"
                      as="textarea"
                      rows={4}
                      name="requirements"
                      value={formik.values.requirements}
                      placeholder="Requirements"
                    />
                  </Form.Group>
                  {formik.touched.requirements && formik.errors.requirements ? <p className = "h_error" >{formik.errors.requirements}</p> : null}
                  <br></br>
                  <Button className="h_form_button" onClick={formik.isValid ? handleSubmit : null}>
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col className="custom_qoute">
            <div>
              <h1>
                “Some beautiful paths can’t be discovered without getting lost.”
              </h1>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default CustomPackage;
