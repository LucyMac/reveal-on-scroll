import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import Module from "../../Common/Module";
import SectionHeader from "../../Common/Header/sectionHeader";
import SliderMulti from "../../Common/Slider/SliderMulti";

import "./activities.scss";

const Activities = props => {

  return (
    <Module className="activities" spacing={props.spacing}>
      <Col xs="12" md={{span: 6, offset: 3}}>
        <SectionHeader
          tag="Activities"
          strapline="We’ve got something for everyone and for every moment"
          lang={props.lang}
        />
      </Col>
      <Col xs="12">
        <SliderMulti lang={props.lang} isRTL={props.isRTL} />
      </Col>
    </Module>
  );
};

Activities.propTypes = {
  children: PropTypes.node
};

export default Activities;
