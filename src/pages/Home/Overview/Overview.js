import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./OverView.css";

const Overview = () => {
    return (
        <div className="overview-container py-5">
            <Container fluid="md">
                <Row className="py-5">
                    <Col sm={12} md={6} lg={7}>
                        <img
                            width="100%"
                            src="https://i.ibb.co/b7yS85Z/overview.png"
                            alt=""
                        />
                    </Col>
                    <Col sm={12} md={6} lg={5}>
                        <div className="pt-5">
                            <h4 className="title-caption">Company Overview</h4>
                            <h2 className="section-title">About XDozer</h2>
                            <p className="text-start mt-3">
                                Xdozer is the first online heavy equipment
                                rental platform in Bangladesh that provides
                                equipment rental services based on customer’s
                                demands and location.
                            </p>
                            <p className="text-start">
                                We are dedicated to providing the best rental
                                experience in the construction and heavy
                                equipment industry through our online platform
                                which makes the rental experience easier and
                                trouble-free.
                            </p>
                            <Button
                                className="mt-4 ms-0 text-white fw-bold btn-grad"
                                variant="light"
                                size="md"
                            >
                                Learn More!
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Overview;
