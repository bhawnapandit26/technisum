import React from 'react'

function Genralslider({ data }) {
  return (
    <>
      <div className="container-fliud genralSlider" style={{ backgroundImage: `url(${data["background-image"]})` }}>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-12 pe-xl-5'>
              <h1 className='genralsliderHeading mb-5'>{data["heading"]}</h1>
              {data["paragraphOne"] ? (<p className='genralsliderPara'>{data["paragraphOne"]}</p>) : null}
              {data["paragraphTwo"] ? (<p className='genralsliderPara'>{data["paragraphTwo"]}</p>) : null} 
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