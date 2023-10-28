import React from 'react'
import data from "/src/Json/GoogleAnalytics.json"
import {Cardwithpurpledottc, Genralslider, Heading} from '../Components/Index'

function GoogleAnalytics() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <Heading data={data["heading"]}/>
        <Cardwithpurpledottc data={data["cards"]}/>
    </>
  )
}

export default GoogleAnalytics