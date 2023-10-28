import React from 'react'
import data from "/src/Json/WooCommerceWebsite.json"
import {Genralslider, Heading,Image} from '../Components/Index'

function WooCommerceWebsite() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["heading-one"]}/>
        <Image data={data["image"]}/>
        <Heading data={data["heading-two"]}/>
        <Heading data={data["heading-three"]}/>
        <Heading data={data["heading-four"]}/>
    </>
  )
}

export default WooCommerceWebsite