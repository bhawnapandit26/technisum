import React from 'react'
import data from "/src/Json/StaticWebsite.json"
import {Clients, Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA, Threecolcardwithrm} from '../Components/Index'

export default function StaticWebsite() {

  return (
    <>
      <Genralslider data={data["slider"]}/>
      <Clients data={data["company"]}/>
      <LeftsideimageCTA  data={data["leftImageSection"]}/>
      <RightsideimageCTA data={data["rightImageSection"]}/>
      <Heading data={data["headings"]}/>
      <Threecolcardwithrm data={data["cardSection"]}/>

    </>
  )
}
