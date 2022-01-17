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
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [regData, setRegData] = useState({});
    const { user, registerUser, isLoading, authError, setAuthError } =
        useAuth();

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegData = { ...regData };
        newRegData[field] = value;
        setRegData(newRegData);
    };
    const handleRegSubmit = (e) => {
        e.preventDefault();
        if (regData.password !== regData.password2) {
            setAuthError("Please type the same Password!");
            return;
        }
        registerUser(regData.email, regData.password, regData.name, navigate);
    };

    return (
        <Container>
            <div className="py-4">
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
                                <h3>
                                    You are already Registered and Signed In.
                                </h3>
                                <p>
                                    Feel free to browse our website and check
                                    out our valuable services
                                </p>
                                <p className="fs-4">Thank You</p>
                            </div>
                        ) : (
                            <div className="login-form-container p-5">
                                <h3 className="mb-3">Register</h3>
                                <Form onSubmit={handleRegSubmit}>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            onBlur={handleOnChange}
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email"
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
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="password"
                                            placeholder="Re-Enter Password"
                                            name="password2"
                                            onBlur={handleOnChange}
                                        />
                                    </Form.Group>

                                    {!isLoading ? (
                                        <Button
                                            variant="warning"
                                            type="submit"
                                            className="px-4 text-black-50 fw-bold"
                                        >
                                            Register
                                        </Button>
                                    ) : (
                                        <Spinner animation="border" />
                                    )}
                                    <NavLink
                                        to="/login"
                                        style={{
                                            display: "block",
                                            textDecoration: "none",
                                            paddingTop: "10px",
                                            color: "slateGray"
                                        }}
                                    >
                                        Already User? Click Me!
                                    </NavLink>

                                    {user?.email && (
                                        <Alert
                                            className="mt-3"
                                            variant="success"
                                        >
                                            Registration Success!
                                        </Alert>
                                    )}
                                    {authError && (
                                        <Alert
                                            className="mt-3"
                                            variant="warning"
                                        >
                                            Registration Failed! Error:{" "}
                                            {authError}
                                        </Alert>
                                    )}
                                </Form>
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
                            width="80%"
                            src="https://i.ibb.co/dmRWvf3/register.png"
                            alt=""
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Register;
