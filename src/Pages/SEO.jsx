import React from 'react'
import data from "/src/Json/Seo.json"
import {Genralslider, Heading, Cardwithpurledot, Threecolcardwithrm} from '../Components/Index'

function SEO() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings-one"]}/>
        <Threecolcardwithrm data={data["sahdowCards"]}/>
        <Heading data={data["headings-two"]}/>
        <Cardwithpurledot data={data["cards"]}/>
    </>
  )
}

export default SEO