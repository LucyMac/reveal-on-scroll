
import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

import ParallaxBackground from "../../ParallaxBackground";

import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

import H2 from "../../Text/H2";
import H3 from "../../Text/H3";
import Text from "../../Text/Text";
import MoreLink from "../../Link/MoreLink";

import image1 from "../../../../img/indoor-pool.jpeg";
import image2 from "../../../../img/lady-in-room.png";
import image3 from "../../../../img/beach-hut.jpg";

import "./carouselContained.scss";

class CarouselContained extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    const { lang, isRTL } = this.props;

    return (
      <div className="carousel--contained" style={{ textAlign: isRTL ? 'right' : 'left'}}>
        <Slider {...settings}>

          <div className="carousel--contained__slide">
            <div className="carousel--contained__slide-wrapper">
              <ParallaxBackground background={image2} height="600px">
                <div className=""></div>
              </ParallaxBackground>
              <div className="carousel--contained__copy">
                <Container>
                  <Row>
                    <Col md="12" className="d-flex flex-column justify-content-between">
                      <div>
                        <H2 className="carousel--contained__image-header pt-5 pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار' : 'Suite dreams'}
                        </H2>
                        <H3 className="carousel--contained__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود. بسبب للسيطرة الربيع، بـ أضف' : 'Enjoy a complimentary suite upgrade when you book 3 nights'}
                        </H3>
                        <Text size="xs" className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Valid from 15 March to 30 June 2019.'}
                        </Text>
                        <Text size="xs" bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-2 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Up to 15% off Best Available Rate'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-2 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Access to Talise Spa and fitness facilities'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-5 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Full wi-fi access'}
                        </Text>
                        <MoreLink className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'عرض التفاصيل' : 'View details'}
                        </MoreLink>
                      </div>
                      <button className={cx('button button--primary mb-5', {'arabic-sans': lang === 'AR'})}>
                        {lang === 'AR' ? 'احجز هذه الغرفة' : 'Book this room'}
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="carousel--contained__slide">
            <div className="carousel--contained__slide-wrapper">
              <ParallaxBackground background={image1} height="600px">
                <div className=""></div>
              </ParallaxBackground>
              <div className="carousel--contained__copy">
                <Container>
                  <Row>
                    <Col md="12" className="d-flex flex-column justify-content-between">
                      <div>
                        <H2 className="carousel--contained__image-header pt-5 pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار' : 'Suite dreams'}
                        </H2>
                        <H3 className="carousel--contained__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود. بسبب للسيطرة الربيع، بـ أضف' : 'Enjoy a complimentary suite upgrade when you book 3 nights'}
                        </H3>
                        <Text size="xs" className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Valid from 15 March to 30 June 2019.'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-2 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Up to 15% off Best Available Rate'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-2 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Access to Talise Spa and fitness facilities'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} className="mb-5 d-none d-md-block" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Full wi-fi access'}
                        </Text>
                        <MoreLink className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'عرض التفاصيل' : 'View details'}
                        </MoreLink>
                      </div>
                      <button className={cx('button button--primary mb-5', {'arabic-sans': lang === 'AR'})}>
                        {lang === 'AR' ? 'احجز هذه الغرفة' : 'Book this room'}
                      </button>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="carousel--contained__slide">
            <div className="carousel--contained__slide-wrapper">
              <ParallaxBackground background={image3} height="600px">
                <div className=""></div>
              </ParallaxBackground>
              <div className="carousel--contained__copy">
                <Container>
                  <Row>
                    <Col md="12" className="d-flex flex-column justify-content-between">
                      <div>
                        <H2 className="carousel--contained__image-header pt-5 pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار' : 'Suite dreams'}
                        </H2>
                        <H3 className="carousel--contained__image-subheader pb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود. بسبب للسيطرة الربيع، بـ أضف' : 'Enjoy a complimentary suite upgrade when you book 3 nights'}
                        </H3>
                        <Text size="xs" className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Valid from 15 March to 30 June 2019.'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} lang={lang === 'AR' ? 'arabic' : undefined} className="mb-2 d-none d-md-block">
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Up to 15% off Best Available Rate'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} lang={lang === 'AR' ? 'arabic' : undefined} className="mb-2 d-none d-md-block">
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Access to Talise Spa and fitness facilities'}
                        </Text>
                        <Text size="xs"  bullet={isRTL ? 'diamondRtl' : 'diamond'} lang={lang === 'AR' ? 'arabic' : undefined} className="mb-5 d-none d-md-block">
                          {lang === 'AR' ? 'ان بعد وصغار الآخر الجنود' : 'Full wi-fi access'}
                        </Text>
                        <MoreLink className="mb-5" lang={lang === 'AR' ? 'arabic' : undefined}>
                          {lang === 'AR' ? 'عرض التفاصيل' : 'View details'}
                        </MoreLink>
                      </div>
                      <button className={cx('button button--primary mb-5', {'arabic-sans': lang === 'AR'})}>
                        {lang === 'AR' ? 'احجز هذه الغرفة' : 'Book this room'}
                      </button>
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

export default CarouselContained;
