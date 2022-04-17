import React from 'react';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import Service from '../Shared/Service/Service';


const Home = () => {
  return (
    <>
      <HeroBanner/>
      <Service/>
    </>
  )
}

export default Home