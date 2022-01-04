import React from "react";
import { Col } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
    const { serve } = props;
    const { name, detail, img } = serve;
    return (
        <Col className="service-col" lg={4} md={6} sm={12} xs={12}>
            <div className="p-5">
                <img
                    src={img}
                    width="100px"
                    alt="Service Icon"
                    style={{ opacity: "70%" }}
                />
                <h5 className="py-2">{name}</h5>
                <p className="text-secondary">{detail}</p>
            </div>
        </Col>
    );
};

export default Service;
