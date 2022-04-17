import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "../../Assets/Icons/google (1).svg";

const Login = () => {
  const googleAuth = () => {
    alert();
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Login Here</h2>
            <p>Gregor then turned to look out the window at the weather</p>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col></Col>
          <Col sm={4}>
            <div className="form-bg shadow rounded-3 p-3">
              <h2 className="title text-center my-2">
                Login <span className="title-2">Form</span>
              </h2>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button type="submit" className="w-100 d-block login-btn">
                  LOGIN
                </Button>

                <div className="my-3 d-flex justify-content-center form-bottom-text">
                  <h6 className="text-dark ">
                    New to Juristic?{" "}
                    <Link to="/register"> Create an Account</Link>
                  </h6>
                </div>

                <div className="or-text d-flex align-items-center justify-content-center">
                  <span>--------</span>
                  <h6 className="mt-2 mx-4">
                    <span>OR</span>
                  </h6>
                  <span>--------</span>
                </div>

                <div className="logo-wrapper w-100">
                  <button className="google-auth" onClick={googleAuth}>
                    <img src={GoogleLogo} alt="google__logo" />
                    <p> Continue with Google </p>
                  </button>
                </div>
              </Form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
