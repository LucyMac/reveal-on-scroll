import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { store } from '../store/configureStore';

import Routes from '../routes';

class App extends Component {
  /**
   * Optionally load Auth0 Credentials from server
   * based on the environment
   *
   * @memberof App
   */
  componentWillMount() {

  }


  render() {
    return (
      <Fragment>
        <Helmet titleTemplate="">
          <html lang="en" />
          <title />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta http-equiv="Content-Security-Policy" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <React.Fragment>
          <Routes {...this.props} store={store} />
        </React.Fragment>
      </Fragment>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(App);
