import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./Achievement.css";

const Achievement = () => {
    return (
        <div className="achievement-container">
            <Container>
                <Row>
                    <Col className="px-5 py-4">
                        <div>
                            <h5 className="title-caption">Our Achievement</h5>
                            <h1 className="section-title">
                                Achievement That <br /> Makes Us Strong
                            </h1>
                            <p className="text-start mt-3">
                                We have been serving our best equipments and
                                solutions to the customers that inspire us to go
                                further with our full effort. XDozer is always
                                dedicated to the Customer Satisfaction that
                                bring Happy Face ;-)
                            </p>
                            <Button
                                className="mt-3 ms-0 text-white fw-bold btn-grad"
                                variant="warning"
                                size="md"
                            >
                                Learn More!
                            </Button>
                        </div>
                    </Col>
                    <Col className="py-4">
                        <Container>
                            <Row>
                                <Col className="achievement">
                                    <div>
                                        <img
                                            src="https://i.ibb.co/j5fd7Vw/project-done.png"
                                            alt="project-done-logo"
                                            width="70px"
                                        />
                                    </div>
                                    <div className="px-4 text-start">
                                        <CountUp
                                            className="fs-2 fw-bold"
                                            start={0}
                                            end={47}
                                            duration={2.75}
                                        ></CountUp>
                                        <p className="fs-5">Project Done</p>
                                    </div>
                                </Col>
                                <Col className="achievement">
                                    <div>
                                        <img
                                            src="https://i.ibb.co/LNkMtnZ/team.png"
                                            alt="team-logo"
                                            width="70px"
                                        />
                                    </div>
                                    <div className="px-4 text-start">
                                        <CountUp
                                            className="fs-2 fw-bold"
                                            start={0}
                                            end={5}
                                            duration={2.75}
                                        ></CountUp>
                                        <p className="fs-5">Team Member</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="achievement">
                                    <div>
                                        <img
                                            src="https://i.ibb.co/vzxvZpq/award.png"
                                            alt="award-logo"
                                            width="70px"
                                        />
                                    </div>
                                    <div className="px-4 text-start">
                                        <CountUp
                                            className="fs-2 fw-bold"
                                            start={0}
                                            end={10}
                                            duration={2.75}
                                        ></CountUp>
                                        <p className="fs-5">National Award</p>
                                    </div>
                                </Col>
                                <Col className="achievement">
                                    <div>
                                        <img
                                            src="https://i.ibb.co/DwZJLw9/customer.png"
                                            alt="customer-logo"
                                            width="70px"
                                        />
                                    </div>
                                    <div className="px-4 text-start">
                                        <CountUp
                                            className="fs-2 fw-bold"
                                            start={0}
                                            end={72}
                                            duration={2.75}
                                        ></CountUp>
                                        <p className="fs-5">Happy Client</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Achievement;
