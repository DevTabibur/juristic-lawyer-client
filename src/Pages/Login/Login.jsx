// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleLogo from "../../Assets/Icons/google (1).svg";
import auth from "../../Firebase/Firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

// for toastify

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";

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

  const [user1] = useAuthState(auth);
  useEffect(() => {
    if (user1) {
      navigate(from, { replace: true });
    }
  }, [user1]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email provided, please provide a valid email", {
            toastId: "InvalidEmail",
          });
          break;

        case "auth/invalid-password":
          toast.error("Wrong password. Intruder!!", {
            toastId: "InvalidEmail",
          });
          break;
        default:
          toast.error("something went wrong", { toastId: "InvalidEmail" });
      }
    }
  }, [hookError, googleError]);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    const email = userInfo.email;
    // console.log("email", email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast("please enter your email address");
    }
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
                  <ToastContainer />
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
                  <div className="my-3 d-flex justify-content-center form-bottom-text">
                    <h6 className="text-dark ">
                      Forget Password?{" "}
                      <span className="pass-reset" onClick={resetPassword}>
                        {" "}
                        Please Reset!
                      </span>
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
                  <button
                    className="google-auth"
                    onClick={() => signInWithGoogle()}
                  >
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
