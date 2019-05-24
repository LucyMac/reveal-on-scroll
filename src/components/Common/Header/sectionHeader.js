import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import Subheading from "../Text/Subheading";
import H2 from "../Text/H2";

import "./sectionHeader.scss";

const SectionHeader = ({ tag, strapline, lang}) => {
  return (
    <div className="sectionHeader">
      <Subheading 
        colour="gold" 
        lang={lang === 'AR' ? 'arabic' : undefined} 
        className="pb-3">
          {tag}
      </Subheading>

      <H2 className="" lang={lang === 'AR' ? 'arabic' : undefined} >{strapline}</H2>
    </div>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node
};

export default SectionHeader;
