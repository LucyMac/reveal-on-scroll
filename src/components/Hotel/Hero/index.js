import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import { Container, Row, Col } from "react-bootstrap";

import H1 from "../../Common/Text/H1";
import H4 from "../../Common/Text/H4";
import Subheading from "../../Common/Text/Subheading";
import Wrap from "../../Common/Layout/Wrap";
import Module from "../../Common/Module";
import Header from "../../Common/Header";

import "./hero.scss";


const Hero = props => {

  return (
    <Module className="hotel-detail__hero" spacing={props.spacing}>
      {props.video ?
        <div className="hotel-detail__hero--video">
            <div className="slide">
                <div className="slide--video">
                    <video 
                      loop muted autoPlay
                      poster={props.videoPoster} 
                      className="video-bg" id="hero-video">
                        <source className="video-src" src={props.backgroundVideo} type="video/mp4" />
                    </video>

                    <div className="slide__overlay"></div>
                    <div className="slide__more-gradient"></div>
                    <div className="slide__text-area">
                      <Container fluid={true}>
                        <Row noGutters={false}>
                          <Col xs="12" lg={{ span: 10, offset: 1 }}>
                            <Container>
                              <Row>
                                <Col md="8" xl="6">
                                  <Wrap className={cx('slide__text-area-wrapper', {'rtl': props.isRTL})}>
                                    <Wrap spaceBottom="20px">
                                      <Subheading lang={props.lang === 'AR' ? 'arabic' : undefined} spaceBottom="">{props.subheading}</Subheading>
                                    </Wrap>

                                    <Wrap spaceBottom="20px">
                                      <H1 lang={props.lang === 'AR' ? 'arabic' : undefined}>{props.heading}</H1>
                                    </Wrap>
                                    <H4 lang={props.lang === 'AR' ? 'arabic' : undefined}>{props.strapline}</H4>
                                  </Wrap>
                                </Col>
                              </Row>
                            </Container>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>
            </div>
        </div>
      :
        <Wrap 
            style={{ backgroundImage: `url(${props.backgroundImg})`}} 
            backgroundImage={true} 
            dropShadow={true}>

            <div className="slide__overlay"></div>
            <div className="slide__more-gradient"></div>
            <div className="slide__text-area">
              <Container fluid={false}>
                <Row>
                  <Col xs="12" lg={{ span: 10, offset: 1 }}>
                    <Container>
                      <Row>
                        <Col md="8" lg="6">
                          <Wrap className={cx('slide__text-area-wrapper', {'rtl': props.isRTL})}>
                            <Wrap spaceBottom="20px">
                              <Subheading lang={props.lang === 'AR' ? 'arabic' : undefined}>{props.subheading}</Subheading>
                            </Wrap>

                            <Wrap spaceBottom="20px">
                              <H1 lang={props.lang === 'AR' ? 'arabic' : undefined}>{props.heading}</H1>
                            </Wrap>
                            <H4 lang={props.lang === 'AR' ? 'arabic' : undefined}>{props.strapline}</H4>
                          </Wrap>
                        </Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </div>
        </Wrap>
      }
    </Module>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  video: PropTypes.bool,
  withNav: PropTypes.bool,
};

Hero.defaultProps = {
  video: true,
  isRTL: false
};

export default Hero;
