import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../../Assets/Images/about.png";
import Signature from "../../Assets/Images/signature.png";
import { GoHome } from "react-icons/go";

const About = () => {
  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>About Me</h2>
            <p>Gregor then turned to look out the window at the weather</p>
          </Row>
        </Container>
      </div>

      <div className="about-section py-5">
        <Container>
          <Row>
            <Col md={5} sm={12}>
              <div className="left-col">
                <div className="section-title">
                  <div className="icon">
                    <GoHome className="go-home-icon" />
                  </div>
                  <span>About Me</span>
                  <h2>Tabibur Rahman</h2>
                </div>
              </div>
              <div className="right-col">
                <p>
                  I want to be a professional web developer at 2022 Insha-Allah.
                  My life is a very simple. My father has been died when I was
                  only two. My first and only first aim is that to be a MERN
                  stack developer. And get a job at 2022 Insha-Allah. For
                  getting a job, I worked hard with Smart way. Best Wishes for
                  me.
                </p>
                <div className="quoter">
                  <h4>Tabibur Rahman</h4>
                  <span>- Learner at Programming hero</span>
                </div>
              </div>
            </Col>
            <Col md={2}></Col>

            <Col md={5} sm={12} order="1">
              <div className="mid-col">
                <img src={AboutImg} alt="AboutImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
