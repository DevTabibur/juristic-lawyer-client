import React from 'react';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import Extra from '../Shared/Extra/Extra';
import Service from '../Shared/Service/Service';


const Home = () => {
  return (
    <>
      <HeroBanner/>
      <Service/>
      <Extra/>
    </>
  )
}

export default Home