import React from 'react'
import data from "/src/Json/E-commerceMaintenance.json"
import {Genralslider, Heading, LeftsideimageCTA, RightsideimageCTA, Image} from '../Components/Index'

function EcommerceMaintenance() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings-one"]}/>
        <Image data={data["image"]}/>
        <Heading data={data["headings-two"]}/>
        <RightsideimageCTA data={data["rightSideImage-one"]}/>
        <LeftsideimageCTA data={data["leftSideImage-one"]}/>
        <RightsideimageCTA data={data["rightSideImage-two"]}/>
        <Heading data={data["headings-three"]}/>
        <LeftsideimageCTA data={data["leftSideImage-two"]}/>
        <RightsideimageCTA data={data["rightSideImage-three"]}/>
    </>
  )
}

export default EcommerceMaintenance