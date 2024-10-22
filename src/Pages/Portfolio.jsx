import React from "react";
import data from "/src/Json/Portfolio.json";
import {PortfolioSection} from '../Components/Index';

function Portfolio() {
    return(
        <>
        <PortfolioSection data={data["portfolioCards"]}/>
        </>
    );
}

export default Portfolio