import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import juristicLogo from "../../../Assets/Images/logo (1).png";
import { Link, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  console.log("home", user);

  return (
    <div className="header">
      <Navbar
        className="py-2 shadow"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div className="logo-div">
              <img src={juristicLogo} alt="site__logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="menu-link" as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/blog">
                BLOG
              </Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link className="menu-link" as={Link} to="/checkout">
                CHECKOUT
              </Nav.Link>
              {user ? (
                <button  onClick={() => signOut(auth)}>LOGOUT</button>
              ) : (
                <Nav.Link className="menu-link" as={Link} to="/login">
                  LOGIN
                </Nav.Link>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
