
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";

import SectionHeader from "../../Common/Header/sectionHeader";
import CarouselContained from "../../Common/Carousel/CarouselContained";

import H4 from "../../Common/Text/H4";
import Text from "../../Common/Text/Text";

import arabianPalace from "../../../img/palace-entrance.jpg";
import palaceGardens from "../../../img/arabian-palace.png";
import indoorPool from "../../../img/indoor-pool.jpeg";
import yatch from "../../../img/yatch-splash.jpg";

import "./accordeon.scss";

class Accordeon extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
       activeTab: '0'
     };
  }

  setTabActive = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { isRTL, lang } = this.props;

    return (
      <div className="accordeon">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <div className="accordeon__tab">
                <div className="accordeon__tab-image" style={{ backgroundImage: `url(${arabianPalace})`}}></div>
              </div>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="0" style={{ borderTop: "1px solid grey", backgroundColor: this.state.activeTab === '0' ? "#8C816B" : "#202121" }} onClick={() => this.setTabActive('0')}>
              <div className="accordeon__tab-action">
                <H4 lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? '1001 ليال عربية تشعر بالفخم' : '1001 Arabian nights palatial feel'}
                </H4>
                <Text lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? 'تنغمس في الثراء مهيب من الحلم العربي' : 'Indulge in the majestic opulence of an Arabian dream'}
                </Text>
              </div>
            </Accordion.Toggle>
          </Card>
          <Card>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="accordeon__tab">
                  <div className="accordeon__tab-image" style={{ backgroundImage: `url(${palaceGardens})`}}></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="1" style={{ backgroundColor: this.state.activeTab === '1' ? "#8C816B" : "#202121" }} onClick={() => this.setTabActive('1')}>
              <div className="accordeon__tab-action">
                <H4 lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? '40 هكتارا من الحدائق الجميلة' : '40 hectares of beautiful gardens'}
                </H4>
                <Text lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? 'مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة' : 'Uniquely landscaped with exotic flora and fauna'}
                </Text>
              </div>
            </Accordion.Toggle>
          </Card>
          <Card>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div className="accordeon__tab">
                  <div className="accordeon__tab-image" style={{ backgroundImage: `url(${indoorPool})`}}></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="2" style={{ backgroundColor: this.state.activeTab === '2' ? "#8C816B" : "#202121" }} onClick={() => this.setTabActive('2')}>
              <div className="accordeon__tab-action">
                <H4 lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? '3 كيلومترات من الممرات المائية المتعرجة' : '3km of winding waterways'}
                </H4>
                <Text lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? 'مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة' : 'Uniquely landscaped with exotic flora and fauna'}
                </Text>
              </div>
            </Accordion.Toggle>
          </Card>
          <Card>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div className="accordeon__tab">
                  <div className="accordeon__tab-image" style={{ backgroundImage: `url(${yatch})`}}></div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} eventKey="3" style={{ backgroundColor: this.state.activeTab === '3' ? "#8C816B" : "#202121" }} onClick={() => this.setTabActive('3')}>
              <div className="accordeon__tab-action">
                <H4 lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? '2km من الشاطئ الخاص الحصري' : '2km of exclusive private beach'}
                </H4>
                <Text lang={lang === 'AR' ? 'arabic' : undefined}>
                  {lang === 'AR' ? 'مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة' : 'Uniquely landscaped with exotic flora and fauna'}
                </Text>
              </div>
            </Accordion.Toggle>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Accordeon;
