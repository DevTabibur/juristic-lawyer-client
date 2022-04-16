import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Section.css";
// import AuthorImg from "../../../Assets/Images/ceo-img.jpg";

const Section = () => {
  return (
    <div className="service-section py-4">
      <Container>
        <Row>
          <Col md={5}>
            <div className="left-column">
              {/* <img src={AuthorImg} alt="author__img" /> */}
              <div className="inner-content">
                <p>
                  “ It showed a lady fitted out with a fur hat and fur boa who
                  sat upright, raising a heavy fur muff that covered the whole
                  of her lower arm towards”
                </p>
                <p>Juristic John Dow</p>
                <br />
                <p>Lawyer of the US Court</p>
              </div>
            </div>
          </Col>

          <Col md={7}>
            <h3>boo</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
