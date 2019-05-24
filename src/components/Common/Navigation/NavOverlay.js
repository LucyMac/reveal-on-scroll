import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { debounce } from "lodash";
import { Container, Row, Col } from "react-bootstrap";

import { 
  setNavRegion,
  setNavCountry
} from "../../../actions/app";

import GlobalNav from '../Navigation/GlobalNav';

import H4 from '../Text/H4';
import H5 from '../Text/H5';
import Subheading from '../Text/Subheading';
import MoreLink from '../Link/MoreLink';

import dubaiIconic from "../../../img/dubai-iconic.jpg";
import fineDining from "../../../img/fine-dining.jpeg";
import feetSpa from "../../../img/feet-spa.jpeg";
import wedding from "../../../img/wedding-hands.JPG";
// stay / hotel
import stayBackground from "../../../img/parasol-pool.jpg";
// Asia
import asiaBackground from "../../../img/chinese-lanterns.png"; //
import shanghaiBackground from "../../../img/shanghai.jpg";
// Europe
import europeBackground from "../../../img/london-bridge.jpg";
import londonBackground from "../../../img/big-ben.jpg"; //
import frankfurtBackground from "../../../img/frankfurt.jpg";
// ME
import meBackground from "../../../img/dubai-palmtree.jpg"; //
import abuBackground from "../../../img/desert-rally.png";


import "./nav.scss";

class NavOverlay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: null,
      indexOfRegionSelected: null,
      selectedCountry: null,
      indexOfCountrySelected: null,
    };
  }

    /**
   * Update data
   *
   * @memberof NavOverlay
   */
  componentDidUpdate(prevProps) {
    this.debouncedUpdate(prevProps);
  }

  debouncedUpdate = debounce((prevProps) => {
    this.update(prevProps);
  }, 200);

  update = (prevProps) => {
    if ((this.props.showNavOverlay !== prevProps.showNavOverlay) && !this.props.showNavOverlay) {
      console.log('reset state');
      this.resetState();
    }
    if (this.props.navType !== prevProps.navType) {
      console.log('reset state');
      this.resetState();
    }
  }

  resetState = () => {
    this.props.setNavRegion(null);
    this.props.setNavCountry(null);
    this.setState({ 
      selectedRegion: null,
      indexOfRegionSelected: null,
      selectedCountry: null,
      indexOfCountrySelected: null,
    })
  }

  selectRegion = (region, index) => {
    this.props.setNavRegion(region);
    this.setState({ 
      selectedRegion: region,
      indexOfRegionSelected: index,
      selectedCountry: null,
      indexOfCountrySelected: null,
    })
  }

  selectCountry = (country, index) => {
    this.props.setNavCountry(country);
    this.setState({ 
      selectedCountry: country,
      indexOfCountrySelected: index
    })
  }

  closeOverlay = () => {
    console.log('closing');
    this.props.closeOverlay();
    this.resetState();
  }

  render() {

    const regions = this.props.data.regions.map(region => Object.keys(region));

    const countries = 
    this.state.selectedRegion && 
      this.props.data.regions[this.state.indexOfRegionSelected][this.state.selectedRegion];

    const places = 
    this.props.navRegion && this.state.selectedRegion && this.state.selectedCountry &&
      Object.values(this.state.selectedCountry);

    const isMobileView = window.innerWidth < 992;

    // Nav overlay background image change on hover
    let overlayBackground = dubaiIconic;

      if (this.props.navCountry) {
        if (this.props.navCountry['China']) {
          overlayBackground = shanghaiBackground;
        } else if (this.props.navCountry['United Kingdom']) {
          overlayBackground = londonBackground;
        } else if (this.props.navCountry['Germany']) {
          overlayBackground = frankfurtBackground;
        } else if (this.props.navCountry['Dubai']) {
          overlayBackground = dubaiIconic;
        } else if (this.props.navCountry['Abu Dhabi']) {
          overlayBackground = abuBackground;
        }
      } else if (this.props.navRegion) {
        if (this.props.navRegion[0] === 'Asia') {
          overlayBackground = asiaBackground;
        } else if (this.props.navRegion[0] === 'Europe') {
          overlayBackground = europeBackground;
        } else if (this.props.navRegion[0] === 'Middle East') {
          overlayBackground = meBackground;
        }
      } else if (this.props.navSection) {
        if (this.props.navSection === 'hotels') {
          overlayBackground = stayBackground;
        } else if (this.props.navSection === 'restaurants') {
          overlayBackground = fineDining;
        } else if (this.props.navSection === 'spas') {
          overlayBackground = feetSpa;
        } else if (this.props.navSection === 'events') {
          overlayBackground = wedding;
        }
      }

    const { lang, isRTL } = this.props;

    return (
      <div 
        className={cx('nav__overlay', {'rtl': this.props.isRTL})}
        style={{ 
          backgroundImage: `url(${overlayBackground})`, 
          opacity: this.props.showNavOverlay && "1" 
        }}>
        <div className="nav__overlay-wrapper">
          <div className="nav__overlay-colour"></div>

          <section className="nav__overlay-content">
            <Container fluid={false}>
              <Row>
                <Col xs="12">
                  <div className="nav__overlay-main">

                    <ReactCSSTransitionGroup
                      transitionName="nav__overlay-animation"
                      transitionEnterTimeout={400}
                      transitionLeaveTimeout={0}
                    >
                    {isMobileView &&
                      <GlobalNav 
                        mobileMode={true}
                        navSection={this.props.navSection}
                        navType={this.props.navType}
                        saveNavType={this.props.saveNavType}
                        isRTL={isRTL}
                        lang={lang} />
                    }
                    </ReactCSSTransitionGroup>

                    <ReactCSSTransitionGroup
                      transitionName="nav__overlay-animation"
                      transitionEnterTimeout={400}
                      transitionLeaveTimeout={100}
                    >
                      {this.props.navType === 'events' &&
                        <div
                          className={cx('filter-column filter-column--wide', {'filter-column--rtl': isRTL})}
                          onClick={this.props.closeOverlay} key={0}>
                          {lang === 'AR' ? 
                            <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                            : <MoreLink className="pb-5">View all meetings & events</MoreLink>}
                          {this.props.data.events.map((event, i) => {
                            return (
                              <NavLink to={`/${lang}/weddings`}>
                                <H4 colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} className="pb-2">{event}</H4>
                              </NavLink>
                            )
                          })}
                        </div>
                      }
                    </ReactCSSTransitionGroup>

                    <ReactCSSTransitionGroup
                      transitionName="nav__overlay-animation"
                      transitionEnterTimeout={400}
                      transitionLeaveTimeout={100}
                    >
                      {this.props.navType === 'regions' &&
                        <React.Fragment>
                          { !isMobileView &&
                            <div className={cx('filter-column', {'filter-column--rtl': this.props.isRTL})} key={1}>
                              {lang === 'AR' ? 
                                <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                                : <MoreLink className="pb-5">View all {this.props.navSection}</MoreLink>}
                              {regions.map((region, i) => <H4 colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} onMouseEnter={() => this.selectRegion(region, i)} className="pb-2">{region}</H4>)}
                            </div>
                          }
                          { isMobileView && !this.props.navRegion &&
                            <div className={cx('filter-column', {'filter-column--rtl': this.props.isRTL})} key={1}>
                              {lang === 'AR' ? 
                                <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                                : <MoreLink className="pb-5">View all {this.props.navSection}</MoreLink>}
                              {regions.map((region, i) => <H4 key={`country-${i}`} colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} onClick={() => this.selectRegion(region, i)} className="pb-2">{region}</H4>)}
                            </div>
                          }

                          <ReactCSSTransitionGroup
                            transitionName="nav__overlay-animation"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={100}
                          >
                            {this.props.navRegion && (!isMobileView) &&
                              <div className={cx('filter-column', {'filter-column--rtl': this.props.isRTL})} key={2}>
                              {lang === 'AR' ? 
                                <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                                : <MoreLink className="pb-5">View {this.props.navSection} in {this.state.selectedRegion}</MoreLink>}
                                  {countries && countries.map((country, i) => {
                                    return (
                                      <H4 key={`country-${i}`} colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} onMouseEnter={() => this.selectCountry(country, i)} className="pb-2">{Object.keys(country)}</H4>
                                    )
                                  }
                                  )}
                              </div>
                            }
                            {this.props.navRegion && (isMobileView && !this.props.navCountry) &&
                              <div className={cx('filter-column', {'filter-column--rtl': this.props.isRTL})} key={2}>
                              {lang === 'AR' ? 
                                <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                                : <MoreLink className="pb-5">View {this.props.navSection} in {this.state.selectedRegion}</MoreLink>}
                                  {countries && countries.map((country, i) => {
                                    return (
                                      <H4 key={`country-${i}`} colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} onClick={() => this.selectCountry(country, i)} className="pb-2">{Object.keys(country)}</H4>
                                    )
                                  }
                                  )}
                              </div>
                            }
                          </ReactCSSTransitionGroup>

                          <ReactCSSTransitionGroup
                            transitionName="nav__overlay-animation"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={100}
                          >
                            {this.props.navCountry &&
                              <div className={cx('filter-column filter-column--wide', {'filter-column--rtl': this.props.isRTL})} key={3} onClick={this.props.closeOverlay}>
                                {this.state.selectedCountry && lang === 'AR' &&
                                  <MoreLink className="pb-5" lang="arabic">عرض الكل</MoreLink>
                                }
                                {this.state.selectedCountry && lang !== 'AR' &&
                                  <MoreLink className="pb-5">View {this.props.navSection} in {Object.keys(this.state.selectedCountry)}</MoreLink>
                                }

                                {places && places.map((place, i) => {
                                  return (
                                    <React.Fragment key={`place-${i}`}>
                                      {Object.values(place).map((location, i) => {
                                        return (
                                          <React.Fragment>
                                            <Subheading colour="grey" lang={lang === 'AR' ? 'arabic' : undefined} className="pt-5 pb-2 no-hover">{Object.keys(location)}</Subheading>
                                            {Object.values(location).map((hotels, i) => {
                                              return (
                                                <React.Fragment key={`location-${i}`}>
                                                {hotels.map((hotel, i) => {
                                                  return (
                                                    <NavLink to={`/${lang}/stay/123`} key={`hotel-${i}`}>
                                                      <H5 className="pb-2" lang={lang === 'AR' ? 'arabic' : undefined}>{hotel}</H5>
                                                    </NavLink>
                                                  )
                                                })}
                                                </React.Fragment>
                                              )
                                            })}
                                          </React.Fragment>
                                        )

                                      })}
                                    </React.Fragment>
                                  )
                                })}
                              </div>
                            }
                          </ReactCSSTransitionGroup>
                        </React.Fragment>
                      }
                    </ReactCSSTransitionGroup>

                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className={cx('nav__overlay-secondary', {'nav__overlay-secondary--rtl': this.props.isRTL})}>
            <Container fluid={false}>
              <Row>
                <Col xs="12" sm={{offset: 1, span: 10}}>
                  <H4 className="pb-3" lang={lang === 'AR' ? 'arabic' : undefined}>
                    {lang === 'AR' ? 'تحتاج الإلهام؟' : 'Need inspiration?'}
                  </H4>
                  <div className="nav__inspiration-grid">
                    <div className="nav__inspiration-grid-item"></div>
                    <div className="nav__inspiration-grid-item"></div>
                    <div className="nav__inspiration-grid-item"></div>
                    <div className="nav__inspiration-grid-item"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }
};

NavOverlay.propTypes = {
  children: PropTypes.node,
  video: PropTypes.bool,
  withNav: PropTypes.bool,
};

NavOverlay.defaultProps = {
  video: true,
};

const mapStateToProps = state => ({
  navRegion: state.app.navRegion,
  navCountry: state.app.navCountry,
});

export default connect(
  mapStateToProps,
  {
    setNavRegion,
    setNavCountry,
  }
)(NavOverlay);
