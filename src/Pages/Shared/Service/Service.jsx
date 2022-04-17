import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
// import AuthorImg from "../../../Assets/Images/ceo-img.jpg";
import { FaBalanceScale } from "react-icons/fa";
import {MdOutlineFamilyRestroom, MdPersonalInjury, MdAddBusiness,  MdCastForEducation} from 'react-icons/md';
import {GiThink} from 'react-icons/gi';
import {SiHomeassistantcommunitystore} from 'react-icons/si';


const Service = () => {
  return (
    <>
      <div className="service-section py-4">
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
                  <span>What I'm  expert at</span>
                  <h2>Legal Practice Areas</h2>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                    quam nunc
                  </p>
                </div>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="service-bottom-section">
      <Container>
        <Row>
          <Col>11</Col>
          <Col>22</Col>
          <Col>33</Col>
          <Col>44</Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Service;
