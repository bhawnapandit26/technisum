import React from 'react'


function RightImageList({ data }) {

    
    return (
        <>
            <div className='container-fluid' style={{ backgroundColor: `${data["background"]}` }}>
                <div className='container py-2'>
                    <div className='row align-items-center'>
                    <div className='col-lg-6 col-12 px-5 py-2'>
                            {data["heading"] ? (<h2 className='px-xl-5 pb-4'>{data["heading"]}</h2>) : null}
                            <ul className='px-xl-5'>
                            {data["list"].map((item, index)=>{
                                return(<li key={index}>{item}</li>);
                            })}
                            </ul>
                            

                        </div>
                        <div className='col-lg-6 col-12 py-2'>
                            <img src={data["image"]} alt={data["alt"]} className='px-xl-5 float-lg-start img-fluid' />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightImageList

