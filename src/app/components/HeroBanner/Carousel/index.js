// Carousel.js
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

const Carousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }, []); // Run only once on component mount

  return (
    <div className="owl-carousel">
      {/* Add your carousel items here */}
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
      {/* Add more items as needed */}
    </div>
  );
};

export default Carousel;
