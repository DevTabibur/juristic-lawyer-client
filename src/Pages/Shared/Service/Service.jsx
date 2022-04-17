import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
// import AuthorImg from "../../../Assets/Images/ceo-img.jpg";
import { FaBalanceScale } from "react-icons/fa";
import { GiThink, GiSkills } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services-db.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="service-section py-5">
        <Container>
          <Row>
            <Col md={5} className="m-0 p-0">
              <div className="left-column">
                <div className="inner-content">
                  <h4>
                    “ It showed a lady fitted out with a fur hat and fur boa who
                    sat upright, raising a heavy fur muff that covered the whole
                    of her lower arm towards”
                  </h4>
                  <h3>Juristic John Dow</h3>
                  <br />
                  <p>Lawyer of the US Court</p>
                </div>
              </div>
            </Col>

            <Col md={7} className="m-0 p-0">
              <div className="right-column">
                <div className="section-title-s2 d-flex">
                  <div className="icon-div">
                    <FaBalanceScale className="react-icon" />
                  </div>
                  <div className="icons-side-info">
                    <span>What I'm expert at</span>
                    <h2>Legal Practice Areas</h2>
                    <p>
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque sed ipsum.
                      Nam quam nunc
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="service-bottom-section pt-3 pb-5">
        <Container>
          <Row className="gy-3">
            <Col lg={3} sm={6}>
              <div className="first-column">
                <h4>
                  Some few steps that you need to get the best services from Me
                </h4>
                <Link className="contact-btn shadow-lg" to="/checkout">
                  Free Consultation
                </Link>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="feature-grid">
                <GiSkills className="skill-icon" />
                <h3>Skilled Attorneys</h3>
                <p>
                  Muff that covered the whole of her lower arm towards the
                  viewer gregor then turned to look out the window at the dull
                </p>
                <Link className="contact-btn mt-4 shadow-lg" to="/checkout">
                  Contact With Me
                </Link>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="feature-grid">
                <FaBalanceScale className="skill-icon" />
                <h3>Legal Defence</h3>
                <p>
                  Muff that covered the whole of her lower arm towards the
                  viewer gregor then turned to look out the window at the dull
                </p>
                <Link className="contact-btn mt-4 shadow-lg" to="/checkout">
                  Contact With Me
                </Link>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="feature-grid">
                <ImHammer2 className="skill-icon" />
                <h3>99% case win</h3>
                <p>
                  Muff that covered the whole of her lower arm towards the
                  viewer gregor then turned to look out the window at the dull
                </p>
                <Link className="contact-btn mt-4 shadow-lg" to="/checkout">
                  Contact With Me
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Service;
