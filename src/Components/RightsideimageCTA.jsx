import React from 'react'

function RightsideimageCTA({data}) {
  return (
    <>
    <div className='container-fluid' style={{backgroundColor:`${data["background"]}`}}>
        <div className='container pt-5'>
            <div className='row pt-5 align-items-center'>               
                <div className='col-lg-6 col-12 px-5 py-2'>
                    <h2 className='px-xl-5 pb-4'>{data["heading"]}</h2>
                    <p className='px-xl-5 pb-4'>{data["paragraph"]}</p>                      
                    {data["card"] ? (<div className='cta-card mx-xl-5 mb-5'>{data["card"]}</div>) : null}     
                    {data["button"] ? (<a href="" className='mx-xl-5 pageButton'>{data["button"]}</a>) : null}              
                    
                </div>
                <div className='col-lg-6 col-12 py-2'>
                    <img src={data["image"]} alt={data["alt"]} className='px-xl-5 float-lg-start img-fluid'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RightsideimageCTA