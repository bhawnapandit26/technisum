import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <div className="position-relative">
      <Header/>
      <Outlet/>
      {/* <Home/> */}
      {/* <AndroidAppDev/> */}
      {/* <IosAppDevlopment/> */}
      {/* <FlutterDevelopment/> */}
      {/* <StaticWebsite/> */}
      {/* <DynamicWebsite/> */}
      {/* <WordpressWebsite/> */}
      {/* <CustomWebsite/> */}
      {/* <CMSWebsiteDevelopment/> */}
      {/* <MagentoEcommerce/> */}
      {/* <MagentoCustomization/> */}
      {/* <WooCommerceWebsite/> */}
      {/* <EcommerceMaintenance/> */}
      {/* <Econsultants/> */}
      {/* <ShopifyEcommercestore/> */}
      {/* <XcartDevelopment/> */}
      {/* <SEO/> */}
      {/* <SMO/> */}
      {/* <SMM/> */}
      {/* <SEM/> */}
      {/* <GoogleAnalytics/> */}
      {/* <UIUxdesign/> */}
      {/* <ITConsulting/> */}
      {/* <ContactUs/> */}
      <Footer/>
      </div>
      
    </>
  )
}

export default App
