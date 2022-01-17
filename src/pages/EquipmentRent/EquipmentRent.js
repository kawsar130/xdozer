import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import SingleEquipment from "../SingleEquipment/SingleEquipment";

const EquipmentRent = () => {
    const { user } = useAuth();
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/equipmentRent")
            .then((res) => res.json())
            .then((data) => setEquipments(data));
    }, []);

    const detectEquipmentId = (_id) => {
        if (!user.email) {
            window.location.href = "/login";
        }

        const clientDetail = {
            clientEmail: user.email,
            equipmentId: _id
        };
        console.log(clientDetail);

        // Add to listed Item in Server
        fetch("http://localhost:5000/listed", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(clientDetail)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result.insertedId) {
                    alert("Equipment Added to List");
                }
            });
    };

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
                                        key={equipment._id}
                                        equipment={equipment}
                                        detectEquipmentId={detectEquipmentId}
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
