import React from 'react'
import data from "/src/Json/X-cartDevelopment.json"
import {Genralslider, RightsideimageCTA, Heading, Cardwithpurledot} from '../Components/Index'

function XcartDevelopment() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings-one"]}/>
        <Heading data={data["headings-two"]}/>
        <Heading data={data["headings-three"]}/>
        <Cardwithpurledot data={data["cards"]}/>
        <RightsideimageCTA data={data["rightImageSection"]}/>
    </>
  )
}

export default XcartDevelopment