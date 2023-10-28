import React from 'react'

function Heading({data}) {
  return (
    <>
    <div className="container-fluid" style={{ backgroundColor: `${data["background"]}`, padding:`${data["padding"]}`}}>
    <div className="container pt-5">
        <div className="row">
            <div className="col-12 px-5">
                {data["heading"] ? (<h2 className={`px-5 text-center text-${data["color"]? data["color"] : "dark" } pb-5` }>{data["heading"]}</h2>) : null}
                
                {data["small-heading"] ? (<h3 className={`px-5 text-center text-${data["color"]? data["color"] : "dark"} pb-5` }>{data["small-heading"]}</h3>) : null}
                {data["subheading"] ? (<p className={`px-5 text-center text-${data["color"]? data["color"] : "dark"} pb-5` }>{data["subheading"]}</p>) : null}
                {data["subheadingTwo"] ? (<p className={`px-5 text-center text-${data["color"]? data["color"] : "dark"} pb-5` }>{data["subheadingTwo"]}</p>) : null}
                {data["subheadingThree"] ? (<p className={`px-5 text-center text-${data["color"]? data["color"] : "dark"} pb-5` }>{data["subheadingThree"]}</p>) : null}
                {data["list"] ? (
                  <ul className='d-flex align-items-center flex-column'>
                    {data["list"].map((item)=>{
                      return(
                        <li>{item}</li>
                      );
                    })}
                  </ul>
                ) : null}
            </div>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Heading