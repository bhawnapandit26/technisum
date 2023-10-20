import React from 'react'
import data from "/src/Json/Iosappdevelopment.json"
import {Cardwithpurledot, Genralslider, LeftsideimageCTA, Leftsideimagesection, RightsideimageCTA, Rightsideimagesection} from '../Components/Index'

function IosAppDevlopment() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Leftsideimagesection data={data["firstSection"]}/>
        <Rightsideimagesection data={data["secondSection"]}/>
        <Leftsideimagesection data={data["thirdSection"]}/>
        <Cardwithpurledot data={data["whyChooseUs"]}/>
        <LeftsideimageCTA data={data["cta"]}/>
        <RightsideimageCTA data={data["ctawithCard"]}/>
    </>
  )
}

export default IosAppDevlopment