import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/CustomPackage.css"
import {Row,Col,Form,Button} from "react-bootstrap";
import firebase from "firebase";
import {useState} from "react";

function CustomPackage(){
    const [cust,setCust]=useState({name:"",phoneNo:"",email:"",destination:"",noOfPeople:"",budget:"",requirements:""});
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [destination, setDestination] = useState("");
    const [noOfPeople, setNoOfPeople] = useState("");
    const [budget, setBudget] = useState("");
    const [requirements, setRequirements] = useState("");
    const [ErrorName, setErrorName] = useState("");
    const [ErrorPhoneNo, setErrorPhoneNo] = useState("");
    const [ErrorEmail, setErrorEmail] = useState("");
    const [ErrorDestination, setErrorDestination] = useState("");
    const [ErrorNoOfPeople, setErrorNoOfPeople] = useState("");
    const [Errorbudget, setErrorBudget] = useState("");
    const [Errorrequirements, setErrorRequirements] = useState("");
    const db=firebase.firestore();
  




    function validate(event) {
        setErrorName("");
        setErrorNoOfPeople("");
        setErrorRequirements("");
        setErrorPhoneNo("");
        setErrorBudget("");
        setErrorEmail("");
        setErrorDestination("");
    
        if (!name) {
          setErrorName("*Name cannot be empty");
          return false;
        } else if (phoneNo.length !== 10) {
          setErrorPhoneNo("*Phone no. should be of 10 digits ");
          return false;
        } else if (!email.includes("@")) {
          setErrorEmail("*Email must contain @");
          return false;
        } else if (!destination) {
          setErrorDestination("*Destination cannot be empty");
          return false;
        } else {
          return true;
        }
      }
    
    
    
    function handleChange(event) {
        const custom=cust;
        const { name, value } = event.target;
        if (name === "name") {
          setName(value);
          custom.name=value;
        }
        if (name === "phoneNo") {
          setPhoneNo(value);
          custom.phoneNo=value;
        }
        if (name === "budget") {
          setBudget(value);
          custom.budget=value;
        }
        if (name === "destination") {
          setDestination(value);
          custom.destination=value;
        }
        if (name === "email") {
          setEmail(value);
          custom.email=value;
        }
        if (name === "noOfPeople") {
          setNoOfPeople(value);
          custom.noOfPeople=value;
        }
        if (name === "requirements") {
          setRequirements(value);
          custom.requirements=value;
        }
        setCust(custom);
      }

      function handleSubmit(event) {
        const isValid = validate();
        if (isValid) {
          db.collection("CustomPackage").add({
            customEnquiry:cust
          }).then(()=>{
          console.log(cust);
          setCust({name:"",phoneNo:"",email:"",destination:"",noOfPeople:"",budget:"",requirements:""});
          setName("");
          setNoOfPeople("");
          setRequirements("");
          setPhoneNo("");
          setBudget("");
          setEmail("");
          setDestination("");
          setErrorName("");
          setErrorNoOfPeople("");
          setErrorRequirements("");
          setErrorPhoneNo("");
          setErrorBudget("");
          setErrorEmail("");
          setErrorDestination("");
        } )
          
        } else if (!isValid) {
          console.log(ErrorEmail, ErrorName, ErrorPhoneNo);
        }
      }



    return(
        <div>
        <Header/>
        <div className="h_custBack">
        <Row>
        <Col>
        <div>
        <div className="h_customform">
        <h2>Make your Own Package</h2>
        
              <Form>
                <Form.Group controlId="formname">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                  />
                </Form.Group>
                <div className="h_error">{ErrorName}</div>
                <Form.Group controlId="formphone_no">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="number"
                    name="phoneNo"
                    value={phoneNo}
                    placeholder="Phone No"
                  />
                </Form.Group>
                <div className="h_error">{ErrorPhoneNo}</div>
                <Form.Group controlId="formemail">
                  
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                  />
                </Form.Group>
                <div className="h_error">{ErrorEmail}</div>
                <Form.Group controlId="formdestination">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="text"
                    name="destination"
                    value={destination}
                    placeholder="Destination"
                  />
                </Form.Group>
                <div className="h_error">{ErrorDestination}</div>
                <Form.Group controlId="formNoofPeople">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="text"
                    name="noOfPeople"
                    value={noOfPeople}
                    placeholder="No of People"
                  />
                </Form.Group>
                <Form.Group controlId="formbudget">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    type="text"
                    name="budget"
                    value={budget}
                    placeholder="Budget"
                  />
                </Form.Group>
                <Form.Group controlId="formrequirements">
                  <Form.Control
                    onChange={handleChange}
                    className="h_form_input"
                    as="textarea"
                    rows={4}
                    name="requirements"
                    value={requirements}
                    placeholder="Requirements"
                  />
                </Form.Group>
                <br></br>
                <Button className="h_form_button" onClick={handleSubmit}>Submit</Button>
              </Form>
              </div>
        </div>
        </Col>
        <Col className="custom_qoute">
        <div >
        <h1>
        “Some beautiful paths can’t be discovered without getting lost.”
        </h1>
        </div>
        </Col>
        </Row>

        </div>
        <Footer/>
        </div>
    )
    ;
}
export default CustomPackage;