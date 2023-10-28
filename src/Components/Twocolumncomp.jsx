import React from 'react'

function Twocolumncomp({data}) {
  return (
    <>
      <div className='container py-5'>
        <div className='row'>
          {
            data.map((item)=>{
              return(
                <div className='col-lg-6 col-12 py-5 px-5'>
                  <h3 className='px-lg-5'>{item["heading"]}</h3>
                   <p className='px-lg-5'>{item["paragraph"]}</p> 
                </div>
              );
            })
          }
          
        </div>
      </div>
    </>
  )
}

export default Twocolumncomp