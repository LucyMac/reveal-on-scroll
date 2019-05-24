import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import SectionHeader from "../../Common/Header/sectionHeader";

import arabianPalace from "../../../img/arabian-palace.png";
import indoorPool from "../../../img/indoor-pool.jpeg";

import H4 from "../../Common/Text/H4";
import Text from "../../Common/Text/Text";
import Module from "../../Common/Module";
import Tabs from "../../Common/Tabs";
import Accordeon from "../../Common/Accordeon";

import "./highlights.scss";

const Highlights = props => {

  let screenWidth = window.innerWidth;

  return (
    <Module className="highlights" spacing={props.spacing}>
      {props.isRTL ? 
        <Container fluid={false}>
          <Row>
            <Col xs="12" md={{span: 6, offset: 3}}>
              <SectionHeader
                tag={props.lang === 'AR' ? 'الخيال ملكي' : 'A regal fantasy'}
                strapline={props.lang === 'AR' ? 'قصرك ينتظر' : 'Your palace awaits'}
                lang={props.lang}
              />
            </Col>

            <Col xs="12">
              {screenWidth > 767 
                ? <Tabs lang={props.lang} isRTL={props.isRTL} ></Tabs>
                : <Accordeon lang={props.lang} isRTL={props.isRTL} ></Accordeon>
              }
            </Col>
          </Row>
        </Container>
      :
      <Container fluid={false}>
        <Row>
          <Col xs="12" md={{span: 6, offset: 3}}>
            <SectionHeader
              tag={props.lang === 'AR' ? 'الخيال ملكي' : 'A regal fantasy'}
              strapline={props.lang === 'AR' ? 'قصرك ينتظر' : 'Your palace awaits'}
              lang={props.lang}
            />
          </Col>

          <Col xs="12">
            {screenWidth > 767 
              ? <Tabs lang={props.lang} isRTL={props.isRTL} ></Tabs>
              : <Accordeon lang={props.lang} isRTL={props.isRTL} ></Accordeon>
            }
          </Col>
        </Row>
      </Container>
      }
    </Module>
  );
};

Highlights.propTypes = {
  children: PropTypes.node
};

export default Highlights;
