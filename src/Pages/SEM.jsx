import React from 'react'
import data from "/src/Json/Sem.json"
import {Genralslider,SemCards, LeftsideimageCTA} from '../Components/Index'

function SEM() {
  return (
    <>
        <Genralslider data={data["slider"]}/>
        <SemCards data={data["cards"]}/>
        <LeftsideimageCTA data={data["leftImageSection"]}/>
    </>
  )
}

export default SEM