import React from 'react'
import { Link } from 'react-router-dom'


function RightsideimageCTA({ data }) {

    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: `${data["background"]}` }}>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-xl-6 col-12 py-2'>
                            {data["subHeading"] ? (<h6 className='pb-2'>{data["subHeading"]}</h6>) : null}
                            {data["heading"] ? (<h2 className='pb-4'>{data["heading"]}</h2>) : null}
                            {data["paragraph"] ? (
                                    data["paragraph"].map((item)=>{
                                        return(
                                            <>
                                            <div className='pt-2 pb-5'>
                                            <p ><b>{item["boldContent"] ? item["boldContent"] : null}</b>{item["paragraph"]}</p>
                                            {item["paragraphTwo"]? (<p>{item["paragraphTwo"]}</p>) : null}
                                            </div>
                                                
                                            </>
                                            
                                        );
                                    })       
                            ): null}
                            {data["card"] ? (<div className='cta-card  my-5'>{data["card"]}</div>) : null}
                            {data["button"] ? (<Link to="" className='pageButton'>{data["button"]}</Link>) : null}

                        </div>
                        <div className='col-xl-6 col-12 py-2'>
                            <img src={data["image"]} alt={data["alt"]} className='px-xl-5 float-lg-start img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightsideimageCTA