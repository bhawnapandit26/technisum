import React from 'react'

function Genralslider({ data }) {
  return (
    <>
      <div className="container-fliud genralSlider" style={{ backgroundImage: `url(${data["background-image"]})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-12'>
              <h1 className='genralsliderHeading'>{data["heading"]}</h1>
              <p className='genralsliderPara'>{data["paragraph"]}</p>
            </div>
            <div className='col-xl-6 col-12'>
              <div className='text-center'> 
              <img src={data["image"]} alt={data["alt"]}  className='img-fluid mx-auto'/>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Genralslider