import React from 'react'
import data from "/src/Json/DynamicWebsite.json"
import {Cardwithpurledot, Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'

function DynamicWebsite() {
  return (

    <>
        <Genralslider data={data["slider"]}/>
        <LeftsideimageCTA data={data["leftImageSection"]}/>
        <RightsideimageCTA data={data["rightImageSection"]}/>
        <Heading data={data["headings"]}/>
        <Cardwithpurledot data={data["cards"]}/>
    </>
  )
}

export default DynamicWebsite