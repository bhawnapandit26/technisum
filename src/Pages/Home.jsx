import React from 'react'
import data from "/src/Json/Home.json"
import { Clients, Ctahome, Homesectiontwo, Homeslider, LeftsideimageCTA, RightsideimageCTA, Threecolcardwithrm, Threecolhome, Twocolumncomp, Whyushomepage, YoutubeVideo } from '../Components/Index'

 
function Home() {
    return (
        <>
            <Homeslider data={data["slider"]}/>
            <Homesectiontwo data={data["secondSection"]}/>
            <Clients data={data["company"]}/>
            <LeftsideimageCTA data={data["leftSideImageSection"]}/>
            <Twocolumncomp data={data["twoColumnSection"]}/>
            <Threecolcardwithrm data={data["sahdowCards"]}/>
            <RightsideimageCTA data={data["rightSideImageSection"]}/>
            <Whyushomepage data={data["whyUsSection"]}/>
            <YoutubeVideo data={data["youtubeVideo"]}/>
            <Ctahome data={data["ctaSection"]}/>
            <RightsideimageCTA data={data["whyUsSecondSection"]}/>
            <Threecolhome data={data["threeColumnSection"]}/>
        </>
    )
}

export default Home