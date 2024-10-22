import React from "react";

function PortfolioSection({data}) {
    return(
        <>
        <div className="container py-5">
                <div className="row">
                    {
                        data.map((item) => {
                            return (
                                <div className='col-xl-4 col-md-6 col-12 my-4 px-4'>
                                    <div className='portfolioCards d-flex flex-column justify-content-between'>
                                        <div>
                                            
                                            <a href={item["link"]} target="_blank">
                                            {item["image"] ? (<div><img src={item["image"]} alt={item["alt"]} className='img-fluid' /></div>) : null} 
                                            {item["heading"] ? (<h4 className='py-3 text-center'>{item["heading"]}</h4>) : null}
                                            </a>   
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

export default PortfolioSection;