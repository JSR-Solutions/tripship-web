import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import firebase from "firebase";
import Modal from "react-bootstrap/Modal";
import {toast , ToastContainer} from "react-toastify"
import "./AdminDashboard.css";
import AdminSidebar from "./AdminSidebar";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Package
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this package?</p>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button className="admin-button" onClick={props.onHide}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button className="admin-button" onClick={props.onDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

function EditPackage(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [overviews, setOverviews] = useState([""]);
  const [inclusions, setInclusions] = useState([""]);
  const [terms, setTerms] = useState([""]);
  const [thingsNeeded, setThingsNeeded] = useState([""]);
  const [dates, setDates] = useState([""]);
  const [exclusions, setExclusions] = useState([""]);
  const [map, setMap] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [detailedItinerary, setDetailedItinerary] = useState([
    { day: "", title: "", desc: "" },
  ]);
  const [pricing, setPricing] = useState([{ type: "", cost: 0 }]);
  const [packageType, setPackageType] = useState("Treks");
  const [isUpdated, setUpdated] = useState(false);

  const db = firebase.firestore();

  useEffect(() => {
    getPackage(props.match.params.packageType);
  }, [props]);

  const deletePackage = () => {
    db.collection(props.match.params.packageType)
      .doc(props.match.params.packageId)
      .delete()
      .then(() => {
        setUpdated(true);
      });
  };

  const getPackage = (collection) => {
    db.collection(collection)
      .doc(props.match.params.packageId)
      .get()
      .then((snapshot) => {
        if (snapshot) {
          const data = snapshot.data();
          setOverviews(data.overviews);
          setInclusions(data.inclusions);
          setTerms(data.terms);
          setThingsNeeded(data.thingsNeeded);
          setDates(data.dates);
          setExclusions(data.exclusions);
          setMap(data.map);
          setName(data.name);
          setDuration(data.duration);
          setDetailedItinerary(data.detailedItinerary);
          setPricing(data.pricing);
        }
      })
      .then(() => {
        setPackageType(collection);
      });
  };

  //Basic handle change function
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "duration") {
      setDuration(value);
    }
  };

  //Package Type change handle function
  function handleTypeChange(event) {
    setPackageType(event.target.value);
    console.log(event.target.value);
  }

  //Package image change handle function
  //   function handleImageChange(event) {
  //     let selectedFile = event.target.files[0];
  //     if (selectedFile && types.includes(selectedFile.type)) {
  //       setPackageImage(selectedFile);
  //     } else {
  //       setPackageImage(null);
  //     }
  //   }

  //Overviews dynamic part
  const handleOverviewChange = (e, index) => {
    e.preventDefault();
    const values = [...overviews];
    values[index] = e.target.value;
    setOverviews(values);
  };

  const addOverview = (e) => {
    e.preventDefault();
    setOverviews((prev) => {
      return [...prev, ""];
    });
  };

  const removeOverview = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...overviews];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
      setOverviews(values);
    }
  };

  //Inclusions dynamic part
  const handleInclusionsChange = (e, index) => {
    e.preventDefault();
    const values = [...inclusions];
    values[index] = e.target.value;
    setInclusions(values);
  };

  const addInclusions = (e) => {
    e.preventDefault();
    setInclusions((prev) => {
      return [...prev, ""];
    });
  };

  const removeInclusions = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...inclusions];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setInclusions(values);
  };

  //Terms and conditions dynamic part
  const handleTermsChange = (e, index) => {
    e.preventDefault();
    const values = [...terms];
    values[index] = e.target.value;
    setTerms(values);
  };

  const addTerms = (e) => {
    e.preventDefault();
    setTerms((prev) => {
      return [...prev, ""];
    });
  };

  const removeTerms = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...terms];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setTerms(values);
  };

  //Things needed dynamic part
  const handleThingsNeededChange = (e, index) => {
    e.preventDefault();
    const values = [...thingsNeeded];
    values[index] = e.target.value;
    setThingsNeeded(values);
  };

  const addThingsNeeded = (e) => {
    e.preventDefault();
    setThingsNeeded((prev) => {
      return [...prev, ""];
    });
  };

  const removeThingsNeeded = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...thingsNeeded];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setThingsNeeded(values);
  };

  //Exclusions dynamic part
  const handleExclusionsChange = (e, index) => {
    e.preventDefault();
    const values = [...exclusions];
    values[index] = e.target.value;
    setExclusions(values);
  };

  const addExclusions = (e) => {
    e.preventDefault();
    setExclusions((prev) => {
      return [...prev, ""];
    });
  };

  const removeExclusions = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...exclusions];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setExclusions(values);
  };

  //Dates dynamic part
  const handleDatesChange = (e, index) => {
    e.preventDefault();
    const values = [...dates];
    values[index] = e.target.value;
    setDates(values);
  };

  const addDates = (e) => {
    e.preventDefault();
    setDates((prev) => {
      return [...prev, ""];
    });
  };

  const removeDates = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...dates];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setDates(values);
  };

  //Detailed Itinerary dynamic part
  const handleDetailedItineraryChange = (e, index) => {
    e.preventDefault();
    const values = [...detailedItinerary];
    const { name, value } = e.target;
    if (name === "day") {
      values[index].day = value;
    } else if (name === "title") {
      values[index].title = value;
    } else if (name === "desc") {
      values[index].desc = value;
    }
    setDetailedItinerary(values);
  };

  const addDetailedItinerary = (e) => {
    e.preventDefault();
    setDetailedItinerary((prev) => {
      return [...prev, { day: "", title: "", desc: "" }];
    });
  };

  const removeDetailedItinerary = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...detailedItinerary];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setDetailedItinerary(values);
  };

  // Map handle change function
  const handleMapChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setMap(value);
  };

  //Pricing dynamic part
  const handlePricingChange = (e, index) => {
    e.preventDefault();
    const values = [...pricing];
    const { name, value } = e.target;
    if (name === "type") {
      values[index].type = value;
    } else if (name === "cost") {
      values[index].cost = value;
    }
    setPricing(values);
  };

  const addPricing = (e) => {
    e.preventDefault();
    setPricing((prev) => {
      return [...prev, { type: "", cost: 0 }];
    });
  };

  const removePricing = (index) => {
    console.log("Element to be removed : " + index);
    const values = [...pricing];
    if (values.length > 1) {
      values.splice(index, 1);
      console.log(values);
    }
    setPricing(values);
  };

  const updatePackage = (e) => {
    e.preventDefault();
    if(name == "" || pricing[0].type == "" || pricing[0].cost == 0 || duration == "" || map == "" || exclusions[0] == "" || dates[0] == "" || thingsNeeded[0] == "" || terms[0] == "" || inclusions[0] == "" || detailedItinerary[0].day == "" || detailedItinerary[0].desc == "" || detailedItinerary[0].title == ""){
        toast.error("Some fiels are empty")
    }
    else{
      db.collection(packageType)
      .doc(props.match.params.packageId)
      .update({
        overviews: overviews,
        inclusions: inclusions,
        exclusions: exclusions,
        map: map,
        terms: terms,
        name: name,
        dates: dates,
        duration: duration,
        detailedItinerary: detailedItinerary,
        pricing: pricing,
        packageType: packageType,
        thingsNeeded: thingsNeeded,
      })
      .then(() => {
        setUpdated(true);
      });
    }
  };

  return (
    <div>
      {isUpdated ? <Redirect to="/admin/allpackages" /> : null}
      <AdminSidebar />
      <ToastContainer />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onDelete={deletePackage}
      />
      <div className="admin-dashboard-main-div">
        <h2>Hello, Admin! Welcome to the Edit Package section.</h2>
        <p>
          Please update all the required fields below as per your requirements
          to update the package details.
        </p>
        <div className="admin-dashboard-content-div">
          <Form className="admin-dashboard-form">
            <h5 className="form-admin-title">Package Name</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder={"Package Name"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Type</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    onChange={handleTypeChange}
                    className="add-package-form-input"
                    as="select"
                    name="package-type"
                    required
                    value={packageType}
                  >
                    <option>Treks</option>
                    <option>Backpacking Trips</option>
                    <option>Bike Trips</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="form-admin-title">Package Duration</h5>
            <Row>
              <Col lg={10}>
                <Form.Group className="admin-dashboard-form-group">
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    required
                    name="duration"
                    value={duration}
                    placeholder={"Package Duration"}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h5 className="form-admin-title">Overview</h5>
            {overviews.map((overview, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          as="textarea"
                          required
                          name="overview"
                          value={overview}
                          placeholder={"Overview paragraph " + (index + 1)}
                          onChange={(event) => {
                            handleOverviewChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addOverview}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeOverview(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Detailed Itinerary</h5>
            {detailedItinerary.map((detailed, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="day"
                          value={detailed.day}
                          placeholder={"Day " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="title"
                          value={detailed.title}
                          placeholder={"Title " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          as="textarea"
                          name="desc"
                          value={detailed.desc}
                          placeholder={"Description " + (index + 1)}
                          onChange={(event) => {
                            handleDetailedItineraryChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addDetailedItinerary}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeDetailedItinerary(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Pricing</h5>
            {pricing.map((price, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="type"
                          value={price.type}
                          placeholder={"Pricing Type " + (index + 1)}
                          onChange={(event) => {
                            handlePricingChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="number"
                          name="cost"
                          value={price.cost}
                          placeholder={"Cost " + (index + 1)}
                          onChange={(event) => {
                            handlePricingChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addPricing}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removePricing(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Inclusions</h5>
            {inclusions.map((inclusion, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="inclusion"
                          value={inclusion}
                          placeholder={"Inclusion " + (index + 1)}
                          onChange={(event) => {
                            handleInclusionsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addInclusions}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeInclusions(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Exclusions</h5>
            {exclusions.map((exclusion, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="exclusion"
                          value={exclusion}
                          placeholder={"Exclusion " + (index + 1)}
                          onChange={(event) => {
                            handleExclusionsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addExclusions}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeExclusions(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Package Dates</h5>
            {dates.map((date, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="date"
                          value={date}
                          placeholder={"Date " + (index + 1)}
                          onChange={(event) => {
                            handleDatesChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addDates}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeDates(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Terms and Conditions</h5>
            {terms.map((term, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="term"
                          value={term}
                          placeholder={"Term " + (index + 1)}
                          onChange={(event) => {
                            handleTermsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addTerms}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeTerms(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            <h5 className="form-admin-title">Things Needed</h5>
            {thingsNeeded.map((thing, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="thing"
                          value={thing}
                          placeholder={"Thing Needed " + (index + 1)}
                          onChange={(event) => {
                            handleThingsNeededChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addThingsNeeded}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeThingsNeeded(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}

            <hr />
            {/* <h5 className="form-admin-title">Reviews</h5>
            {reviews.map((review, index) => {
              return (
                <div className="admin-dashboard-form-group">
                  <Row>
                    <Col lg={10}>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="customerName"
                          value={review.customerName}
                          placeholder={"Customer Name"}
                          onChange={(event) => {
                            handleReviewsChange(event, index);
                          }}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          className="admin-dashboard-form-input"
                          type="text"
                          name="customerReview"
                          value={review.customerReview}
                          placeholder={"Customer Review"}
                          onChange={(event) => {
                            handleReviewsChange(event, index);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col className="form-admin-button-col" lg={2}>
                      <Button
                        onClick={addReviews}
                        className="admin-dashboard-form-button"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => {
                          removeReviews(index);
                        }}
                        className="admin-dashboard-form-button"
                      >
                        -
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              );
            })}
            <hr /> */}
            <h5 className="form-admin-title">Map</h5>
            <Row>
              <Col lg={10}>
                <Form.Group>
                  <Form.Control
                    className="admin-dashboard-form-input"
                    type="text"
                    name="map"
                    value={map}
                    placeholder={"Map Location"}
                    onChange={(event) => {
                      handleMapChange(event);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <Button onClick={updatePackage} className="admin-button">
              Update Package
            </Button>

            <Button onClick={() => setModalShow(true)} className="admin-button">
              Delete Package
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default EditPackage;
