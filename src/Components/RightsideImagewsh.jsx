import React from 'react'

function RightsideImagewsh({data}) {
  return (
    <>
    
        <div className="container py-5">
            <div className="row pb-5 align-items-center">
                <div className="col-lg-6 col-12">
                    <h6 className='pb-2'>{data["subHeading"]}</h6>
                    <h2 className='pb-5'>{data["heading"]}</h2>
                    {
                        data["paragraph"].map((item)=>{
                            return(
                                <p className='py-2'><b>{item["boldContent"]}</b>{item["paragraph"]}</p>
                            );
                        })
                    }                   
                </div>
                <div className="col-lg-6 col-12">
                    <img src={data["image"]} alt={data["alt"]} className='float-end img-fluid'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default RightsideImagewsh