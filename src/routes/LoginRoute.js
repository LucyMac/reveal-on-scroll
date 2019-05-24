import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { withLastLocation } from 'react-router-last-location';
import { get } from 'lodash';

import Auth from '../common/Auth';

class LoginRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Store redirect cookie
    const path = get(this.props, 'lastLocation.state.from.pathname');
    if (path && path !== '/') {
      localStorage.removeItem('redirect');
      localStorage.setItem('redirect', path);
    }

    if (this.props.auth0 !== null) {
      this.authLogin(this.props.auth0);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Once auth details have been retrieved and changed enable login
    if (nextProps.auth0 !== null) {
      this.authLogin(nextProps.auth0);
    }
  }

  authLogin(details) {
    const auth = new Auth();
    localStorage.removeItem('auth');

    auth.setAuthDetails(details);
    auth.login();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div style={{ height: '100vh', position: 'relative', width: '100%' }}>
          ...Loading
        </div>
      </div>
    );
  }
}

LoginRoute.propTypes = {
  auth0: PropTypes.objectOf(Object),
};

const mapStateToProps = state => ({
  auth0: state.auth.details || null,
});

export default withLastLocation(connect(mapStateToProps)(LoginRoute));
