import React from 'react'


function Clients({ data }) {
    return (
        <>
            <div className='container-fluid'>
                <div className='container py-5 clientSection'>
                    <div className='row'>
                        <h2 className='text-center'>{data["paragraph"]}</h2>
                    </div>
                    <div className='row py-4'>
                        <div className='d-flex justify-content-around flex-wrap'>
                            {
                                data["client"].map((item) => {
                                    return (
                                        <div className='clientImage'><img src={item} alt="company" className='img-fluid' /></div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Clients