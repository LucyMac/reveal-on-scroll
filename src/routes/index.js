import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { LastLocationProvider } from 'react-router-last-location';

// --- Auth Routes ---
import LoginRoute from './LoginRoute';
import CallbackRoute from './CallbackRoute';

// --- App Routes ---
// import DashboardRoute from './DashboardRoute';

import RouteFactory from './RouteFactory'

import { history } from '../store/configureStore';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: null,
      roles: props.roles,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ roles: nextProps.roles });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const auth = localStorage.getItem('auth') || null;
    this.setState({ auth });

    if (!this.state.roles && auth !== null) {
      // dispatch(getAuthACL());
    }
  }

  render() {
    const { dispatch, store } = this.props;
    const { auth } = this.state;
    const { privateRouteList } = new RouteFactory(this.props.store)
    
    return (
      <Router history={history}>
        <LastLocationProvider>
          <React.Fragment>
            {/* ---- Auth Routes ---- */}
            <Route
              exact
              path="/"
              render={() => {
                if (!auth) {
                  return <Redirect to="/" />;
                }

                return <Redirect to="/" />;
              }}
            />
            <Route exact path="/login" component={LoginRoute} store={store} />
            <Route
              exact
              path="/callback"
              render={props => (
                <CallbackRoute
                  {...props}
                  next={props}
                  dispatch={dispatch}
                  store={store}
                />
              )}
            />

            {/* ---- Private Routes ---- */}
            <Switch>
              {privateRouteList}
            </Switch>
            
          </React.Fragment>
        </LastLocationProvider>
      </Router>
    );
  }
}

Routes.propTypes = {
  auth: PropTypes.objectOf(Object),
  store: PropTypes.objectOf(Object).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth.authCred || null,
});

export default connect(mapStateToProps)(Routes);
