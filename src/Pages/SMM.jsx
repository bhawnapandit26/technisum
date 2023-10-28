import React from 'react'
import data from "/src/Json/Smm.json"
import {Genralslider, LeftsideimageCTA} from '../Components/Index'

function SMM() {
  return (
    <>
    <Genralslider data={data["slider"]}/>
    <LeftsideimageCTA data={data["leftImageSection"]}/>
    </>
  )
}

export default SMM