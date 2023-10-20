import React from 'react'

function Heading({data}) {
  return (
    <>
    <div className="container pt-5">
        <div className="row py-5">
            <div className="col-12">
                <h2 className='text-center pb-5'>{data["heading"]}</h2>
                {data["subheading"] ? (<p className='text-center'>{data["subheading"]}</p>) : null}
            </div>
        </div>
    </div>
    </>
  )
}

export default Heading