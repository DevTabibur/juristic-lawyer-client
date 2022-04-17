import React from 'react';
import './About.css';
import {Container, Row, Col} from 'react-bootstrap';
import AboutImg from '../../Assets/Images/about.jpg';
import Signature from '../../Assets/Images/signature.png';
import {GoHome} from 'react-icons/go'

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

            <Col md={4} sm={12}>
              <div className="left-col">
                <div className="section-title">
                  <div className="icon">
                    <GoHome className='go-home-icon'/>
                  </div>
                  <span>About Juristic</span>
                  <h2>I'm The Most Popular Lawyer With Various Law Services!</h2>
                  <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
                </div>
              </div>
            </Col>

            <Col md={4} sm={12}>
            <div className="mid-col">
              <img src={AboutImg} alt="AboutImg" />
            </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="right-col">
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero</p>
                <div className="quoter">
                  <h4>Juristic John Dow</h4>
                  <span>- Lawyer of the US Court</span>
                </div>
                <div className="signature">
                  <img src={Signature} alt="Signature" />
                </div>
              </div>

            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default About