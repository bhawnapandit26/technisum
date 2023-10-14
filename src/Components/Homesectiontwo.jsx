import React from 'react'

function Homesectiontwo({data}) {
    return (
        <>
            <div className='container py-md-5'>
                <div className='row py-5'>
                    <div className='col-xl-5 col-12 py-2'>
                        <h2 className='py-4'>{data["heading"]}</h2>
                        <p>{data["paragraph"]}</p>
                    </div>
                    <div className='col-xl-7 col-12 py-2 d-flex home-card-section flex-md-row flex-column align-items-start'>
                        {data["card"].map((card) => {
                            return (
                                <div className='homeCardSectionTwo d-flex flex-column align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center flex-column flex-xxl-row'>
                                        <img src={card["image"]} alt={card["alt"]} className='img-fluid'/>
                                        <h4 className='text-xxl-start text-center py-2 py-xxl-0'>
                                            {card["heading"]}
                                        </h4>
                                    </div>                                   
                                    <p className='cardParagraph py-4'>
                                        {card["paragraph"]}
                                    </p>
                                    <a> {card["button"]}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homesectiontwo