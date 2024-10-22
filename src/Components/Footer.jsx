import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <footer className='py-5'>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-12 py-3">
                                <img src="./src/assets/Logo.png" alt="Logo" className='mb-5' />
                                <p className='copyrightSection mb-5'>Welcome to technisum, where innovation meets expertise in web development. We are a passionate team dedicated to crafting cutting-edge websites and digital solutions tailored to elevate your online presence.</p> 
                                
                            </div>
                            <div className="col-xl-6 col-12 px-xl-5 py-3">
                                <div className='row'>
                                    <div className='footerList col-lg-6 col-12'>
                                        <h6>Services</h6>
                                        <ul>
                                            <li><Link to="android-app-development">Android App Development</Link></li>
                                            <li><Link to="ios-app-developmentt">iOS App Developmen</Link></li>
                                            <li><Link to="flutter-development">Flutter Development</Link></li>
                                            <li><Link to="dynamic-website">Dynamic Website</Link></li>
                                            <li><Link to="wordpress-website">WordPress Website</Link></li>
                                            <li><Link to="woocommerce-website">WooCommerce Website</Link></li>
                                            <li><Link to="uiux-desig">UI/Ux design</Link></li>
                                            <li><Link to="x-cart-developmen">X-cart Development</Link></li>
                                        </ul>
                                    </div>
                                    <div className='footerList col-lg-6 col-12'>
                                        <ul className='mt-5'>
                                            <li><Link to="seo">SEO</Link></li>
                                            <li><Link to="smo">SMO</Link></li>
                                            <li><Link to="smm">SMM</Link></li>
                                            <li><Link to="sem">SEM</Link></li>
                                            <li><Link to="magento-ecommerce">Magento Ecommerce</Link></li>
                                            <li><Link to="google-analytics">Google Analytics</Link></li>
                                            <li><Link to="it-consulting">IT Consulting</Link></li>
                                            <li><Link to="e-consultants">E-consultants</Link></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-3 col-12 py-3">
                                <h6 className='mb-3'>Subscribe to our newsletter</h6>
                                <p className='mb-3'>Funding freemium long tail hypotheses first mover advantage assets ownership</p>
                                <p className='fw-bold mb-3'>Get the freshest news from us</p>
                                <form action="" className='d-flex'>
                                    <input type="text" name="" id="" className='w-100' />
                                    <button type="button"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <g clipPath="url(#clip0_814_968)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M32.1403 17.2539C32.1338 17.638 31.9079 17.9845 31.559 18.1453L12.3154 27.0156C11.943 27.1872 11.5036 27.1142 11.2068 26.8313C10.91 26.5484 10.816 26.113 10.9696 25.7328L14.515 16.9577L11.2665 8.06847C11.1257 7.68336 11.2343 7.25136 11.5405 6.9786C11.8466 6.70583 12.2882 6.64758 12.6546 6.83164L31.5893 16.3435C31.9326 16.516 32.1467 16.8698 32.1403 17.2539ZM16.2562 17.9871L13.7689 24.1434L26.7422 18.1634L16.2562 17.9871ZM26.7758 16.1636L14.0107 9.75107L16.2898 15.9874L26.7758 16.1636Z" fill="#8A8A8A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_814_968">
                                                <rect width="24" height="24" fill="white" transform="translate(17.2852 0.03125) rotate(45.9628)" />
                                            </clipPath>
                                        </defs>
                                    </svg></button>

                                </form>
                                <div className='my-5'>
                                    <Link to="/" className='me-3 text-decoration-underline'>Terms</Link>
                                    <Link to="/" className='me-3 text-decoration-underline'>Privacy</Link>
                                    <Link to="/" className='me-3 text-decoration-underline'>Claim</Link>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-white text-center'>Copyright © 2023 Technisum Web Solutions. All rights reserved</div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer