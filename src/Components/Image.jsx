import React from 'react'

function Image({data}) {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={data["image"]} alt={data["alt"]} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Image