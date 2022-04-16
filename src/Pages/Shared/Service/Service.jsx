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
    <div className="service-section py-4">
      <Container>
        <Row>
          <Col md={5} className="m-0 p-0">
            <div className="left-column">
              {/* <img src={AuthorImg} alt="author__img" /> */}
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
                  <span>What we are expert at</span>
                  <h2>Legal Practice Areas</h2>
                  <p>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                    semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                    quam nunc
                  </p>
                </div>
              </div>
              <div className="service-boxes">

                <div className="service-box">
                  <div className="icon">
                    <MdOutlineFamilyRestroom/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Family Law</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

                <div className="service-box">
                  <div className="icon">
                    <MdPersonalInjury/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Personal Injury</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

                <div className="service-box">
                  <div className="icon">
                    <GiThink/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Criminal Law</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

                <div className="service-box">
                  <div className="icon">
                    <MdCastForEducation/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Education Law</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

                <div className="service-box">
                  <div className="icon">
                    <SiHomeassistantcommunitystore/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Real Estate Law</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

                <div className="service-box">
                  <div className="icon">
                    <MdAddBusiness/>
                  </div>
                  <div className="icons-side-info">
                  <h2>Business Law</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quae!
                  </p>
                </div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
