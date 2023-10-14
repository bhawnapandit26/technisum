import React from 'react'

function Ctahome({data}) {
  return (
    <>
        <div className="container-fluid homecta my-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='ctsText mainHeading text-white text-center'>{data["paragraph"]}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ctahome