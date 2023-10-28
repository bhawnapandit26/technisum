import React from 'react'
import data from "/src/Json/ITConsulting.json"
import {Genralslider, Heading, Threecolcardwithrm} from '../Components/Index'

function ITConsulting() {
  return (
    <>
    <Genralslider data={data["slider"]}/>
    <Heading data={data["paraOne"]}/>
    <Heading data={data["paraTwo"]}/>
    <Heading data={data["paraThree"]}/>
    <Heading data={data["paraFour"]}/>
    <Heading data={data["headings"]}/>
    <Threecolcardwithrm data={data["sahdowCards"]}/>
    </>
  )
}

export default ITConsulting