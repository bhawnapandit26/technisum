import React from 'react'

function YoutubeVideo({data}) {
  return (
    <>
        <iframe width="100%" height="700" src={data} title="Technisum Web Solutions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{marginBottom:"-7px"}}></iframe>
    </>
  )
}

export default YoutubeVideo