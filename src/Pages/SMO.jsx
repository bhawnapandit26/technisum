import React from 'react'
import data from "/src/Json/Smo.json"
import {Genralslider, Heading, Cardwithpurpledottc, LeftsideimageCTA} from '../Components/Index'

function SMO() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings-one"]}/>
        <Cardwithpurpledottc data={data["cards-one"]}/>
        <Heading data={data["paraOne"]}/>
        <Heading data={data["paraTwo"]}/>
        <Heading data={data["paraThree"]}/>
        <LeftsideimageCTA data={data["leftImageSection"]}/>
        <Cardwithpurpledottc data={data["cards-two"]}/>
    </>
  )
}

export default SMO