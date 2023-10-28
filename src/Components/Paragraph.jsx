import React from 'react'

function Paragraph({data}) {
  return (
    <>
        <div className='container pb-5'>
            <p>{data}</p>
        </div>
    </>
  )
}

export default Paragraph