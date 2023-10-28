import React from 'react'
import data from "/src/Json/CmsWebsiteDevelopment.json"
import {Genralslider, Heading, RightsideimageCTA, Threecolcardwithrm} from '../Components/Index'

function CMSWebsiteDevelopment() {
  return (
    <>
    <Genralslider data={data["slider"]}/>
    <Heading data={data["headings"]}/>
    <Threecolcardwithrm data={data["sahdowCards"]}/>
    <RightsideimageCTA data={data["ctaRightImage"]}/>
    </>
  )
}

export default CMSWebsiteDevelopment