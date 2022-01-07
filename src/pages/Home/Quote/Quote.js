import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./Quote.css";

const Quote = () => {
    return (
        <div className="quote-container">
            <Row>
                <Col xs={12} sm={12} md={12} lg={6} xl={5}>
                    <img
                        width="100%"
                        src="https://i.ibb.co/X4xqPQn/quote.jpg"
                        alt=""
                    />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                    <div className="form-container text-start">
                        <h4 className="title-caption">Get free quote</h4>
                        <h1 className="section-title text-white">
                            Get Free Consultation
                        </h1>
                        <Form>
                            <div className="form-name-email">
                                <Row className="mt-3">
                                    <Col xs={12} sm={12} md={6}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className="text-light">
                                                Your Name
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} sm={12} md={6}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className="text-light">
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="email@example.com"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label className="text-light">
                                    Subject
                                </Form.Label>
                                <Form.Control placeholder="Write the Subject that you want to discus about." />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label className="text-light">
                                    Your Detailed Message.
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button
                                className="mt-3 ms-0 text-white fw-bold btn-grad"
                                variant="warning"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Quote;
