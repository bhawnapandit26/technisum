import React from 'react'
import data from "/src/Json/StaticWebsite.json"
import {Clients, Genralslider, Heading, Leftsideimagesection, Rightsideimagesection, Threecolcardwithrm} from '../Components/Index'

export default function StaticWebsite() {
  return (
    <>
      <Genralslider data={data["slider"]}/>
      <Clients data={data["company"]}/>
      <Leftsideimagesection data={data["leftImageSection"]}/>
      <Rightsideimagesection data={data["rightImageSection"]}/>
      <Heading data={data["headings"]}/>
      <Threecolcardwithrm data={data["cardSection"]}/>

    </>
  )
}
