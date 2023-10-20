import React from 'react'
import data from "/src/Json/Androidappdevelopment.json"
import {Genralslider, LeftsideimageCTA, Leftsideimagesection, Rightsideimagesection, WhyuseApp} from '../Components/Index'

function AndroidAppDev() {
  return (
    <>
      <Genralslider data={data["slider"]}/>
      <Leftsideimagesection data={data["firstSection"]}/>
      <Rightsideimagesection data={data["secondSection"]}/>
      <Leftsideimagesection data={data["thirdSection"]}/>
      <WhyuseApp data={data["whyuseapp"]}/>
      <LeftsideimageCTA data={data["cta"]}/>
    </>
  )
}

export default AndroidAppDev