import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { useState } from "react";
import {useFormik} from 'formik'
import { useRef, useEffect } from "react";
import "../Styles/Screen copy.css";
import { TweenMax, Expo } from "gsap";
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
  let overlay = useRef(null);
  let overlay_h1 = useRef(null);
  let overlay_span = useRef(null);
  let ellipse_container = useRef(null);
  let yellow = useRef(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let logo = useRef(null);
  let menu_links_ul_li = useRef(null);
  let scrolldown = useRef(null);
  let title = useRef(null);
  let text = useRef(null);
  let text_p = useRef(null);
  let watchnow = useRef(null);

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

  useEffect(() => {
    TweenMax.to(overlay_h1.current, 2, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay_span.current, 2, {
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay.current, 2, {
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(ellipse_container.current, 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(yellow.current, 1, {
      delay: 3.5,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(circle1.current, 1, {
      delay: 2.4,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(circle2.current, 1, {
      delay: 2.6,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(logo.current, 1, {
      delay: 3,
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      menu_links_ul_li.current,
      1,
      {
        delay: 3.2,
        opacity: 0,
        x: -100,
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.from(scrolldown.current, 1, {
      delay: 3.4,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut,
    });

    TweenMax.from(title.current, 1, {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(text.current, 1, {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(text_p.current, 1, {
      delay: 3.2,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(watchnow.current, 1, {
      delay: 3.4,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });
  }, []);


  
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
      <div ref={overlay} className="overlay">
        <h1 ref={overlay_h1}>TRIP</h1>
        <span ref={overlay_span}>SHRIP</span>
      </div>

      <div className="wrapper">
        <div className="nav">
          <div ref={logo} className="logo">
            <h1>
              <span>CUSTOM PACKAGE</span>
              <br />
              _____________
            </h1>
          </div>

          <div ref={menu_links_ul_li} className="menu-links">
            <ul>
              <li ref={menu_links_ul_li}>|</li>
              <li ref={menu_links_ul_li}>CUSTOM PACKAGE</li>
              <li ref={menu_links_ul_li}>|</li>
            </ul>
          </div>

          <div ref={scrolldown} className="scrolldown">
          CUSTOM PACKAGE
          </div>
        </div>

        <div ref={text} className="text">
          <div ref={title} className="title">
            custom package
          </div>
          <p ref={text_p}>
          “Remember that <br/>happiness is a way of travel,<br/> not a destination.”
          </p>
        </div>

        <div ref={watchnow} className="watchnow">
          <i className="fa fa-circle"></i>
          <a href="#"></a>
        </div>

        <div ref={ellipse_container} className="ellipse-container">
          <div className="ellipse thin"></div>
          <div className="ellipse thick"></div>
          <div className="ellipse yellow"></div>
          <div ref={circle1} className="circle1"></div>
          <div ref={circle2} className="circle2"></div>
        </div>
      </div>
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
