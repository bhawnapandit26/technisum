import React from 'react'

function Threecolcardwithrm({data}) {
  return (
    <>
        <div className="container pb-5">
            <div className="row pb-5">
                {
                    data.map((item)=>{
                        return(
                            <div className='col-xl-4 col-md-6 col-12 my-4 px-4'>
                                <div className='shdwcardwrm d-flex flex-column justify-content-between'>
                                    <div><img src={item["image"]} alt={item["alt"]} className='img-fluid'/></div>
                                   
                                    <h4 className='py-3'>{item["heading"]}</h4>
                                    <p className='cardParagraph pb-5'>{item["paragraph"]}</p>
                                    <a>{item["button"]}</a>
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