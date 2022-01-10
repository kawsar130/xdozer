import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleListedItem from "../SingleListedItem/SingleListedItem";

const Listed = () => {
    const { user } = useAuth();
    const [listedItems, setListedItems] = useState([]);
    const [removeState, setRemoveState] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/listed?email=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setListedItems(data))
            .catch((error) => console.log(error.message));
    }, [removeState]);

    const handleRemove = (id) => {
        fetch(`http://localhost:5000/removeItem/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount === 1) {
                    setRemoveState(!removeState);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="my-5">
            <h3>Your list for Quotation</h3>
            <Container>
                <div>
                    {!listedItems.length ? (
                        <div style={{ height: "50vh" }}>
                            <h4>Loading...</h4>
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <div className="mt-4">
                            <Container>
                                <Row>
                                    {listedItems.map((listed) => (
                                        <SingleListedItem
                                            key={listed._id}
                                            listed={listed}
                                            handleRemove={handleRemove}
                                        ></SingleListedItem>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    )}
                </div>
            </Container>
            <Button variant="warning" size="lg" className="mt-5">
                Submit For Quotation
            </Button>
        </div>
    );
};

export default Listed;
