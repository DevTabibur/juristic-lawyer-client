import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import juristicLogo from '../../../Assets/Images/logo (1).png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar  className="py-2 shadow" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="/home">
              <div className="logo-div">
                  <img src={juristicLogo} alt="site__logo" />
              </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">
              <Nav.Link className="menu-link" as={Link} to="/">HOME</Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/about">ABOUT</Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/checkout">CHECKOUT</Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/login">LOGIN</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
