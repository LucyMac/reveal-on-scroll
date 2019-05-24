import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BaseRoute from './BaseRoute';
import DashboardContainer from '../containers/DashboardContainer';

const title = 'Dashboard';

const DashboardRoute = ({ history, match }) => (
  <BaseRoute
    component={DashboardContainer}
    history={history}
    match={match}
    title={title}
  />
);

DashboardRoute.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
  match: PropTypes.objectOf(Object).isRequired,
};

export default connect()(DashboardRoute);
