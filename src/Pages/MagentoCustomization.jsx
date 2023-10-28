import React from 'react'
import data from "/src/Json/MagentoCustomization.json"
import {Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'

function MagentoCustomization() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <LeftsideimageCTA data={data["leftSideImageSection"]}/>
        <RightsideimageCTA data={data["rightSideImageSection"]}/>
        <Heading data={data["headings"]}/>
        <RightsideimageCTA data={data["cta"]}/>
    </>
  )
}

export default MagentoCustomization