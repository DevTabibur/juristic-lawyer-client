/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterLogo from "../../../Assets/Images/footer-logo.png";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="footer-top py-4">
        <Container>
          <Row>
            <Col
              md={4}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="social-icon ">
                <ul>
                  <li>
                    <BsFacebook className="flex-icon" />
                  </li>
                  <li>
                    <BsTwitter className="flex-icon" />
                  </li>
                  <li>
                    <ImWhatsapp className="flex-icon" />
                  </li>
                  <li>
                    <BsGithub className="flex-icon" />
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="mid-col-logo d-flex align-items-center justify-content-center">
                <img src={FooterLogo} alt="FooterLogo" />
              </div>
            </Col>

            <Col md={4} sm={12} className="d-flex align-items-center justify-content-center">
              <div className="right-news-letter">
                <h3>Newsletter</h3>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    SEND
                  </InputGroup.Text>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* footer bottom */}
      <section id="footer-bottom" className="footer-bottom">
        <div className="container">
          <p className="text-center copyright py-3">
            Copyright © {year} all rights reserved by Dev Tabibur .
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
