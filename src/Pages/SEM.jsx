import React from 'react'
import data from "/src/Json/Sem.json"
import {Genralslider, LeftsideimageCTA} from '../Components/Index'

function SEM() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <LeftsideimageCTA data={data["leftImageSection"]}/>
    </>
  )
}

export default SEM