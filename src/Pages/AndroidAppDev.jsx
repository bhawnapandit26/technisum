//import React, { useEffect, useState } from 'react'
import data from "/src/Json/Androidappdevelopment.json"
import {Genralslider, LeftsideimageCTA, RightsideimageCTA, WhyuseApp} from '../Components/Index'
//import Shimmer from '../Components/Shimmer';

function AndroidAppDev() {

  // const [data, setData] = useState(null)

  // useEffect(()=>{
  //   fetchData()
  // }, []);

  // async function fetchData () {
  //   const result = await fetch("/src/Json/Androidappdevelopment.json");
  //   const result2 = await result.json();
  //   setData(result2);
  //   console.log(data);
  // }


  
  // if(!data)
  // {
  //   return <Shimmer/>
  // }
  
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