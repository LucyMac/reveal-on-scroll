import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

import H2 from "../../Text/H2";
import H4 from "../../Text/H4";
import Subheading from "../../Text/Subheading";

import image1 from "../../../../img/indoor-pool.jpeg";
import image2 from "../../../../img/head-massage.jpg";
import image3 from "../../../../img/dessert-globe.jpg";

import "./carouselFluid.scss";

class CarouselFluid extends React.Component {

  render() {
    const { lang, isRTL } = this.props;

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };

    return (
      <div className="carousel--fluid">
        <Slider {...settings}>

          <div className="carousel--fluid__image-wrapper">

            <div className="carousel--fluid__image" style={{ backgroundImage: `url(${image1})` }}>
            </div>
  
            <div className="carousel--fluid__copy pb-5">
              <Container>
                <Row>
                  <Col md="6">
                    <H2 className="carousel--fluid__image-header pb-2">
                      Exquisite details designed to dazzle
                    </H2>
                    <H4 className="carousel--fluid__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>Arabian Deluxe King Room</H4>
                    <Subheading colour="gold" lang={lang === 'AR' ? 'arabic' : undefined}>View details</Subheading>
                  </Col>
                  <Col md={{ span: 5, offset: 1}} className="d-flex pt-5">
                    <button className="button button--primary">Book this room</button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="carousel--fluid__image-wrapper">
            <div
              className="carousel--fluid__image  carousel--fluid__image--red"
              style={{ backgroundImage: `url(${image2})` }}>
            </div>
              
            <div className="carousel--fluid__copy pb-5">
              <Container>
                <Row>
                  <Col md="6">
                    <H2 className="carousel--fluid__image-header pb-2">
                      Exquisite details designed to dazzle
                    </H2>
                    <H4 className="carousel--fluid__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>Arabian Deluxe King Room</H4>
                    <Subheading colour="gold" lang={lang === 'AR' ? 'arabic' : undefined}>View details</Subheading>
                  </Col>
                  <Col md={{ span: 5, offset: 1}} className="d-flex pt-5">
                    <button className="button button--primary">Book this room</button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="carousel--fluid__image-wrapper">
            <div className="carousel--fluid__image carousel--fluid__image--blue" style={{ backgroundImage: `url(${image3})` }}>
            </div>
              
            <div className="carousel--fluid__copy pb-5">
              <Container>
                <Row>
                  <Col md="6">
                    <H2 className="carousel--fluid__image-header pb-2">
                      Exquisite details designed to dazzle
                    </H2>
                    <H4 className="carousel--fluid__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>Arabian Deluxe King Room</H4>
                    <Subheading colour="gold" lang={lang === 'AR' ? 'arabic' : undefined}>View details</Subheading>
                  </Col>
                  <Col md={{ span: 5, offset: 1}} className="d-flex pt-5">
                    <button className="button button--primary">Book this room</button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="carousel--fluid__image-wrapper">
            <div className="carousel--fluid__image  carousel--fluid__image--light" style={{ backgroundImage: `url(${image2})` }}>
            </div>
              
            <div className="carousel--fluid__copy pb-5">
              <Container>
                <Row>
                  <Col md="6">
                    <H2 className="carousel--fluid__image-header pb-2">
                      Exquisite details designed to dazzle
                    </H2>
                    <H4 className="carousel--fluid__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>Arabian Deluxe King Room</H4>
                    <Subheading colour="gold" lang={lang === 'AR' ? 'arabic' : undefined}>View details</Subheading>
                  </Col>
                  <Col md={{ span: 5, offset: 1}} className="d-flex pt-5">
                    <button className="button button--primary">Book this room</button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
  
        </Slider>
      </div>
    );
  }
}

export default CarouselFluid;
