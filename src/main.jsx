import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import Home from "./Pages/Home";
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import AndroidAppDev from "./Pages/AndroidAppDev";
import IosAppDevlopment from "./Pages/IosAppDevlopment";
import FlutterDevelopment from "./Pages/FlutterDevelopment";
import StaticWebsite from "./Pages/StaticWebsite";
import DynamicWebsite from "./Pages/DynamicWebsite";
import WordpressWebsite from "./Pages/WordpressWebsite";
import CustomWebsite from "./Pages/CustomWebsite";
import CMSWebsiteDevelopment from "./Pages/CMSWebsiteDevelopment";
import MagentoEcommerce from "./Pages/MagentoEcommerce";
import MagentoCustomization from "./Pages/MagentoCustomization";
import WooCommerceWebsite from "./Pages/WooCommerceWebsite";
import EcommerceMaintenance from "./Pages/EcommerceMaintenance";
import Econsultants from "./Pages/Econsultants";
import ShopifyEcommercestore from "./Pages/ShopifyEcommercestore";
import XcartDevelopment from "./Pages/XcartDevelopment";
import SEO from "./Pages/SEO";
import SMO from "./Pages/SMO";
import SMM from "./Pages/SMM";
import SEM from "./Pages/SEM";
import GoogleAnalytics from "./Pages/GoogleAnalytics";
import UIUxdesign from "./Pages/UIUxdesign";
import ITConsulting from "./Pages/ITConsulting";
import ContactUs from "./Pages/ContactUs";
import Portfolio from './Pages/Portfolio.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='android-app-development' element={<AndroidAppDev />} />
        <Route path='ios-app-development' element={<IosAppDevlopment />} />
        <Route path='flutter-development' element={<FlutterDevelopment />} />
        <Route path='static-website' element={<StaticWebsite />} />
        <Route path='dynamic-website' element={<DynamicWebsite />} />
        <Route path='wordpress-website' element={<WordpressWebsite />} />
        <Route path='custom-website' element={<CustomWebsite />} />
        <Route path='cms-website-development' element={<CMSWebsiteDevelopment />} />
        <Route path='magento-ecommerce' element={<MagentoEcommerce />} />
        <Route path='magento-customization' element={<MagentoCustomization />} />
        <Route path='woocommerce-website' element={<WooCommerceWebsite />} />
        <Route path='ecommerce-maintenance' element={<EcommerceMaintenance />} />
        <Route path='e-consultants' element={<Econsultants />} />
        <Route path='shopify-ecommerce-store' element={<ShopifyEcommercestore />} />
        <Route path='x-cart-development' element={<XcartDevelopment />} />
        <Route path='seo' element={<SEO />} />
        <Route path='smo' element={<SMO />} />
        <Route path='smm' element={<SMM />} />
        <Route path='sem' element={<SEM />} />
        <Route path='google-analytics' element={<GoogleAnalytics />} />
        <Route path='uiux-design' element={<UIUxdesign />} />
        <Route path='it-consulting' element={<ITConsulting />} />
      <Route path='about' element={<Services />} />
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='pricing' element={<Home />} />
      <Route path='contact-us' element={<ContactUs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
