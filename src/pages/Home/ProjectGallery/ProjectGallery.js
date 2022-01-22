import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./ProjectGallery.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProjectGallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: "https://i.ibb.co/SRFGT71/photo-1.jpg"
        },
        {
            id: 2,
            imgSrc: "https://i.ibb.co/fNmqLB0/photo-2.jpg"
        },
        {
            id: 3,
            imgSrc: "https://i.ibb.co/G77JWnF/photo-3.jpg"
        },
        {
            id: 4,
            imgSrc: "https://i.ibb.co/JBKgjhR/photo-4.jpg"
        },

        {
            id: 5,
            imgSrc: "https://i.ibb.co/hYvjGgX/photo-5.jpg"
        },

        {
            id: 6,
            imgSrc: "https://i.ibb.co/qjtpj7f/photo-6.jpg"
        },
        {
            id: 7,
            imgSrc: "https://i.ibb.co/bvyrPF5/photo-7.jpg"
        },
        {
            id: 8,
            imgSrc: "https://i.ibb.co/KwxTJDC/photo-8.jpg"
        },
        {
            id: 9,
            imgSrc: "https://i.ibb.co/tzj36Y5/photo-9.jpg"
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
