
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

import NextArrow from "../../Carousel/NextArrow";
import PrevArrow from "../../Carousel/PrevArrow";

import H2 from "../../Text/H2";
import H4 from "../../Text/H4";
import Text from "../../Text/Text";
import MoreLink from "../../Link/MoreLink";

import image1 from "../../../../img/indoor-pool.jpeg";
import image2 from "../../../../img/desert-rally.png";
import image3 from "../../../../img/yatch-splash.jpg";

import "./sliderHero.scss";

class SliderHero extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    return (
      <div className="slider--hero">
        <Slider {...settings}>

          <div className="slider--hero__slide">
            <div className="slider--hero__slide-wrapper">
              <div className="slider--hero__image" style={{ backgroundImage: `url(${image2})`, backgroundPositionX: "center" }}></div>
              <div className="slider--hero__copy pb-gutter">
                <Container>
                  <Row>
                    <Col md="6">
                      <H2 className="slider--hero__image-header pb-2">
                        A desert adventure like no other
                      </H2>
                      <Text size="lg" className="slider--hero__image-subheader pb-5">A race through the desert. Discover inspiration beyond our hotels lorem ipsum set dolor.</Text>
                      <MoreLink>Explore more</MoreLink>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="slider--hero__slide">
            <div className="slider--hero__slide-wrapper">
              <div className="slider--hero__image slider--hero__image--red" style={{ backgroundImage: `url(${image1})`, backgroundPositionX: "left" }}></div>
              <div className="slider--hero__copy pb-gutter">
                <Container>
                  <Row>
                    <Col md="6">
                      <H2 className="slider--hero__image-header pb-2">
                        A desert adventure like no other
                      </H2>
                      <Text size="lg" className="slider--hero__image-subheader pb-5">A race through the desert. Discover inspiration beyond our hotels lorem ipsum set dolor.</Text>
                      <MoreLink>Explore more</MoreLink>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="slider--hero__slide">
            <div className="slider--hero__slide-wrapper">
              <div className="slider--hero__image slider--hero__image--blue" style={{ backgroundImage: `url(${image3})`, backgroundPositionX: "center" }}></div>
              <div className="slider--hero__copy pb-gutter">
                <Container>
                  <Row>
                    <Col md="6">
                      <H2 className="slider--hero__image-header pb-2">
                        A desert adventure like no other
                      </H2>
                      <Text size="lg" className="slider--hero__image-subheader pb-5">A race through the desert. Discover inspiration beyond our hotels lorem ipsum set dolor.</Text>
                      <MoreLink>Explore more</MoreLink>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}

export default SliderHero;
