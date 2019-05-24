import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import { Container, Row, Col } from "react-bootstrap";
import Module from "../../Common/Module";
import H1 from "../../Common/Text/H1";
import H3 from "../../Common/Text/H3";
import Subheading from "../../Common/Text/Subheading";

import tripAdvisor from "../../../img/icons/trip-advisor.svg";

import "./reviews.scss";

const Reviews = props => {
  return (
    <Module className="reviews" spacing={props.spacing}>
      {props.isRTL ? 
        <Container fluid={false}>
          <Row>
            <Col>
              <div className="reviews__wrapper">
                <div className="reviews__block">
                  <H1 lang={props.lang === 'AR' ? 'arabic' : undefined}>4.9</H1>
                  <Subheading lang={props.lang === 'AR' ? 'arabic' : undefined}>تصنيف متوسط ​​ممتاز</Subheading>
                </div>
                <div className="reviews__block">
                  <H3 colour="white" className="pb-5" lang={props.lang === 'AR' ? 'arabic' : undefined}>“ملكية جميلة مع محيط مذهل”</H3>
                  <Subheading className="pb-5" lang={props.lang === 'AR' ? 'arabic' : undefined}>luxurytraveller87</Subheading>
                  <button className={cx('button button--secondary', {'arabic-sans': props.lang === 'AR'})}>عرض الاستعراضات</button>
                </div>
                <div className="reviews__block">
                  <img src={tripAdvisor} alt="Trip Advisor Rating"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      :
        <Container fluid={false}>
          <Row>
            <Col>
              <div className="reviews__wrapper">
                <div className="reviews__block">
                  <H1>4.9</H1>
                  <Subheading>Avg rating excellent</Subheading>
                </div>
                <div className="reviews__block">
                  <H3 colour="white" className="pb-5">“A beautiful property, with stunning surroundings”</H3>
                  <Subheading className="pb-5">luxurytraveller87</Subheading>
                  <button className="button button--secondary">View reviews</button>
                </div>
                <div className="reviews__block">
                  <img src={tripAdvisor} alt="Trip Advisor Rating"/>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </Module>
  );
};

Reviews.propTypes = {
  children: PropTypes.node
};

export default Reviews;
