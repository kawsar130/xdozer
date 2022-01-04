import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("Services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="py-5">
            <div className="py-5">
                <h1 className="section-title text-center">
                    Our Exceptional Services
                </h1>
                {!services.length ? (
                    <div style={{ height: "50vh" }}>
                        <h4>Loading...</h4>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="services-container mt-5">
                        <Container>
                            <Row>
                                {services.map((serve) => (
                                    <Service serve={serve}></Service>
                                ))}
                            </Row>
                        </Container>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
