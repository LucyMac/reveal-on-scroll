import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Auth from '../common/Auth';

class CallbackRoute extends Component {
  auth = new Auth();

  componentWillReceiveProps(props) {
    // Check auth is not already set otherwise redirect death happens
    const auth = localStorage.getItem('auth') || null;
    const redirect = localStorage.getItem('redirect') || null;

    // Once auth details have been retrieved and changed enable login
    if (props.auth0 !== null && auth === null) {
      this.auth.setAuthDetails(props.auth0);
      this.handleAuthentication(this.props.next);
    }

    if (props.roles && auth !== null) {
      if (redirect) {
        this.props.history.push(redirect);
        localStorage.removeItem('redirect');
        return;
      }

      // Change redirect location based on ACL role
      this.props.history.push('/dashboard');
    }
  }

  handleAuthentication(nextState) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication(this.props.history, this.props.dispatch);
    }
  }

  render() {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

CallbackRoute.propTypes = {
  auth0: PropTypes.objectOf(Object),
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth0: state.auth.details || null,
  roles: state.auth.roles || null,
});

export default connect(mapStateToProps)(CallbackRoute);
