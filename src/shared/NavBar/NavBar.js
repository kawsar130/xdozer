import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

import logo from "../../Images/logo.png";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

    const { user, logOut } = useAuth();
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="py-4"
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
                                    className="ps-3"
                                    style={{
                                        display: "flex",
                                        alignItems: "center"
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
                            <Button
                                variant="warning"
                                className="text-white text-center fw-bold"
                                onClick={() => logOut()}
                            >
                                Logout {logOutIcon}
                            </Button>
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
