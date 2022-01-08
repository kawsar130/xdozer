import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleEquipment from "../SingleEquipment/SingleEquipment";

const EquipmentRent = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("Equipments.json")
            .then((res) => res.json())
            .then((data) => setEquipments(data));
    }, []);

    return (
        <div className="py-5">
            <h2>Our Equipment List</h2>
            <p>Create your equipment list and submit for a Quotation.</p>
            <div>
                {!equipments.length ? (
                    <div style={{ height: "50vh" }}>
                        <h4>Loading...</h4>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div className="mt-5">
                        <Container>
                            <Row>
                                {equipments.map((equipment) => (
                                    <SingleEquipment
                                        equipment={equipment}
                                    ></SingleEquipment>
                                ))}
                            </Row>
                        </Container>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EquipmentRent;
