import React from 'react'
import data from "/src/Json/Androidappdevelopment.json"
import {Genralslider, LeftsideimageCTA, RightsideimageCTA, WhyuseApp} from '../Components/Index'

function AndroidAppDev() {
  return (
    <>
      <Genralslider data={data["slider"]}/>
      <LeftsideimageCTA data={data["firstSection"]}/>
      <RightsideimageCTA data={data["secondSection"]}/>
      <LeftsideimageCTA data={data["thirdSection"]}/>
      <WhyuseApp data={data["whyuseapp"]}/>
      <LeftsideimageCTA data={data["cta"]}/>
    </>
  )
}

export default AndroidAppDev