import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./EquipmentDetail.css";

const EquipmentDetail = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        fetch(`https://serene-waters-90111.herokuapp.com/equipmentRent/${id}`)
            .then((res) => res.json())
            .then((data) => setEquipment(data))
            .catch((err) => console.log(err));
    }, [id]);
    console.log(equipment);

    return (
        <div className="equipment-detail-container">
            <Container>
                <Row className="gx-5">
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <img src={equipment.img} alt="" width="100%" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="px-5">
                        <div className="text-start">
                            <h3>{equipment.name}</h3>
                            <p>{equipment.description}</p>

                            <div className="mt-5 mb-3">
                                <h5> {equipment.name} Specifications</h5>
                                <Table striped bordered hover responsive>
                                    <caption>
                                        The Specification of {equipment.name}{" "}
                                        can slightly vary regarding to the year
                                        of release and country.
                                        <br />
                                        Call Us for more details:
                                        +8801700-000000;
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>{equipment.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Brand</td>
                                            <td>{equipment.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Category</td>
                                            <td>{equipment.category}</td>
                                        </tr>
                                        <tr>
                                            <td>Power</td>
                                            <td>{equipment.power}</td>
                                        </tr>
                                        <tr>
                                            <td>Weight</td>
                                            <td>{equipment.weight}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EquipmentDetail;
