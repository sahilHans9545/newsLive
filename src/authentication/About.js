import React from "react";
import Header from "../components/Header";

const About=()=>{
    return (
        <>
        <Header active="About" bannerImg="About-banner.jpg" search />
        <div className="">
            <div className="left-section"></div>
            <div className="right-section"></div>
        </div>
        </>
    )
}

export default About