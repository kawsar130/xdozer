import React from "react";
import "./Footer.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const headsetIcon = <FontAwesomeIcon icon={faHeadset} />;
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const locationIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />;
    const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />;
    return (
        <div className="footer-container">
            <Container>
                <Row className="text-start">
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mb-4">
                        <h4 className="mb-4 footer-title">Contact Us</h4>
                        <div>
                            <div className="footer-icon-text">
                                <p>{headsetIcon}</p>
                                <p className="ms-2">+88-01722-499529</p>
                            </div>
                            <div className="footer-icon-text">
                                <p>{emailIcon}</p>
                                <p className="ms-2">
                                    <a
                                        href="mailto:hello@xdozer.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-decoration-none text-white"
                                    >
                                        hello@xdozer.com
                                    </a>
                                </p>
                            </div>
                            <div className="footer-icon-text">
                                <p>{locationIcon}</p>
                                <p className="ms-2">
                                    DEPZ Road, Tongabari, Ashulia, <br />
                                    Savar, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mb-4">
                        <h4 className="mb-4 footer-title">Quick Links</h4>
                        <div>
                            <p>
                                <a
                                    href="#about"
                                    className="text-decoration-none text-white"
                                >
                                    About Us
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#privacy"
                                    className="text-decoration-none text-white"
                                >
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#contact"
                                    className="text-decoration-none text-white"
                                >
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#support"
                                    className="text-decoration-none text-white"
                                >
                                    Support
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3} className="mb-4">
                        <h4 className="mb-4 footer-title">Our Services</h4>
                        <div>
                            <p>
                                <a
                                    href="#rent"
                                    className="text-decoration-none text-white"
                                >
                                    Equipment Rent
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#used"
                                    className="text-decoration-none text-white"
                                >
                                    Used Equipment Market
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#spare"
                                    className="text-decoration-none text-white"
                                >
                                    Spare Parts
                                </a>
                            </p>
                            <p>
                                <a
                                    href="#consultancy"
                                    className="text-decoration-none text-white"
                                >
                                    Consultancy
                                </a>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={3}>
                        <h4 className="mb-4 footer-title">News Shelter</h4>
                        <div>
                            <p>
                                Subscribe to our News Shelter for Future Update
                            </p>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                    style={{ display: "flex" }}
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <Button variant="warning" type="submit">
                                        <h3 className="text-black-50">
                                            {sendIcon}
                                        </h3>
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
