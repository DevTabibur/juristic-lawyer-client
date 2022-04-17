// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Register.css';
import '../Login/Login.css'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleLogo from "../../Assets/Icons/google (1).svg";
import auth from "../../Firebase/Firebase.init";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
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

  const handleConfirmPasswordChange = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(userInfo);
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
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
  }, [hookError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <>
      <div className="page-title shadow">
        <Container className="py-5">
          <Row>
            <h2>Register Here</h2>
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
                  Register <span className="title-2">Form</span>
                </h2>

                <Form onSubmit={handleRegister}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    onChange={handleEmailChange}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    {errors?.email && <p className="error-text">{errors.email}</p>}
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPass ? "text" : "password"} onChange={handlePasswordChange}  placeholder="Password" />
                    <p className="absolute top-3 right-5" onClick={() => setShowPass(!showPass)}>🔥</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    onChange={handleConfirmPasswordChange}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {errors?.password && <p className="error-text">{errors.password}</p>}

                  </Form.Group>

                  <Button type="submit" className="w-100 d-block login-btn">
                    REGISTER
                  </Button>

                  <div className="my-3 d-flex justify-content-center form-bottom-text">
                    <h6 className="text-dark ">
                      Already have an Account?{" "}
                      <Link to="/login"> Please Login!</Link>
                    </h6>
                  </div>
                </Form>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
