import React from 'react'
import data from "/src/Json/MagentoEcommerce.json"
import {Clients, Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'


function MagentoEcommerce() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings"]}/>
        <LeftsideimageCTA data={data["section-one"]}/>
        <RightsideimageCTA data={data["section-two"]}/>
        <LeftsideimageCTA data={data["section-three"]}/>
        <RightsideimageCTA data={data["section-four"]}/>
        <Clients data={data["company"]}/>
    </>
  )
}

export default MagentoEcommerce