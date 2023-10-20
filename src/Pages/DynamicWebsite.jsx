import React from 'react'
import data from "/src/Json/DynamicWebsite.json"
import {Cardwithpurledot, Genralslider, Heading, Leftsideimagesection, Rightsideimagesection} from '../Components/Index'

function DynamicWebsite() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Leftsideimagesection data={data["leftImageSection"]}/>
        <Rightsideimagesection data={data["rightImageSection"]}/>
        <Heading data={data["headings"]}/>
        <Cardwithpurledot data={data["cards"]}/>
    </>
  )
}

export default DynamicWebsite