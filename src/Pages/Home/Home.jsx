import React from 'react';
import './Home.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import Extra from '../Shared/Extra/Extra';
import Service from '../Shared/Service/Service';
import GoogleMap from '../Shared/Google Map/GoogleMap';


const Home = () => {
  return (
    <>
      {/* <HeroBanner/>
      <Service/>
      <Extra/> */}
      <GoogleMap/>
    </>
  )
}

export default Home