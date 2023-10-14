import React from 'react'

function Threecolhome({data}) {
  return (
    <>
        <div className="container py-5">
            <div className="row">
                {
                    data.map((item)=>{
                        return(
                            <div className="col-lg-4 col-12 py-2 px-5">
                               <h3>{item["heading"]}</h3>
                               <p>{item["paragraph"]}</p> 
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Threecolhome