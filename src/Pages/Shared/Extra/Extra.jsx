// @ts-nocheck
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Extra.css";
// import AuthorImg from "../../../Assets/Images/ceo-img.jpg";
import { FaBalanceScale } from "react-icons/fa";
import { GiThink, GiSkills } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Extra = () => {
  
  return (
    <>
      <div className="service-section py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
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
                      Banking and Debt Finance law, Criminal law, Personal injury Law, Charity Law, Corporate Law, Commercial Law, Construction Law, Employment Law, Environment Law etc..
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
                 I have a lot of attorneys skills including math knowledge, science knowledge, sports knowledge and many more..
                </p>
                <Link className="contact-btn mt-4 shadow-lg" to="/checkout">
                  Contact With Me
                </Link>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="feature-grid">
                <FaBalanceScale className="skill-icon" />
                <h3>Legal Defense</h3>
                <p>
                A defense can either allege a failure to state a claim, or affirm the existence of a claim and present additional..
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
                Briefly summarize the facts of the case. Facts are the “who, when, what, where, and why” of the case. Describe the..
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

export default Extra;
