import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

class BaseRoute extends Component {
  /**
   * Logout
   *
   * @memberof BaseRoute
   */
  logout() {
    localStorage.removeItem('auth');
    this.props.history.push('/login');
  }

  render() {
    const {
      component,
      title,
      history,
      match
    } = this.props;

    const RouteComponent = component;

    return (
      <div style={{ width: '100%', height: '100vh', overflowY: 'scroll', overflowX: 'hidden', minWidth: 320, backgroundColor: '#202121', paddingBottom: '100px' }}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <RouteComponent history={history} match={match} title={title} />
      </div>
    );
  }
}

BaseRoute.propTypes = {
  component: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
  match: PropTypes.objectOf(Object).isRequired,
  title: PropTypes.string,
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  {
  }
)(BaseRoute);
