import React from 'react'

function Leftsideimagesection({data}) {
  return (
    <>
        <div className='container pt-5'>
            <div className='row pt-5 align-items-center'>
                <div className='col-lg-6 col-12 py-2'>
                    <img src={data["image"]} alt={data["alt"]} className='px-xl-5 float-lg-start img-fluid'/>
                </div>
                <div className='col-lg-6 col-12 px-5 py-2'>
                    <h2 className='px-xl-5 pb-4'>{data["heading"]}</h2>
                    <p className='px-xl-5'>{data["paragraph"]}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Leftsideimagesection