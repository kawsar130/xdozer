import React, { useEffect, useState } from "react";
import { Container, Row, Spinner, Button, Form, Col } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import SingleListedItem from "../SingleListedItem/SingleListedItem";

const Listed = () => {
    const { user, isLoading } = useAuth();
    const [listedItems, setListedItems] = useState([]);
    const [removeState, setRemoveState] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [formVisible, setFormVisible] = useState(false);

    // Form Validation using bootstrap
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const url = `https://serene-waters-90111.herokuapp.com/listed?email=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setListedItems(data);
            })
            .catch((error) => console.log(error.message));
    }, [removeState]);

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const handleRemove = (id) => {
        fetch(`https://serene-waters-90111.herokuapp.com/removeItem/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount === 1) {
                    setRemoveState(!removeState);
                    setFormVisible(false);
                }
            })
            .catch((err) => console.error(err));
    };

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...userInfo };
        newUserInfo[field] = value;
        setUserInfo(newUserInfo);
    };
    console.log(userInfo);

    const handleFormVisibility = () => {
        if (!formVisible) {
            const userQuotationData = {
                name: user.displayName,
                email: user.email,
                equipmentData: listedItems
            };
            setUserInfo({ ...userQuotationData });
        }
        setFormVisible(true);
    };

    const handleSubmitQuotation = (event) => {
        // Form validation
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        // Handling user and quotation data
        console.log(userInfo);
        event.preventDefault();
    };

    return (
        <div className="my-5">
            <h3>Your list for Quotation</h3>
            <Container>
                <div>
                    {!listedItems.length && !user.email ? (
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
            <Container className="py-4">
                {formVisible && (
                    <Col
                        xs={12}
                        sm={12}
                        md={8}
                        className="login-form-container px-3 py-5 mx-auto"
                    >
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmitQuotation}
                        >
                            <Row>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustom01"
                                    as={Col}
                                    md="6"
                                >
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="name"
                                        defaultValue={user.displayName}
                                        onBlur={handleOnChange}
                                        required
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustomEmail"
                                    as={Col}
                                    md="6"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        defaultValue={user.email}
                                        onBlur={handleOnChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please write a valid email.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustom02"
                                    as={Col}
                                    md="6"
                                >
                                    <Form.Label>Mobile Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Including country code!"
                                        name="mobile"
                                        onBlur={handleOnChange}
                                        required
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="validationCustom03"
                                    as={Col}
                                    md="6"
                                >
                                    <Form.Label>Organization Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="organization"
                                        onBlur={handleOnChange}
                                        required
                                    />
                                    <Form.Control.Feedback>
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group
                                className="mb-3"
                                controlId="validationCustom04"
                            >
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Detailed Address is recommended"
                                    name="address"
                                    onBlur={handleOnChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide address!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Optional Note"
                                    name="note"
                                    onBlur={handleOnChange}
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button variant="warning" size="lg" type="submit">
                                Submit For Quotation
                            </Button>
                        </Form>
                    </Col>
                )}
                {!formVisible && (
                    <Button
                        variant="warning"
                        size="lg"
                        className="mt-3"
                        onClick={() => handleFormVisibility()}
                    >
                        Proceed to Submit
                    </Button>
                )}
            </Container>
        </div>
    );
};

export default Listed;
