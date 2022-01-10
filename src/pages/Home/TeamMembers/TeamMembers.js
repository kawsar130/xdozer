import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Member from "../Member/Member";
import "./TeamMember.css";

const TeamMembers = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("TeamMembers.json")
            .then((res) => res.json())
            .then((data) => setMembers(data));
    }, []);

    return (
        <div className="member-container">
            <div className="my-5">
                <h4 className="title-caption text-center">Our Expert</h4>
                <h1 className="section-title text-center">
                    Our Expert Team Member
                </h1>
                <div>
                    {!members.length ? (
                        <div style={{ height: "50vh" }}>
                            <h4>Loading...</h4>
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <div className="mt-5">
                            <Container>
                                <Row className="gx-1">
                                    {members.map((mem) => (
                                        <Member
                                            key={mem.name}
                                            mem={mem}
                                        ></Member>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
