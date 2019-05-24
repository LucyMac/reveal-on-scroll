import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import H1 from "../../Common/Text/H1";
import H2 from "../../Common/Text/H2";
import H3 from "../../Common/Text/H3";
import H4 from "../../Common/Text/H4";
import Subheading from "../../Common/Text/Subheading";
import Text from "../../Common/Text/Text";

import SectionHeader from "../../Common/Header/sectionHeader";
import Module from "../../Common/Module";

import SliderHero from "../../Common/Slider/SliderHero";

// import "./inspiration.scss";
import "../../Common/Carousel/carousel.scss";

const Inspiration = props => {
  return (
    <Module className="inspiration" spacing={props.spacing}>
      <Col xs="12" md={{span: 6, offset: 3}}>
        <SectionHeader
          tag="Inspired stories"
          strapline="Discover Dubai with our unique adventures"
          lang={props.lang}
        />
      </Col>
      <Col xs="12" className="p-0">
        <SliderHero />
      </Col>
    </Module>
  );
};

Inspiration.propTypes = {
  children: PropTypes.node
};

export default Inspiration;
