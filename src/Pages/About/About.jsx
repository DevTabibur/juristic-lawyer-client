import React from 'react';
import './About.css';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
  return (
    <>
      <div className="about-section">
        <Container>
          <Row>
            <Col>
              <h2>Hey it's me</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About