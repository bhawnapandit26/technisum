import React from 'react'
import { Link } from 'react-router-dom'


function LeftsideimageCTA({ data }) {

    
    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: `${data["background"]}` }}>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-12 py-2'>
                            <img src={data["image"]} alt={data["alt"]} className='px-xl-5 float-lg-start img-fluid' />
                        </div>
                        <div className='col-lg-6 col-12 px-5 py-2'>
                            {data["heading"] ? (<h2 className='px-xl-5 pb-4'>{data["heading"]}</h2>) : null}
                            {data["paragraphOne"] ? (<p className='px-xl-5 pb-5'>{data["paragraphOne"]}</p>) : null}
                            {data["paragraphTwo"] ? (<p className='px-xl-5 pb-5'>{data["paragraphTwo"]}</p>) : null}
                            {data["card"] ? (<div className='cta-card'>{data["card"]}</div>) : null}
                            {data["button"] ? (<Link to="/" className='mx-xl-5 pageButton'>{data["button"]}</Link>) : null}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftsideimageCTA