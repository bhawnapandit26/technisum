import React from 'react'


function About() {
    return (
        <>
            <div className='container'>
                <div className='row py-5'>
                    <div className="col-xl-6  d-flex justify-content-center  flex-column">
                        <h1 className='text-start mb-4'>About Us</h1>
                        <p className='h3'>Welcome to Technisum web solutions, where innovation meets excellence in the world of Information Technology. We are a dynamic and forward-thinking IT company dedicated to delivering cutting-edge solutions to meet the evolving needs of our clients.
                            To provide best services to our clients</p>
                    </div>
                    <div className="col-xl-6 d-flex justify-content-center align-items-center"> <img src="./src/assets/giphy.gif" alt="" className='img-fluid' /> </div>
                </div>
            </div>


            <div className='container-fluid pb-5' style={{ backgroundColor: '#fbc2eb70' }}>
                <div className='container'>
                    <div className='row py-2'>
                        <div className="col-xl-6"><img src="./src/assets/08.png" alt="" className='img-fluid' /></div>
                        <div className="col-xl-6  d-flex justify-content-center  flex-column">
                            <h3 className='text-center text-xl-start'>Our Mission</h3>
                            <p className='fs-5 text-center text-xl-start'>At Technisum web solutions, our mission is to provide best services to our clients. We are committed to Trust and transprant work ethics, ensuring that our clients receive not only top-notch technical solutions but also a partner who is dedicated to their success.</p>
                        </div>
                    </div>
                    <div className='row py-2'>
                        <div className="col-xl-6  d-flex justify-content-center  flex-column order-xl-0 order-1">
                            <h3 className='text-center text-xl-start'>Our Story</h3>
                            <p className='fs-5 text-center text-xl-start'>Established in year of 2021, Technisum web solutions has rapidly grown from a small startup to a International work handler company with a global presence. We continue to push boundaries in the IT industry</p>
                        </div>
                        <div className="col-xl-6 "><img src="./src/assets/09.png" alt="" className='img-fluid ' /></div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row'>
                    <div className="col-xl-6"><img src="./src/assets/10.png" alt="" className='img-fluid' /></div>
                    <div className="col-xl-6 d-flex justify-content-center flex-column p-3">
                        <h3>Why Choose Technisum web solutions?</h3>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed h3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Expertise
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Our team of skilled professionals brings a wealth of experience in Graphic, Web and Mobile Apps Design and Developments services.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed h3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Innovation
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">We thrive on innovation and are always at the forefront of emerging technologies to provide our clients with solutions that are ahead of the curve.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed h3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Client-Centric Approach
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Your success is our priority. We work closely with our clients to understand their unique needs and tailor our solutions accordingly.  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row py-5'>
                    <div className="col-12 ">
                    <h3 className='text-center mb-3'>Meet the Team</h3>
                    <p className='fs-6 text-center'>Get to know the passionate individuals who drive Technisum Web Solutions forward. Our diverse team of experts combines technical prowess with creative thinking to deliver exceptional results.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-lg-4"><img src="./src/assets/avatar.jpg" alt="" className='img-fluid'/></div>
                    <div className="col-lg-4"><img src="./src/assets/avatar.jpg" alt="" className='img-fluid'/></div>
                    <div className="col-lg-4"><img src="./src/assets/avatar.jpg" alt="" className='img-fluid'/></div>
                </div>
            </div>

            <div className='container-fluid py-5'  style={{ backgroundColor: '#fbc2eb70' }}>
                <div className='container'>
                <div className='row py-5'>
                    <div className="col-12 ">
                    <h3 className='text-center mb-3'>Contact Us </h3>
                    <p className='h5 text-center'>We're here to answer any questions you may have. Reach out to us at <a href='mailto:technisuminfo@gmail.com' className='text-decoration-underline'>technisuminfo@gmail.com</a> / <a href='trl:6266250338' className='text-decoration-underline'>6266250338</a>.</p>
                    <p className='small text-center'>Thank you for considering Technisum Web Solutions for your IT needs. We look forward to the opportunity to work with you and contribute to your success.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default About