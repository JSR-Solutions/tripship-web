import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import firebase from "firebase";
import { Col, Row } from "react-bootstrap";
import Card from "../Components/Card1";
import { Link } from "react-router-dom";

function CategoryScreen(props) {
  const [packages, setPackages] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = () => {
    setPackages([]);
    db.collection(props.match.params.category)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.docs.forEach((doc) => {
            const data = doc.data();
            setPackages((prev) => {
              return [...prev, data];
            });
          });
        }
      });
  };

  return (
    <div>
      <Header />
      <Row>
        {packages.map((pckg) => {
          return (
            <Col lg={3} md={4} sm={12}>
              <Link className="package-card"
                to={`/packages/${props.match.params.category}/${pckg.packageId}`}
              >
                <Card
                  date="5"
                  headi={pckg.name}
                  text={`${pckg.overviews[0].substring(0, 80)}...`}
                  food="0"
                  stay="1"
                  sight="1"
                  travel="1"
                  image={pckg.imageUrl}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}

export default CategoryScreen;
