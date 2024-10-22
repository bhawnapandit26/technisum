import React from 'react'
import { Link} from "react-router-dom";

function Homeslider({data}) {

  return (
    <>
        <div className='container-fluid slider-bg'>
            <div className='container d-flex justify-content-between flex-xl-row flex-column'>
                <div className='col'>
                    <div className='sliderSubheading mt-xl-5'>{data["smallHeading"]}</div>
                    <div className='sliderHeading'>{data["heading"]}</div>
                    <div><Link to='contact-us' className='sliderButton'>{data["button"]}</Link></div>
                </div>
                <div className='col'>
                    <img src={data["image"]} alt="" className='float-end img-fluid mb-5 home-slider-image'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homeslider