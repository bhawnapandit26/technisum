import React from 'react'
import data from "/src/Json/FlutterDevlopment.json"
import {Cardwithpurledot, Genralslider, Heading, Leftsideimagesection, RightsideimageCTA, Threecolcardwithrm} from '../Components/Index'

function FlutterDevelopment() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Threecolcardwithrm data={data["threecards"]}/>
        <Leftsideimagesection data={data["leftimageSection"]}/>
        <Heading data={data["headings"]}/>
        <Cardwithpurledot data={data["fourCards"]}/>
        <RightsideimageCTA data={data["ctawithCard"]}/>
    </>
  )
}

export default FlutterDevelopment