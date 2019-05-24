import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Container, Row, Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

import { toggleNavOverlay } from "../../../actions/app";

import closeIcon from "../../../img/icons/close.svg";

import "./nav.scss";


export class DetailNav extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  /**
   * Fetch data from the API
   *
   * @memberof DetailNav
   */
  componentDidMount() {
    // const { getData } = this.props;
    
    // getData();
  }


  render() {

  const { pageLoaded, isRTL, lang } = this.props;

    return (
      <nav className={cx('nav nav--detail d-flex justify-content-md-center', {'rtl': isRTL})}>
        <div className="nav--secondary d-flex align-items-center">
          {pageLoaded && 
            <Scrollspy 
              className="nav__anchors d-flex flex-row align-items-center" 
              items={ ['promo', 'highlights', 'rooms', 'activities', 'inspiration'] } 
              currentClassName="nav__anchor-item--active">
                <li className={cx('nav__anchor-item', {'arabic-sans': lang === 'AR'})}>
                  <a href="#promo">
                    {lang === 'AR' ? 'عروض' : 'Offers'}
                  </a>
                </li>
                <li className={cx('nav__anchor-item', {'arabic-sans': lang === 'AR'})}>
                  <a href="#highlights">
                    {lang === 'AR' ? 'يسلط الضوء' : 'Highlights'}
                  </a>
                </li>
                <li className={cx('nav__anchor-item', {'arabic-sans': lang === 'AR'})}>
                  <a href="#rooms">
                    {lang === 'AR' ? 'غرف' : 'Rooms'}
                  </a>
                </li>
                <li className={cx('nav__anchor-item', {'arabic-sans': lang === 'AR'})}>
                  <a href="#activities">
                    {lang === 'AR' ? 'أنشطة' : 'Activities'}
                  </a>
                </li>
                <li className={cx('nav__anchor-item', {'arabic-sans': lang === 'AR'})}>
                  <a href="#inspiration">
                    {lang === 'AR' ? 'وحي' : 'Inspiration'}
                  </a>
                </li>
            </Scrollspy>
          }
        </div>
      </nav>
    );
  }
}

DetailNav.propTypes = {
  mobileMode: PropTypes.bool
};

DetailNav.defaultProps = {
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
)(DetailNav);