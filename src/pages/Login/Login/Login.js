import React, { useState } from "react";
import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    Row,
    Spinner
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError, logOut } =
        useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const GoogleIcon = <FontAwesomeIcon icon={faGoogle} />;

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    };

    return (
        <Container>
            <div className="py-4 login-page-container">
                <Row className="login-container g-5">
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        {user?.email ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "50vh"
                                }}
                            >
                                <h3>You are already Signed In.</h3>
                                <p>
                                    Feel free to browse our website and check
                                    out our valuable services
                                </p>
                                <p className="fs-4">Thank You</p>
                                <Button
                                    onClick={() => logOut()}
                                    variant="warning"
                                    className="w-25"
                                >
                                    Log Out
                                </Button>
                            </div>
                        ) : (
                            <div className="p-5 login-form-container">
                                <h3 className="mb-3">Welcome</h3>
                                <Form onSubmit={handleLoginSubmit}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name="email"
                                            onBlur={handleOnChange}
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-1"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onBlur={handleOnChange}
                                        />
                                    </Form.Group>

                                    <NavLink
                                        to="/register"
                                        style={{
                                            display: "block",
                                            textDecoration: "none",
                                            padding: "5px 0",
                                            color: "slateGray"
                                        }}
                                    >
                                        New User? Click Me to Register!
                                    </NavLink>

                                    {!isLoading ? (
                                        <Button
                                            variant="warning"
                                            type="submit"
                                            className="px-5 text-black-50 fw-bold"
                                        >
                                            Login
                                        </Button>
                                    ) : (
                                        <Spinner
                                            className="mx-3"
                                            animation="border"
                                        />
                                    )}

                                    {user?.email && (
                                        <Alert
                                            className="mt-3"
                                            variant="success"
                                        >
                                            Login Success!
                                        </Alert>
                                    )}
                                    {authError && (
                                        <Alert
                                            variant="warning"
                                            className="mt-3"
                                        >
                                            Login Failed! Error: {authError}
                                        </Alert>
                                    )}
                                </Form>
                                {!isLoading && (
                                    <div className="mt-4">
                                        <h5>Sign In with</h5>
                                        <Button
                                            onClick={handleGoogleSignIn}
                                            variant="warning"
                                            className="text-black-50 fw-bold"
                                        >
                                            {GoogleIcon}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img
                            width="70%"
                            src="https://i.ibb.co/Vp9BfH4/login.png"
                            alt=""
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Login;
