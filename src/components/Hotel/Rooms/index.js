import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import Module from "../../Common/Module";

import SectionHeader from "../../Common/Header/sectionHeader";
import CarouselFluid from "../../Common/Carousel/CarouselFluid";

const Rooms = props => {
  return (
    <Module className="rooms" spacing={props.spacing}> 
      <Col xs="12" md={{span: 6, offset: 3}}>
        <SectionHeader 
          tag="Rooms & suites"
          strapline="Timeless elegance"
          lang={props.lang}
        />
      </Col>
      <Col xs="12" className="p-0">
        <CarouselFluid></CarouselFluid>
      </Col>
    </Module>
  );
};

Rooms.propTypes = {
  children: PropTypes.node
};

export default Rooms;

