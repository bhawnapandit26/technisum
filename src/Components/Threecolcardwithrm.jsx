import React from 'react'
import { Link } from 'react-router-dom'
 
function Threecolcardwithrm({ data }) {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className='col-xl-4 col-md-6 col-12 my-4 px-4'>
                                    <div className='shdwcardwrm d-flex flex-column justify-content-between'>
                                        <div>
                                            {item["image"] ? (<div><img src={item["image"]} alt={item["alt"]} className='img-fluid' /></div>) : null}
                                            {item["heading"] ? (<h4 className='py-3'>{item["heading"]}</h4>) : null}
                                            {item["paragraph"] ? (<p className='cardParagraph pb-5'>{item["paragraph"]}</p>) : null}
                                            {item["list"] ? (
                                                <ul>
                                                {item["list"].map((item)=>{
                                                  return(
                                                    <li>{item}</li>
                                                  );
                                                })}
                                              </ul>
                                            ) : null}
                                        </div>
                                        {item["button"] ? (<Link to={item["btn-link"]}>{item["button"]}</Link>) : null}
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

export default Threecolcardwithrm