import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const SingleListedItem = ({ listed, handleRemove }) => {
    const { equipmentId } = listed;
    const [listedEquipment, setListedEquipment] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/equipmentSearch?equipmentId=${equipmentId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setListedEquipment(data))
            .catch((error) => console.log(error.message));
    }, [equipmentId]);

    return (
        <Col xs={12} sm={12} md={6} lg={6}>
            <div className="border">
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <img src={listedEquipment.img} alt="" width="150px" />{" "}
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={5}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <h6 className="m-0">{listedEquipment.name}</h6>
                            <p className="m-0">{listedEquipment.category}</p>
                            <p className="m-0">{listedEquipment.power}</p>
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={3}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Button
                            onClick={() => handleRemove(listed._id)}
                            variant="danger"
                            className="my-2"
                        >
                            Remove
                        </Button>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default SingleListedItem;
