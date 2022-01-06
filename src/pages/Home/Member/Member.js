import React from "react";
import { Col, Container } from "react-bootstrap";

const Member = ({ mem }) => {
    const { name, designation, facebook, twitter, instagram, img } = mem;
    return (
        <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <img width="100%" src={img} alt="" />
            <h4 className="mt-3">{name}</h4>
            <p>{designation}</p>
            <Container></Container>
        </Col>
    );
};

export default Member;
