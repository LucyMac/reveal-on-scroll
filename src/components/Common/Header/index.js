import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Container, Row, Col } from 'react-bootstrap';

import GlobalNav from '../Navigation/GlobalNav';
import DetailNav from '../Navigation/DetailNav';
import NavOverlay from '../Navigation/NavOverlay';

import PrevArrow from '../Carousel/PrevArrow.js';

import { 
  toggleNavOverlay,
  setNavRegion,
  setNavCountry
} from "../../../actions/app";

import globalDataEN from "./global-nav-EN.json";
import globalDataAR from "./global-nav-AR.json";

import logo from "../../../img/logo-placeholder.png";
import closeIcon from "../../../img/icons/close.svg";
import openIcon from "../../../img/icons/hamburger.svg";
import searchIcon from "../../../img/icons/search.svg";

import './header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navSection: null,
      navType: null,
    };
  }

  /**
   * Fetch data from the API
   *
   * @memberof Header
   */
  componentDidMount() {
    // const { getData } = this.props;
    
    // getData();
  }


  goBack = () => {
    console.log('going back:', 'this.props.navCountry:', this.props.navCountry, 'this.props.navRegion:', this.props.navRegion);

    if (this.props.navCountry) {
      // resetCountry
      this.props.setNavCountry(null);
    } else if (this.props.navRegion) {
      // resetRegion
      this.props.setNavRegion(null);
    } else {
      this.setState({ 
        navSection: null,
        navType: null
      });
    }
  }

  saveNavType = (section, type) => {
    console.log('section', section, 'type', type);
    this.setState({ 
      navSection: section,
      navType: type,
    });
  }

  openOverlay = (type) => {
    this.props.toggleNavOverlay(true);
  }

  closeOverlay = () => {
    console.log('closing');
    this.props.toggleNavOverlay(false);
    this.setState({ 
      navSection: null,
      navType: null,
    });
  }

  render() {
    const { showNavOverlay, collapseGlobalNav, showAnchorNav, pageLoaded, lang, isRTL } = this.props;
  
    const isMobileView = window.innerWidth < 992;

    let menuGridLayout = '140px 320px 1fr';
    // desktop and collapsed Nav 
    if (collapseGlobalNav && !isMobileView & !showNavOverlay) {
      menuGridLayout = '140px 320px 1fr'
      // if (isRTL) {
      //   menuGridLayout = '1fr 320px 140px'
      // } else {
      // } 
    } else {
      menuGridLayout = '110px 1fr 30px'
      // if (isRTL) {
      //   menuGridLayout = '60px 1fr 110px'
      // } else {
      // } 
    }

    return (
      <div className="header" style={{ bottom: showNavOverlay ? '0' : 'auto', height: showNavOverlay ? 'auto' : '150px'}}>

      {showNavOverlay &&
        <NavOverlay 
          showNavOverlay={showNavOverlay}
          closeOverlay={this.closeOverlay}
          navSection={this.state.navSection}
          navType={this.state.navType}
          saveNavType={this.saveNavType}
          data={lang === 'AR' ? globalDataAR : globalDataEN}
          isRTL={isRTL}
          lang={lang} />
      }

        <Container fluid={false}>
          <Row>
            <Col xs="12">
              <div className={cx('header__grid', {'rtl': isRTL && !isMobileView})}
              style={{ gridTemplateColumns: menuGridLayout }}>
                {(isMobileView && showNavOverlay && this.state.navSection) ?
                  <div className="header__back-arrow" onClick={() => this.goBack()}>
                    <PrevArrow />
                  </div>
                  :
                  <div className="header__logo">
                    <img src={logo} alt="logo" />
                  </div>
                }

                {(!showNavOverlay && collapseGlobalNav && !isMobileView) &&
                  <div className="header__nav-shortcut">
                    <div className={cx('header__menu-link', {'arabic-sans': lang === 'AR'})} onClick={() => this.openOverlay()}>
                      <div className="header__icon header__icon--open" 
                        style={{backgroundImage: `url(${openIcon})`}}>
                      </div>
                      <p className={cx('header__menu-label', {'arabic-sans': lang === 'AR'})} >
                        {lang === 'AR' ? 'قائمة طعام' : 'MENU'}
                      </p>
                    </div>
                    <div className={cx('header__menu-search', {'arabic-sans': lang === 'AR'})} >
                      <p className={cx('header__menu-label', {'arabic-sans': lang === 'AR'})} >
                        {lang === 'AR' ? 'بحث' : 'SEARCH'}
                      </p>
                      <div className="header__icon header__icon--search"
                        style={{backgroundImage: `url(${searchIcon})`}}></div>
                    </div>
                  </div>
                }

                {/* Desktop: */}
                {!isMobileView &&
                  <GlobalNav 
                    showNavOverlay={showNavOverlay}
                    collapseGlobalNav={collapseGlobalNav}
                    navSection={this.state.navSection}
                    navType={this.state.navType}
                    saveNavType={this.saveNavType}
                    isRTL={isRTL}
                    lang={lang} />
                }

                {/* Mobile: */}
                {isMobileView &&
                  <div className="header__cta button-wrapper">
                    <button className={cx('button button--primary', {'arabic-sans': lang === 'AR'})}>
                      {lang === 'AR' ? 'احجز الآن' : 'book now'}
                    </button>
                  </div>
                }

                {showNavOverlay ?
                  <div className="header__icon header__icon--close" style={{backgroundImage: `url(${closeIcon})`}} onClick={() => this.closeOverlay()}>
                  </div>
                :
                  <React.Fragment>
                    { isMobileView &&
                      <div className="header__icon header__icon--open" 
                        style={{backgroundImage: `url(${openIcon})`}}
                        onClick={() => this.openOverlay()}>
                      </div>
                    }
                  </React.Fragment>
                }
              </div>
            </Col>

            {showAnchorNav && !showNavOverlay &&
              <Col xs="12">
                <DetailNav pageLoaded={pageLoaded} lang={lang} isRTL={isRTL} />
              </Col>
            }

          </Row>
        </Container>

        {!showNavOverlay && showAnchorNav && <div className="header__anchor-separator"></div>}
      </div>
    );

  }
}

Header.propTypes = {
  children: PropTypes.node,
  showNavOverlay: PropTypes.bool,
}

const mapStateToProps = state => ({
  globalOptions: globalDataEN,
  navRegion: state.app.navRegion,
  navCountry: state.app.navCountry,
});

export default connect(
  mapStateToProps,
  {
    toggleNavOverlay,
    setNavRegion,
    setNavCountry,
  }
)(Header);
