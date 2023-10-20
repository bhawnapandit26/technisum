import React from 'react'

function Cardwithpurledot({data}) {
  return (
    <>
        <div className="container pb-5">
            <div className="row pb-5">
                {
                    data["card"].map((item,index)=>{
                        return(
                            <div key={index} className='col-md-6 col-12 my-4 px-4'>
                                <div className='cardpurpledot d-flex flex-column justify-content-between' 
                                style={{backgroundColor:`${item["background"]}`}}>
                                    <div></div>
                                    <h4 className='py-3'>{item["heading"]}</h4>
                                    <p className='cardParagraph pb-5'>{item["paragraph"]}</p>
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