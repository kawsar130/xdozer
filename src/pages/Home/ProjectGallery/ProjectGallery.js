import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./ProjectGallery.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectGallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: "https://i.ibb.co/d5M8k1t/1.jpg"
        },
        {
            id: 2,
            imgSrc: "https://i.ibb.co/yyMf1LF/2.jpg"
        },
        {
            id: 3,
            imgSrc: "https://i.ibb.co/vY91g5G/3.jpg"
        },
        {
            id: 4,
            imgSrc: "https://i.ibb.co/23gbWGr/4.jpg"
        },
        {
            id: 5,
            imgSrc: "https://i.ibb.co/t2KR1jt/5.jpg"
        },
        {
            id: 6,
            imgSrc: "https://i.ibb.co/ZTX2Bsk/6.jpg"
        },
        {
            id: 7,
            imgSrc: "https://i.ibb.co/5LxpGhw/7.jpg"
        },
        {
            id: 8,
            imgSrc: "https://i.ibb.co/J29dPCy/8.jpg"
        }
    ];

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <div className="py-5">
            <h1 className="section-title text-center my-5">
                Our Projects Gallery
            </h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="" />
                <FontAwesomeIcon
                    className="closeIcon"
                    icon={faTimes}
                    onClick={() => setModel(false)}
                />
            </div>
            <Container className="gallery">
                {data.map((item, index) => {
                    return (
                        <div
                            className="pics"
                            key={index}
                            onClick={() => getImg(item.imgSrc)}
                        >
                            <img
                                src={item.imgSrc}
                                style={{ width: "100%" }}
                                alt="pics"
                            />
                        </div>
                    );
                })}
            </Container>
        </div>
    );
};

export default ProjectGallery;
