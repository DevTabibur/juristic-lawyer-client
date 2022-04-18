import React, { useState, useEffect } from "react";
import "./Service.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services-db.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Container className="py-5">
        <Row className="">
          {services.map((service) => (
            <ShowServices key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </>
  );
};

const ShowServices = ({ service }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col md={4} className="shadow rounded parent-col g-3">
        <div className="service-box">
          <div className="service-box-imgDiv">
            <img src={service.image} alt="service__img" />
          </div>
          <h3>{service.title}</h3>
          <h6>Price: ${service.price}</h6>
          <p>{service.description}</p>
          <button onClick={()=>navigate("/checkout")} className="check-out-btn" >Check Out</button>
        </div>
      </Col>
    </>
  );
};

export default Service;
