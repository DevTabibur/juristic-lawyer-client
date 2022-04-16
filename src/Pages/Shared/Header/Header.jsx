import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import juristicLogo from '../../../Assets/Images/logo (1).png';

const Header = () => {
  return (
    <div className="header ">
      <Navbar className="py-2 shadow" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="/home">
              <div className="logo-div">
                  <img src={juristicLogo} alt="site__logo" />
              </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">
              <Nav.Link href="">HOME</Nav.Link>
              <Nav.Link href="#pricing">BLOG</Nav.Link>
              <Nav.Link href="#pricing">ABOUT</Nav.Link>
              <Nav.Link href="#pricing">CHECKOUT</Nav.Link>

              <Nav.Link href="#pricing">CONTACT</Nav.Link>
              <Nav.Link href="#pricing">LOGIN</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
