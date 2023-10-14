import React from 'react'
import data from "/src/Json/Home.json"
import { Clients, Ctahome, Homesectiontwo, Homeslider, Leftsideimagesection, RightsideImagewsh, Threecolcardwithrm, Threecolhome, Twocolumncomp, Whyushomepage } from '../Components/Index'


function Home() {
    return (
        <>
            <Homeslider data={data["slider"]}/>
            <Homesectiontwo data={data["secondSection"]}/>
            <Clients data={data["company"]}/>
            <Leftsideimagesection data={data["leftSideImageSection"]}/>
            <Twocolumncomp data={data["twoColumnSection"]}/>
            <Threecolcardwithrm data={data["sahdowCards"]}/>
            <RightsideImagewsh data={data["rightSideImageSection"]}/>
            <Whyushomepage data={data["whyUsSection"]}/>
            <Ctahome data={data["ctaSection"]}/>
            <RightsideImagewsh data={data["whyUsSecondSection"]}/>
            <Threecolhome data={data["threeColumnSection"]}/>
        </>
    )
}

export default Home