import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './header.scss';
import header from '../../assets/header.jpg';

const carouselData = [{
  imageUrl: header,
  header: 'First slide label',
  title: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
}, {
  imageUrl: header,
  header: 'Second slide label',
  title: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
}, {
  imageUrl: header,
  header: 'Third slide label',
  title: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
},
];

const Header = () => (
  <div className="header">
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      selectedItem={1}
      className="shaped"
    >
      {
        carouselData.map(slide => (
          <div key={slide.header}>
            <img alt="900x500" src={slide.imageUrl} />
          </div>
        ))
      }
    </Carousel>
    <div className="navigation">
      <div>
        <select name="language" id="language">
          <option value="EN">EN</option>
          <option value="AR">AR</option>
          <option value="DE">DE</option>
        </select>
        <FaCaretDown className="icon-caret" />
      </div>
      <div className="menu">
        <div />
        <div />
        <div />
      </div>
    </div>
    <div className="content">
      <p className="heading">Welcome to more connected world</p>
      <p className="sub-heading">Travel soothes the soul and our collection royalty.</p>
      <button className="cta-button" type="button">Learn More</button>
    </div>
  </div>
);

export default Header;
