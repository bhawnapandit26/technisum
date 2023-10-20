import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AndroidAppDev from "./Pages/AndroidAppDev";
import IosAppDevlopment from "./Pages/IosAppDevlopment";
import FlutterDevelopment from "./Pages/FlutterDevelopment";
import StaticWebsite from "./Pages/StaticWebsite";
import DynamicWebsite from "./Pages/DynamicWebsite";

function App() {

  return (
    <>
      <div className="position-relative">
      <Header/>
      {/* <Home/> */}
      {/* <AndroidAppDev/> */}
      {/* <IosAppDevlopment/> */}
      {/* <FlutterDevelopment/> */}
      {/* <StaticWebsite/> */}
      <DynamicWebsite/>
      </div>
      
    </>
  )
}

export default App
