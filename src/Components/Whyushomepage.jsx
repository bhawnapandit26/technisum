import React from 'react'

function Whyushomepage({data}) {
  return (
    <>
        <div className="container py-5">
            <div className="row py-5">
                <div className="col-xl-6 col-12 pe-lg-5 py-2">
                    <h6 className='pb-2 pe-lg-5'>{data["subHeading"]}</h6>
                    <h2 className='pb-5 pe-lg-5'>{data["heading"]}</h2>
                    <p className='pe-lg-5'>{data["paragraph"]}</p>
                </div>
                <div className="col-xl-6 col-12 py-2">
                    <div className="row">
                    {
                        data["card"].map((item)=>{
                            return(
                                <div className="col-md-6 col-12 whyuscard">
                                    <div><img src={item["image"]} alt={item["alt"]} className='img-fluid'/></div>
                                    <h4 className='py-3'>{item["heading"]}</h4>
                                    <p>{item["paragraph"]}</p>
                                </div>
                            );
                        })
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Whyushomepage