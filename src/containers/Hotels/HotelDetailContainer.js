import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";

import Wrap from "../../components/Common/Layout/Wrap";
import Header from "../../components/Common/Header";
import Background from "../../components/Common/Background";

//  Animations
import Parallax from "../../components/Common/Parallax";
import ParallaxBackground from "../../components/Common/ParallaxBackground";
import Fade from "../../components/Common/Fade";
import FadeOut from "../../components/Common/FadeOut";

import Hero from "../../components/Hotel/Hero";
import Promo from "../../components/Hotel/Promo";
import Reviews from "../../components/Hotel/Reviews";
import Highlights from "../../components/Hotel/Highlights";
import Rooms from "../../components/Hotel/Rooms";
import Inspiration from "../../components/Hotel/Inspiration";
import Activities from "../../components/Hotel/Activities";

import backgroundImg from "../../img/hotel_detail_hero.png";
import videoPoster from "../../img/video-poster.png";
import backgroundVideo from "../../img/video_homepage_your-palace-awaits.mp4";

import courtyard from "../../img/courtyard.jpg";
import lady from "../../img/lady-in-room.png";
import parasol from "../../img/parasol-pool.jpg";

export class HotelDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: false,
      isRTL: this.props.match.params.lang === 'AR'
    };
  }

  /**
   * Fetch data from the API
   *
   * @memberof HotelDetailContainer
   */
  componentDidMount() {
    document.getElementById("hero-video").play();

    this.setState({ pageLoaded: true });
  }

  render() {
    return (
      <Wrap>
        <Header
          showNavOverlay={this.props.showNavOverlay}
          collapseGlobalNav={true}
          showAnchorNav={true}
          pageLoaded={this.state.pageLoaded}
          lang={this.props.match.params.lang}
          isRTL={this.state.isRTL}
        />

        <FadeOut isRTL={this.props.isRTL} lang={this.props.lang} identifier="hero">
          {this.props.match.params.lang === 'EN' &&
            <Hero
              video={true}
              backgroundVideo={backgroundVideo}
              videoPoster={videoPoster}
              backgroundImg={backgroundImg}
              subheading="hotel region"
              heading="Luxury hotel name"
              strapline="The holiday of a lifetime"
              isRTL={this.state.isRTL}
              lang={this.props.match.params.lang}
              spacing="none"
            />
          }

          {this.props.match.params.lang === 'AR' &&
            <Hero
              video={true}
              backgroundVideo={backgroundVideo}
              videoPoster={videoPoster}
              backgroundImg={backgroundImg}
              subheading="الإمارات العربية المتحدة"
              heading="جميرا القصر ، دبي"
              strapline="روعة ملكي القصر العربي الخاص بك"
              isRTL={this.state.isRTL}
              lang={this.props.match.params.lang}
              spacing="none"
            />
          }
        </FadeOut>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="promo" offset="100px">
          <Background zIndex="5">
            <Container fluid={true} id="promo">
              <Row noGutters={false}>
                <Col xs="12" lg={{ span: 10, offset: 1 }}>
                  <Promo isRTL={this.state.isRTL} lang={this.props.match.params.lang} />
                </Col>
              </Row>
            </Container>
          </Background>
        </Fade>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="reviews" offset="100px">
          <Parallax background={lady}  height="500px" grayscale={true} circular={true}>
            <Background options={["bleedBottom", "bleedTop"]} darker={true}>
              <Container fluid={true} id="reviews">
                <Row>
                  <Col xs="12" lg={{ span: 10, offset: 1 }}>
                    <Reviews isRTL={this.state.isRTL} lang={this.props.match.params.lang} spacing={["extraTop", "bottom"]} />
                  </Col>
                </Row>
              </Container>
            </Background>
          </Parallax>
        </Fade>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="highlights" offset="0">
          <Background zIndex="5">
            <Container fluid={true} id="highlights">
              <Row>
                <Col xs="12" lg={{ span: 10, offset: 1 }}>
                  <Highlights isRTL={this.state.isRTL} lang={this.props.match.params.lang} />
                </Col>
              </Row>
            </Container>
          </Background>
        </Fade>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="rooms"  offset="200px">
          <Background options={["bleedTop"]} background={parasol} darker={true} cover="topHalf" zIndex="3">
            <Container fluid={true} id="rooms">
              <Row>
                <Rooms isRTL={this.state.isRTL} lang={this.props.match.params.lang} spacing={["extraTop"]} />
              </Row>
            </Container>
          </Background>
        </Fade>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="activities" offset="250px">
          <Background options={["bleedTop"]} background={courtyard} darker={true} cover="topHalf">
            <Container fluid={true} id="activities">
              <Row>
                <Activities isRTL={this.state.isRTL} lang={this.props.match.params.lang} spacing={["extraTop"]} />
              </Row>
            </Container>
          </Background>
        </Fade>

        <Fade isRTL={this.props.isRTL} lang={this.props.lang} identifier="inspiration" offset="100px">
          <Container fluid={true} id="inspiration">
            <Row>
              <Inspiration isRTL={this.state.isRTL} lang={this.props.match.params.lang} />
            </Row>
          </Container>
        </Fade>

      </Wrap>
    );
  }
}

HotelDetailContainer.propTypes = {};

const mapStateToProps = state => ({
  returningUser: false,
  showNavOverlay: state.app.showNavOverlay
});

export default connect(
  mapStateToProps,
  {}
)(HotelDetailContainer);
