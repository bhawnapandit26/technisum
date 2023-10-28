import React from 'react'
import data from "/src/Json/E-consultants.json"
import {Genralslider, LeftsideimageCTA, RightsideimageCTA} from '../Components/Index'

function Econsultants() {
  return (
    <>
      <Genralslider data={data["slider"]}/>
      <RightsideimageCTA data={data["rightSideImage-one"]}/>
      <LeftsideimageCTA data={data["leftSideImage-one"]}/>
      <RightsideimageCTA data={data["rightSideImage-two"]}/>
      <LeftsideimageCTA data={data["leftSideImage-two"]}/>
      <RightsideimageCTA data={data["rightSideImage-three"]}/>
      <RightsideimageCTA data={data["rightSideImage-four"]}/>
    </>
  )
}

export default Econsultants