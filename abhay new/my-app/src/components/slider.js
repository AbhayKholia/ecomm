import React from 'react'

const Slider = () => {
  return (
    <div>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{marginTop:"50px"}}>
    <div className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/ca9e809c9166a577.jpg?q=50" style={{height:"400px",border:"1px solid gray"}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/51C8r3x208L._SX3000_.jpg" style={{height:"400px",border:"1px solid gray"}}  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/61jq1P9-SxL._SX3000_.jpg" style={{height:"400px",border:"1px solid gray"}}  className="d-block w-100 " alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
