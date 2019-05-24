import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import { Container, Row, Col } from "react-bootstrap";

import Module from "../Module";
import H1 from "../Text/H1";
import H3 from "../Text/H3";
import Text from "../Text/Text";

import SliderThumbnails from "../Slider/SliderThumbnails";

import image1 from "../../../img/dubai-iconic.jpg";
import image2 from "../../../img/dubai-palmtree.jpg";

import "./spotlight.scss";

const Spotlight = props => {
  return (
    <Module className="spotlight" spacing={props.spacing}>
      <Container>

        <div className="spotlight__main-content">
          <Row className="pb-5">
            <Col xs="12" md={{span: 6}}
              className={cx({
                'order-1': props.imageAlign == 'left', 
                'order-2': props.imageAlign == 'right'
              })}>
              <div className="spotlight__image-wrapper">
                <div className={cx('spotlight__image-1' , {
                  'spotlight__image-1--left-aligned' : props.imageAlign == 'left', 
                  'spotlight__image-1--right-aligned' : props.imageAlign == 'right', 
                })} style={{ backgroundImage: `url(${image1})`}}></div>
                <div className={cx('spotlight__image-2' , {
                  'spotlight__image-2--left-aligned' : props.imageAlign == 'left', 
                  'spotlight__image-2--right-aligned' : props.imageAlign == 'right', 
                })} style={{ backgroundImage: `url(${image2})`}}></div>
              </div>
            </Col>
            <Col xs="12" md={{span: 4, offset: 1}}
              className={cx({
                'order-2': props.imageAlign == 'left', 
                'order-1': props.imageAlign == 'right'
              })}>
              <H1 options="smaller" className="pb-5">Jumeirah Beach Hotel</H1>
              <H3 className="pb-5" colour="white">The ultimate family resort</H3>
              <Text className="pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua ut enim ad minim</Text>
              <button className="button button--secondary">Discover more</button>
            </Col>
          </Row>
        </div>

        <div className="spotlight__secondary-content">
          <Row>
            <Col xs="12">
              <SliderThumbnails />
            </Col>
          </Row>
        </div>

      </Container>
    </Module>
  );
};

Spotlight.defaultProps = {
  imageAlign: 'left'
};

Spotlight.propTypes = {
  children: PropTypes.node
};

export default Spotlight;

