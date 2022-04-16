import React from 'react';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';


const Home = () => {
  return (
    <>
    <h1>Hero Banner</h1>
      <HeroBanner/>
    </>
  )
}

export default Home