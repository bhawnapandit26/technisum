import React from 'react'

function SeoContact({ data }) {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: `${data["background"]}`, padding: `${data["padding"]}` }}>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className='col-lg-5 col-12'>
                            <form action="/" className='seoform'>                                 
                                    <input type="text" name="fullname" id="fullname" placeholder='Your name*' required />
                                    <input type="email" name="emailId" id="emailId" placeholder='Email*' required />
                                    <input type="url" name="companyURL" id="companyURL" placeholder='Website URL*' required />
                                    <input type="text" name="companyName" id="companyName" placeholder='Company Name*'  />
                                    <input type="submit" value="GET YOUR REPORT" />
                                    <p className='text-center mt-4'>*We will get back to you within 24 hours</p>               
                            </form>
                        </div>
                        <div className='col-lg-7 col-12 seoformText px-5'>
                            <div className='text-white t1'>{data["subheading"]}</div>
                            <div className='text-white t2'>{data["heading"]}</div>
                            <p className='text-white t3'>{data["paragraph"]}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeoContact