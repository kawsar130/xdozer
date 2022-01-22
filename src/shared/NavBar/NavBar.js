import React, { useEffect, useState } from "react";
import {
    Badge,
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

import logo from "../../Images/logo.png";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
    const { user, logOut } = useAuth();
    const [listedItems, setListedItems] = useState([]);

    useEffect(() => {
        const url = `https://serene-waters-90111.herokuapp.com/listed?clientEmail=${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setListedItems(data))
            .catch((error) => console.log(error.message));
    }, [listedItems]);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            className="py-3 navbar"
        >
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            src={logo}
                            width="auto"
                            height="30"
                            className="d-inline-block align-top"
                            alt="XDozer logo"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="link" to="/equipmentRent">
                            EQUIPMENT RENT
                        </NavLink>
                        <NavLink className="link" to="/services">
                            SERVICES
                        </NavLink>
                        <NavLink className="link" to="/about">
                            ABOUT
                        </NavLink>
                    </Nav>
                    <Nav>
                        {user?.email && (
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginLeft: "15px"
                                    }}
                                >
                                    <img
                                        src={user.photoURL}
                                        alt=""
                                        style={{
                                            width: "22px",
                                            height: "22px",
                                            borderRadius: "25%"
                                        }}
                                    />
                                    <p className="link m-0">
                                        {user.displayName}
                                    </p>
                                </div>
                            </div>
                        )}
                        {user?.email ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <NavDropdown
                                    title="Dashboard"
                                    id="collasible-nav-dropdown"
                                    className="link"
                                >
                                    <NavDropdown.Item to="/listed">
                                        <NavLink to="/listed">
                                            <Button
                                                variant="white"
                                                className="fw-bold"
                                            >
                                                Listed{" "}
                                                <Badge bg="secondary">
                                                    {listedItems.length}
                                                </Badge>
                                            </Button>
                                        </NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Button
                                    variant="warning"
                                    className="text-white fw-bold py-2"
                                    onClick={() => logOut()}
                                >
                                    Logout {logOutIcon}
                                </Button>
                            </div>
                        ) : (
                            <NavLink className="link" to="/login">
                                Login
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
