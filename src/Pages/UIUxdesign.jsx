import React from 'react'
import data from "/src/Json/UIUxdesign.json"
import {Genralslider, Heading, Threecolcardwithrm} from '../Components/Index'

function UIUxdesign() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["headings"]}/>
        <Threecolcardwithrm data={data["sahdowCards"]}/>
    </>
  )
}

export default UIUxdesign