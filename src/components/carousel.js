import React from 'react';
import Slider from 'react-slick';
import laptop from '../assets/laptop.png';
import iphone from '../assets/iphone.png';
import ipad from '../assets/ipad1.png';

import classes from './carousel.module.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true, 
        arrows: false,
      };
      return (
        <Slider {...settings}>
            <img src={iphone} /> 
            <img src={laptop} /> 
            <img src={ipad} /> 

        </Slider>
      );
    }
  }

  export default function MySlider(){
      return(
          <div className={classes.carousel}>
              <SimpleSlider />
          </div>
      )
  }