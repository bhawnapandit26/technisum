import React from 'react'
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg py-4">
                    <div className="container ">
                        <div className='d-flex justify-content-between custom-width w-100'>
                            <Link className="navbar-brand" to="/">
                                <img src="./src/assets/Logo.png" alt="logo" className='img-fluid' />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav gap-lg-4 gap-2">
                                <li className="nav-item ">
                                    <NavLink className="nav-link text-white active" aria-current="page" to="/" >Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-white dropdown-toggle" to="services" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><NavLink className="dropdown-item" to='android-app-development'>Android App Development</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="ios-app-development">iOS App Development</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="flutter-development">Flutter Development</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="static-website">Static Website</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="dynamic-website">Dynamic Website</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="wordpress-website">WordPress Website</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="custom-website">Custom Website</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="cms-website-development">CMS Website Development</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="magento-ecommerce">Magento Ecommerce</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="magento-customization">Magento Customization</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="woocommerce-website">WooCommerce Website</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="ecommerce-maintenance">E-commerce Maintenance</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="e-consultants">E-consultants</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="shopify-ecommerce-store">Shopify E-commerce Store</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="x-cart-development">X-cart Development</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="seo">SEO</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="smo">SMO</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="smm">SMM</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="sem">SEM</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="google-analytics">Google Analytics</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="uiux-design">UI/Ux design</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="it-consulting">IT Consulting</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to="pricing">Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white border border-white border-1 rounded-pill px-4 header-btn" to="contact-us">Contact Us</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header