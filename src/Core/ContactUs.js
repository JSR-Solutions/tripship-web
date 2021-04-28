import React from "react";
import { useRef, useEffect } from "react";
import "../Styles/ContactUs.css";
import "../Styles/Screen.css";
import { TweenMax, Expo } from "gsap";
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
    errors.name = '*Please Enter Your Name';
  }
  else if(empData.name.length > 20){
    errors.name = 'Name Should Not Exeed 20 Characters'
  }

  if(!empData.phNo){
    errors.phNo = '*Please Enter Your Phone number';
  }
  else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(empData.phNo)){
    errors.phNo = 'Phone Number you entered is invalid'
  }

  if(!empData.email){
    errors.email = '*Please Enter Your Email Adress';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
    errors.email = 'Email address you entered in invalid';
  }
  if(!empData.message){
    errors.message = "*Please Enter your Message"
  }
  return errors;
}

function Contact() {
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
      
      <div ref={overlay} className="overlay">
        <h1 ref={overlay_h1}>TRIP</h1>
        <span ref={overlay_span}>SHRIP</span>
      </div>

      <div className="wrapper">
        <div className="nav">
          <div ref={logo} className="logo">
            {/* <h1>
              <span>CONTACT US</span>
              <br />
              _____________
            </h1> */}
          </div>

          <div ref={menu_links_ul_li} className="menu-links">
            <ul>
              <li ref={menu_links_ul_li}>|</li>
              <li ref={menu_links_ul_li}>CONTACT US</li>
              <li ref={menu_links_ul_li}>|</li>
            </ul>
          </div>

          <div ref={scrolldown} className="scrolldown">
            CONTACT US
          </div>
        </div>

        <div ref={text} className="text">
          <div ref={title} className="title">
            contact us
          </div>
          <p ref={text_p}>
          “Travel is the only thing you<br/> buy that makes you richer.”
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
      <div className="contact_back">
        
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
                {formik.touched.name && formik.errors.name ? <p className = "h_error" >{formik.errors.name}</p> : null}
                <Form.Control
                  className="h_form_input"
                  type="text"
                  placeholder="Phone No."
                  name = "phNo"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.phNo}
                ></Form.Control>
                {formik.touched.phNo && formik.errors.phNo ? <p className = "h_error" >{formik.errors.phNo}</p> : null}
                <Form.Control
                  className="h_form_input"
                  type="email"
                  placeholder="Email"
                  name = "email"
                  onBlur = {formik.handleBlur}
                  onChange = {formik.handleChange}
                  value = {formik.values.email}
                ></Form.Control>
                {formik.touched.email && formik.errors.email ? <p className = "h_error" >{formik.errors.email}</p> : null}
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
                {formik.touched.message && formik.errors.message ? <p className = "h_error" >{formik.errors.message}</p> : null}
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
