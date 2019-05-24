import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Container, Row, Col } from 'react-bootstrap';

import { toggleNavOverlay } from "../../../actions/app";

import searchIcon from "../../../img/icons/search.svg";

import "./nav.scss";


export class GlobalNav extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  /**
   * Fetch data from the API
   *
   * @memberof GlobalNav
   */
  componentDidMount() {
    // const { getData } = this.props;
    
    // getData();
  }

  openOverlay = (section, type) => {

    console.log('openOverlay / section', section, 'type', type);

    this.props.saveNavType(section, type);

    setTimeout(() => {
      this.props.toggleNavOverlay(true);
    },300);
  }

  render() {

  const {showNavOverlay, collapseGlobalNav, mobileMode, navSection, lang} = this.props;

    return (
      <nav className="nav nav--global">
        <div className="nav--primary d-flex justify-content-end justify-content-lg-between">
          <div className="cluster1 d-flex align-items-md-center">
            {mobileMode && !navSection &&
              <ul className="nav__links d-flex flex-column align-items-start">
                <li className={cx('nav__link-item', {'arabic-cursive': lang === 'AR'})}
                  onClick={() => this.openOverlay('hotels', 'regions')} 
                  style={{color: navSection === 'hotels' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'البقاء' : 'Stay'}
                </li>
                <li className={cx('nav__link-item', {'arabic-cursive': lang === 'AR'})}
                  onClick={() => this.openOverlay('restaurants', 'regions')} 
                  style={{color: navSection === 'restaurants' ? '#8C816B': 'white'}}
                >
                  {lang === 'AR' ? 'تناول الطعام' : 'Dine'}
                </li>
                <li className={cx('nav__link-item', {'arabic-cursive': lang === 'AR'})}
                  onClick={() => this.openOverlay('spas', 'regions')} 
                  style={{color: navSection === 'spas' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'ريجوفيناتي' : 'Rejuvinate'}
                </li>
                <li className={cx('nav__link-item', {'arabic-cursive': lang === 'AR'})}
                  onClick={() => this.openOverlay('events', 'events')} 
                  style={{color: navSection === 'events' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'يجتمع' : 'Meet'}
                </li>
                <li className={cx('nav__link-item', {'arabic-cursive': lang === 'AR'})}
                  onClick={() => this.openOverlay('offers', 'offers')} 
                  style={{color: navSection === 'offers' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'عروض' : 'Offers'}
                </li>
              </ul>
            }
            {!mobileMode && (showNavOverlay || !collapseGlobalNav) &&
              <ul className="nav__links d-flex">
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}
                  onClick={() => this.openOverlay('hotels', 'regions')} 
                  style={{color: navSection === 'hotels' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'البقاء' : 'Stay'}
                </li>
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}
                  onClick={() => this.openOverlay('restaurants', 'regions')} 
                  style={{color: navSection === 'restaurants' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'تناول الطعام' : 'Dine'}
                </li>
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}
                  onClick={() => this.openOverlay('spas', 'regions')} 
                  style={{color: navSection === 'spas' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'ريجوفيناتي' : 'Rejuvinate'}
                </li>
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}
                  onClick={() => this.openOverlay('events', 'events')} 
                  style={{color: navSection === 'events' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'يجتمع' : 'Meet'}
                </li>
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}
                  onClick={() => this.openOverlay('offers', 'offers')} 
                  style={{color: navSection === 'offers' ? '#8C816B': 'white'}}
                >
                    {lang === 'AR' ? 'عروض' : 'Offers'}
                </li>
                <li className={cx('nav__link-item nav__link-item--search', {'arabic-sans': lang === 'AR'})}>
                  <p className={cx('header__menu-label nav__link-item--search-label', {'arabic-sans': lang === 'AR'})}>
                    {lang === 'AR' ? 'بحث' : 'SEARCH'}
                  </p>
                  <div className="header__icon header__icon--search nav__link-item--search-icon"
                    style={{backgroundImage: `url(${searchIcon})`}}></div>
                </li>
              </ul>
            }

          </div>
          {!mobileMode && !showNavOverlay &&
            <div className="cluster2 d-flex align-items-center">
              <div className="button-wrapper">
                <button className={cx('button button--primary', {'arabic-sans': lang === 'AR'})}>
                  {lang === 'AR' ? 'احجز الآن' : 'book now'}
                </button>
              </div>
              <ul className="nav__links d-none d-xl-flex p-0">
                <li className={cx('nav__link-item', {'arabic-sans': lang === 'AR'})}>
                  {lang === 'AR' ? 'سيريوس تسجيل الدخول' : 'Sirius Log in'}
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
    );
  }
}

GlobalNav.propTypes = {
  mobileMode: PropTypes.bool
};

GlobalNav.defaultProps = {
  mobileMode: false
};

const mapStateToProps = state => ({
  // showNavOverlay: state.app.showNavOverlay
});

export default connect(
  mapStateToProps,
  {
    toggleNavOverlay
  }
)(GlobalNav);