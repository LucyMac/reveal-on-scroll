import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

// import NextArrow from "../NextArrow";
// import PrevArrow from "../PrevArrow";

import Text from "../../Text/Text";
import H5 from "../../Text/H5";
import Subheading from "../../Text/Subheading";

import image1 from "../../../..//img/indoor-pool.jpeg";
import image2 from "../../../../img/head-massage.jpg";
import image3 from "../../../../img/dessert-globe.jpg";
import image4 from "../../../../img/beach-hut.jpg";

import "./sliderThumbnails.scss";

class SliderThumbnails extends React.Component {

  render() {
    const { lang, isRTL } = this.props;

    const settings = {
      infinite: true,
      dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

    return (
      <div className="slider--thumbnails">
        <Slider {...settings}>

        <div className="slider--thumbnails__slide">
          <div className="slider--thumbnails__slide-wrapper">

            <div className="slider--thumbnails__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="slider--thumbnails__copy pt-5">
              <Subheading className="pb-3" colour="gold">Explore</Subheading>
              <H5 className="slider--thumbnails__image-subheader pb-3">Exclusive Souk shopping event</H5>
              <Text weight="light">Lorem ipsum dolor sit amet</Text>
            </div>
          </div>
        </div>

        <div className="slider--thumbnails__slide">
          <div className="slider--thumbnails__slide-wrapper">

            <div className="slider--thumbnails__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="slider--thumbnails__copy pt-5">
              <Subheading className="pb-3" colour="gold">Explore</Subheading>
              <H5 className="slider--thumbnails__image-subheader pb-3">Exclusive Souk shopping event</H5>
              <Text weight="light">Lorem ipsum dolor sit amet</Text>
            </div>
          </div>
        </div>

        <div className="slider--thumbnails__slide">
          <div className="slider--thumbnails__slide-wrapper">

            <div className="slider--thumbnails__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="slider--thumbnails__copy pt-5">
              <Subheading className="pb-3" colour="gold">Explore</Subheading>
              <H5 className="slider--thumbnails__image-subheader pb-3">Exclusive Souk shopping event</H5>
              <Text weight="light">Lorem ipsum dolor sit amet</Text>
            </div>
          </div>
        </div>

        </Slider>
      </div>
    );
  }
}

export default SliderThumbnails;
