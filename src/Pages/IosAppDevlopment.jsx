import React from 'react'
import data from "/src/Json/Iosappdevelopment.json"
import {Cardwithpurledot, Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'

function IosAppDevlopment() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <LeftsideimageCTA data={data["firstSection"]}/>
        <RightsideimageCTA data={data["secondSection"]}/>
        <LeftsideimageCTA data={data["thirdSection"]}/>
        <Heading data={data["headings"]}/>
        <Cardwithpurledot data={data["whyChooseUs"]}/>
        <LeftsideimageCTA data={data["cta"]}/>
        <RightsideimageCTA data={data["ctawithCard"]}/>
    </>
  )
}

export default IosAppDevlopment