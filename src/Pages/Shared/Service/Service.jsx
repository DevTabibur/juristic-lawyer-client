import React, { useState, useEffect } from "react";
import "./Service.css";
import { Container, Row, Col } from "react-bootstrap";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services-db.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Container>
        <Row className="g-4">
          {services.map((service) => (
            <ShowServices key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

const ShowServices = ({ service }) => {
  return (
    <>
      <Col md={4}>
        <div className="service-box shadow">
          <div className="service-box-imgDiv">
            <img src={service.image} alt="service__img" />
          </div>
          <h4>{service.title}</h4>
          <h6>Price: ${service.price}</h6>
          <p>{service.description}</p>
        </div>
      </Col>
    </>
  );
};

export default Service;
