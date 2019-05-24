
import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";

import SectionHeader from "../../Common/Header/sectionHeader";
import CarouselContained from "../../Common/Carousel/CarouselContained";

import H4 from "../../Common/Text/H4";
import Text from "../../Common/Text/Text";

import arabianPalace from "../../../img/arabian-palace.png";
import indoorPool from "../../../img/indoor-pool.jpeg";

import "./tabs.scss";

class Tabs extends React.Component {
  render() {
    const { isRTL, lang } = this.props;

    const tabActionContent = {
      "EN": [
        {
          header: "1001 Arabian nights palatial feel",
          description: "Indulge in the majestic opulence of an Arabian dream",
        },
        {
          header: "40 hectares of beautiful gardens",
          description: "Uniquely landscaped with exotic flora and fauna",
        },
        {
          header: "3km of winding waterways",
          description: "Uniquely landscaped with exotic flora and fauna",
        },
        {
          header: "2km of exclusive private beach",
          description: "Uniquely landscaped with exotic flora and fauna",
        },
      ],
      "AR": [
        {
          header: "1001 ليال عربية تشعر بالفخم",
          description: "تنغمس في الثراء مهيب من الحلم العربي",
        },
        {
          header: "40 هكتارا من الحدائق الجميلة",
          description: "مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة",
        },
        {
          header: "3 كيلومترات من الممرات المائية المتعرجة",
          description: "مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة",
        },
        {
          header: "2km من الشاطئ الخاص الحصري",
          description: "مناظر طبيعية فريدة من نوعها مع النباتات والحيوانات الغريبة",
        },
      ]
    };

    const settings = {

      customPaging: function(i) {
        return (
          <a>
            <div className="tabs__tab-action">
              <H4 lang={lang === 'AR' ? 'arabic' : undefined}>{tabActionContent[lang][i].header}</H4>
              <Text lang={lang === 'AR' ? 'arabic' : undefined}>{tabActionContent[lang][i].description}</Text>
            </div>
          </a>
        );
      },
      // dots: false,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: null,
      prevArrow: null,
    };

    return (
      <div className="tabs">
        <Slider {...settings}>
          <div className="tabs__tab">
            <div className="tabs__tab-image" style={{ backgroundImage: `url(${arabianPalace})`}}></div>
          </div>
          <div className="tabs__tab">
            <div className="tabs__tab-image" style={{ backgroundImage: `url(${arabianPalace})`}}></div>
          </div>
          <div className="tabs__tab">
            <div className="tabs__tab-image" style={{ backgroundImage: `url(${indoorPool})`}}></div>
          </div>
          <div className="tabs__tab">
            <div className="tabs__tab-image" style={{ backgroundImage: `url(${arabianPalace})`}}></div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Tabs;
