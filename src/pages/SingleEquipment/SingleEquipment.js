import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleEquipment = ({ equipment, detectEquipmentId }) => {
    const { _id, name, category, img } = equipment;

    return (
        <Col className="service-col" lg={4} md={6} sm={12} xs={12}>
            <div className="p-5">
                <img src={img} width="100%" alt="equipment" />
                <h5 className="py-2">{name}</h5>
                <p className="text-secondary">{category}</p>
                <Link
                    to={`/equipmentRent/${_id}`}
                    className="text-decoration-none me-1 my-1"
                >
                    <Button variant="warning">Details</Button>
                </Link>
                <Button
                    onClick={() => detectEquipmentId(_id)}
                    variant="warning"
                    className="ms-1 my-1"
                >
                    Add to List
                </Button>
            </div>
        </Col>
    );
};

export default SingleEquipment;
