import React from 'react'

function Homeslider({data}) {

  return (
    <>
        <div className='container-fluid slider-bg'>
            <div className='container d-flex justify-content-between flex-xl-row flex-column'>
                <div className='col'>
                    <div className='sliderSubheading'>{data["smallHeading"]}</div>
                    <div className='sliderHeading'>{data["heading"]}</div>
                    <div><button type='button' className='sliderButton'>{data["button"]}</button></div>
                </div>
                <div className='col'>
                    <img src={data["image"]} alt="" className='float-end img-fluid'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Homeslider