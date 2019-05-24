import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

// import NextArrow from "../NextArrow";
// import PrevArrow from "../PrevArrow";

import Text from "../../Text/Text";
import H4 from "../../Text/H4";
import MoreLink from "../../Link/MoreLink";

import image1 from "../../../..//img/indoor-pool.jpeg";
import image2 from "../../../../img/head-massage.jpg";
import image3 from "../../../../img/dessert-globe.jpg";
import image4 from "../../../../img/beach-hut.jpg";

import "./sliderMulti.scss";

class SliderMulti extends React.Component {

  render() {
    const { lang, isRTL } = this.props;

    const settings = {
      infinite: true,
      dots: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    };

    return (
      <div className="slider--multi">
        <Slider {...settings}>

        <div className="slider--multi__slide">
          <div className="slider--multi__slide-wrapper">

            <div className="slider--multi__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="slider--multi__copy pt-5">
              <H4 className="slider--multi__image-subheader pb-5">Souk Medinat Tour</H4>
              <Text weight="light" className="pb-5">The spirit of the traditional Arabian souk survives at Madinat.</Text>
              <MoreLink className="pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>View details</MoreLink>
              <button className="button button--secondary">Book this tour</button>
            </div>
          </div>
        </div>

        <div className="slider--multi__slide">
          <div className="slider--multi__slide-wrapper">

            <div className="slider--multi__image" style={{ backgroundImage: `url(${image4})` }}>
            </div>
  
            <div className="slider--multi__copy pt-5">
              <H4 className="slider--multi__image-subheader pb-5">Talise Spa Treatment</H4>
              <Text weight="light" className="pb-5">Relax and let time stand still. Treat yourself to the most revitalising spa experience.</Text>
              <MoreLink className="pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>View details</MoreLink>
              <button className="button button--secondary">Book a treatment</button>
            </div>
          </div>
        </div>

        <div className="slider--multi__slide">
          <div className="slider--multi__slide-wrapper">

            <div className="slider--multi__image" style={{ backgroundImage: `url(${image3})` }}>
            </div>
  
            <div className="slider--multi__copy pt-5">
              <H4 className="slider--multi__image-subheader pb-5">Water Sports</H4>
              <Text weight="light" className="pb-5">Our Water Sports Centre offers a large range of adrenaline-packed activities to try.</Text>
              <MoreLink className="pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>View details</MoreLink>
              <button className="button button--secondary">Book an activity</button>
            </div>
          </div>
        </div>

        <div className="slider--multi__slide">
          <div className="slider--multi__slide-wrapper">

            <div className="slider--multi__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="slider--multi__copy pt-5">
              <H4 className="slider--multi__image-subheader pb-5">Souk Medinat Tour</H4>
              <Text weight="light" className="pb-5">The spirit of the traditional Arabian souk survives at Madinat.</Text>
              <MoreLink className="pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>View details</MoreLink>
              <button className="button button--secondary">Book this tour</button>
            </div>
          </div>
        </div>

        <div className="slider--multi__slide">
          <div className="slider--multi__slide-wrapper">

            <div className="slider--multi__image" style={{ backgroundImage: `url(${image2})` }}>
            </div>
  
            <div className="slider--multi__copy pt-5">
              <H4 className="slider--multi__image-subheader pb-5">Souk Medinat Tour</H4>
              <Text weight="light" className="pb-5">The spirit of the traditional Arabian souk survives at Madinat.</Text>
              <MoreLink className="pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>View details</MoreLink>
              <button className="button button--secondary">Book this tour</button>
            </div>
          </div>
        </div>

        </Slider>
      </div>
    );
  }
}

export default SliderMulti;
