import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Member.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Member = ({ mem }) => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;

    const { name, designation, facebook, twitter, instagram, img } = mem;
    return (
        <Col xs={12} sm={12} md={6} lg={3} xl={3} className="p-4 single-member">
            <div>
                <img
                    width="100%"
                    src={img}
                    alt=""
                    className="member-img px-2"
                />
            </div>
            <h4 className="mt-3">{name}</h4>
            <p>{designation}</p>
            <Container className="icon-container">
                <a
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 text-black social-icon"
                >
                    <p>{facebookIcon}</p>
                </a>
                <a
                    href={twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 text-black social-icon"
                >
                    <p>{twitterIcon}</p>
                </a>
                <a
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 text-black social-icon"
                >
                    <p>{instagramIcon}</p>
                </a>
            </Container>
        </Col>
    );
};

export default Member;
