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

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError, logOut } =
        useAuth();

    const location = useLocation();
    const navigate = useNavigate();

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
            <div className="py-5">
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
                            <div>
                                <h1>Login</h1>
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
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onBlur={handleOnChange}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="warning"
                                        type="submit"
                                        className="w-25"
                                    >
                                        Login
                                    </Button>
                                    <NavLink
                                        to="/register"
                                        style={{
                                            display: "block",
                                            textDecoration: "none",
                                            paddingTop: "10px"
                                        }}
                                    >
                                        New User? Please Register!
                                    </NavLink>
                                    {isLoading && (
                                        <Spinner animation="border" />
                                    )}
                                    {user?.email && (
                                        <Alert variant="success">
                                            Login Success!
                                        </Alert>
                                    )}
                                    {authError && (
                                        <Alert variant="warning">
                                            Login Failed! Error: {authError}
                                        </Alert>
                                    )}
                                </Form>
                                {!isLoading && (
                                    <div className="bg-light py-4">
                                        <h5>Your can Sign in With Google</h5>
                                        <Button
                                            onClick={handleGoogleSignIn}
                                            variant="warning"
                                        >
                                            Google Sign-In
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
