import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h4>We Are Providing Everything You Need!</h4>
                <h1 className="main-heading-text fw-bold">
                    Lets Build Together
                </h1>
                <Button
                    className="mt-3 text-white fw-bold btn-grad mx-auto"
                    variant="light"
                    size="md"
                >
                    Discover More!
                </Button>
            </div>
        </div>
    );
};

export default Banner;
