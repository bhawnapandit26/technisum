import React from 'react'
import data from "/src/Json/CustomWebsite.json"
import {Genralslider, Heading, LeftImageList, LeftsideimageCTA, Paragraph, RightImageList, RightsideimageCTA} from '../Components/Index'

export default function CustomWebsite() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings-one"]}/>
        <LeftsideimageCTA data={data["leftsideImageSection"]}/>
        <Paragraph data={data["paragraph"]}/>
        <Heading data={data["headings-two"]}/>
        <LeftImageList data={data["list-one"]}/>
        <RightImageList data={data["list-two"]}/>
        <LeftImageList data={data["list-three"]}/>
        <RightsideimageCTA data={data["rightsideImageSection"]}/>
    </>
  )
}
