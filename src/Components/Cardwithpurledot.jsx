import React from 'react'
import { Link } from 'react-router-dom'

function Cardwithpurledot({ data }) {
    return (
        <>
            <div className="container py-5">
                <div className="row pt-5">
                    {
                        data["card"].map((item, index) => {
                            return (
                                <div key={index} className='col-md-6 col-12 my-4 px-4'>
                                    <div className='cardpurpledot d-flex flex-column justify-content-between'
                                        style={{ background: `${item["background"]}` }}>
                                        <div>
                                            <div className='purpleDot'></div>
                                            <h4 className='py-3'>{item["heading"]}</h4>
                                            <p className='cardParagraph pb-5'>{item["paragraph"]}</p>
                                        </div>
                                        {item["button"] ? (<Link to='/'>{item["button"]}</Link>) : null}

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

export default Cardwithpurledot