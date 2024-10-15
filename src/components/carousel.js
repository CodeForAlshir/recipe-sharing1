import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import img1 from '../static/image/core1.jpg';
import img2 from '../static/image/core2.jpg';
import img3 from '../static/image/core3.jpeg';

const Carousel = () => {
  return (
    <>
      <style>
        {`
          .carousel-inner img {
            width: 100%;
            height: 500px; /* Adjust this to the desired height */
            object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
          }
        `}
      </style>
      <div 
        id="carouselExampleFade" 
        className="carousel slide carousel-fade" 
        data-bs-interval="1000" // Set the interval to 10 seconds (10000 milliseconds)
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Third Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
