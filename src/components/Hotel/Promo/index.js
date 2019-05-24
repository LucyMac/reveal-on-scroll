import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import H1 from "../../Common/Text/H1";
import H2 from "../../Common/Text/H2";
import H3 from "../../Common/Text/H3";
import H4 from "../../Common/Text/H4";
import Subheading from "../../Common/Text/Subheading";

import SectionHeader from "../../Common/Header/sectionHeader";

import Wrap from "../../Common/Layout/Wrap";
import VerticalOrientation from "../../Common/Layout/VerticalOrientation";
import Badge from "../../Common/Badge";
import Text from "../../Common/Text/Text";
import CarouselContained from "../../Common/Carousel/CarouselContained";
import Module from "../../Common/Module";

import "./promo.scss";
import "../../Common/Carousel/carousel.scss";

const Promo = props => {
  return (
    <Module className="promo" spacing={props.spacing}>
      {props.isRTL ? 
        <Container fluid={false}>
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <SectionHeader
              tag="عروض"
              strapline="حصريا لك"
              lang={props.lang}
            />
          </Col>
          <Col xs="12">
            <CarouselContained lang={props.lang} isRTL={props.isRTL} />
          </Col>
        </Row>
      </Container>
      :
      <Container fluid={false}>
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <SectionHeader
              tag="Al Qasr offers"
              strapline="Exclusively for you"
              lang={props.lang}
            />
          </Col>
          <Col xs="12">
            <CarouselContained lang={props.lang} />
          </Col>
        </Row>
      </Container>
      }
    </Module>
  );
};

Promo.propTypes = {
  children: PropTypes.node
};

export default Promo;
