import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Wrap from '../../components/Common/Layout/Wrap';
import Header from '../../components/Common/Header';
import Background from "../../components/Common/Background";
import Spotlight from "../../components/Common/Spotlight";

//  Animations
import Parallax from "../../components/Common/Parallax";
import Fade from "../../components/Common/Fade";

import Hero from '../../components/Hotel/Hero';

import backgroundImg from "../../img/hotel_detail_hero.png";
import dubai from "../../img/dubai-iconic.jpg";
import pool from "../../img/indoor-pool.jpeg";


export class HotelsContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isRTL: this.props.match.params.lang === 'AR'
    };
  }

  /**
   * Fetch data from the API
   *
   * @memberof HotelsContainer
   */
  componentDidMount() {
    // const { getData } = this.props;

    // getData();
  }

  render() {

    return (
      <Wrap>
        <Header 
          showNavOverlay={this.props.showNavOverlay}
          collapseGlobalNav={false}
          showAnchorNav={false} 
          lang={this.props.match.params.lang} 
          isRTL={this.state.isRTL} />

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="hero">

          {this.props.match.params.lang === 'EN' &&
            <Hero
              video={false} 
              backgroundImg={backgroundImg}

              subheading="Hotels & resorts"
              heading="Jumeirah around the world"
              strapline="From Arabian palaces to sumptuous bungalows"
              isRTL={this.state.isRTL}
              lang={this.props.match.params.lang}
              spacing="none"
            />
          }

          {this.props.match.params.lang === 'AR' &&
            <Hero
              video={false} 
              backgroundImg={backgroundImg}

              subheading="الفنادق والمنتجعات"
              heading="جميرا حول العالم"
              strapline="من القصور العربية إلى الأكواخ الفاخرة"
              isRTL={this.state.isRTL}
              lang={this.props.match.params.lang}
              spacing="none"
            />
          }
        </Fade>
  
        <Fade isRTL={this.props.isRTL} lang={this.props.lang}  offset="50px" identifier="module-1">
          <Parallax background={dubai} height="950px" circular={true}  bigShadow={true} extraWide={true}>
            <Spotlight imageAlign="left" />
          </Parallax>
        </Fade>
  
        <Fade isRTL={this.props.isRTL} lang={this.props.lang}  offset="50px" identifier="module-2">
          <Parallax background={pool} height="950px" circular={true} bigShadow={true} extraWide={true}>
            <Spotlight imageAlign="right" />
          </Parallax>
        </Fade>

      </Wrap>
    );
  }

}

HotelsContainer.propTypes = {};

const mapStateToProps = state => ({
  returningUser: false,
  showNavOverlay: state.app.showNavOverlay
});

export default connect(
  mapStateToProps,
  {}
)(HotelsContainer);