// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "../../Assets/Icons/google (1).svg";
import auth from "../../Firebase/Firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

// for toastify

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, googleError]);


  if(googleUser)
  {
    navigate("/home")
  }

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

      <div className="login-bg">
        <Container className="py-5">
          <Row>
            <Col></Col>
            <Col sm={4}>
              <div className="form-bg shadow rounded-3 p-3">
                <h2 className="title text-center my-2">
                  Login <span className="title-2">Form</span>
                </h2>
                <Form onSubmit={handleLogin}>
                <ToastContainer/>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      onBlur={handleEmailChange}
                      type="email"
                      placeholder="Enter email"
                    />
                    {errors?.email && (
                      <p className="error-text">{errors.email}</p>
                    )}

                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>

                    <Form.Control
                      onChange={handlePasswordChange}
                      type="password"
                      placeholder="Password"
                    />
                    {errors?.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
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

                  
                </Form>
                <div className="logo-wrapper w-100">
                    <button className="google-auth" onClick={() => signInWithGoogle()}>
                      <img src={GoogleLogo} alt="google__logo" />
                      <p> Continue with Google </p>
                    </button>
                  </div>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
