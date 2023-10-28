import React from "react";
import data from "/src/Json/WordpressWebsite.json"
import {Cardwithpurledot, Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'


function WordpressWebsite() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings"]}/>
        <Cardwithpurledot data={data["cards"]}/>
        <LeftsideimageCTA data={data["ctaLeftImage"]}/>
        <RightsideimageCTA data={data["ctaRightImage"]}/>
    </>
  )
}

export default WordpressWebsite