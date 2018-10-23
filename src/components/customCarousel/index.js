import React from 'react';
import propTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import './customCarousel.scss';

const CustomCarousel = ({ carouselData }) => (
  <Carousel
    showThumbs={false}
    showIndicators={false}
    showStatus={false}
    selectedItem={1}
  >
    {
      carouselData.map(slide => (
        <div key={slide.header} className="carousel-shaped">
          <img alt={slide.header} src={slide.imageUrl} />
        </div>
      ))
    }
  </Carousel>
);

CustomCarousel.propTypes = {
  carouselData: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default CustomCarousel;
