import React from "react";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <Services></Services>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;
