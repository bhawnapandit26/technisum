import React from 'react'
//import { Link } from "react-router-dom";


function Header() {
    return (
        <>
            <header >
                <nav className="navbar navbar-expand-lg py-4">
                    <div className="container ">
                        <div className='d-flex justify-content-between custom-width w-100'>
                            <a className="navbar-brand" href="#">
                                <img src="./src/assets/Logo.png" alt="logo" className='img-fluid'/>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav gap-lg-4 gap-2">
                                <li className="nav-item ">
                                    <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Product 1</a></li>
                                        <li><a className="dropdown-item" href="#">Product 1</a></li>
                                        <li><a className="dropdown-item" href="#">Product 1</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white border border-white border-1 rounded-pill px-4 header-btn" href="#">Contact Us</a>
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