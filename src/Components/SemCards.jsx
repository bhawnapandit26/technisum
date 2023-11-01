import React from 'react'
import { Link } from 'react-router-dom'

function SemCards({ data }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((item)=>{
                            return(
                                <div className="col-lg-6 col-12">
                                <div className='cardBg' style={{ backgroundImage: `url("${item["background"]}")` }}>
                                    <div className='overlay'>
                                        <div className='t1'>{item["heading"]}</div>
                                        <div className='t2 py-4'>{item["paragraph"]}</div>
                                        {/* <Link to={item["btn-link"]} className='t3'>{item["button"]}</Link> */}
                                    </div>
                                </div>
                            </div>  
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SemCards