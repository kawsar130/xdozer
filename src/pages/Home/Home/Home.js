import React from "react";
import Achievement from "../Achievement/Achievement";
import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Quote from "../Quote/Quote";
import Services from "../Services/Services";
import TeamMembers from "../TeamMembers/TeamMembers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <Services></Services>
            <Achievement></Achievement>
            <ProjectGallery></ProjectGallery>
            <TeamMembers></TeamMembers>
            <Quote></Quote>
        </div>
    );
};

export default Home;
