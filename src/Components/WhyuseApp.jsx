import React from 'react'

function WhyuseApp({data}) {
  return (
    <>
        <div className="container-fluid whyuseapp"> 
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <h2 className='py-4'>{data["heading"]}</h2>
                        <p className='py-4 pe-5'>{data["paragraph"]}</p>
                        <a className='py-3'><img src={data["button"]["image"]} alt={data["button"]["alt"]} className='img-fluid'/><div>{data["button"]["text"]}<br/><span>{data["button"]["span"]}</span></div></a>
                    </div>
                    <div className="col-lg-6 col-12 pt-lg-0 pt-5">
                        <div className='row whyuseappblock'>
                        {
                            data["box"].map((item,index)=>{
                                return(
                                    <div className='col-lg-6 col-12'>
                                        <div key={index} style={{backgroundColor:`${item["color"]}`}} >
                                        <div className='main-heading'>{item["number"]}</div>
                                        <div className='sub-heading'>{item["paragraph"]}</div>
                                    </div>
                                    </div>
                                    
                                );
                            })
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyuseApp