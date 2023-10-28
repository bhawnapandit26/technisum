import React from 'react'
import data from "/src/Json/ShopifyE-commercestore.json"
import {Leftsideimagesection, Genralslider, RightsideimageCTA} from '../Components/Index'

function ShopifyEcommercestore() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <RightsideimageCTA data={data["sectionOne"]}/>
        <Leftsideimagesection data={data["sectionTwo"]}/>
    </>
  )
}

export default ShopifyEcommercestore