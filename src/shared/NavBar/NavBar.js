import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

import logo from "../../Images/logo.png";

const NavBar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="py-2"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                        alt="XDozer logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="link" to="/services">
                            SERVICES
                        </NavLink>
                        <NavLink className="link" to="/about">
                            ABOUT
                        </NavLink>
                        <NavDropdown
                            title="Dropdown"
                            id="collasible-nav-dropdown"
                            className="link"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className="link" to="#deets">
                            More deets
                        </Link>
                        <Link className="link" to="#memes">
                            Dank memes
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
