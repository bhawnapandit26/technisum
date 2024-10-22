import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  return (
    <>
      <div className="position-relative body-wrapper">
      <Header/>
      <ScrollToTop>
      <Outlet/>
      </ScrollToTop>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
