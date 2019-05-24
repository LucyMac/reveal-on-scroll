import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import BaseRoute from './BaseRoute';
import allContainers from '../containers'

export default class RouteFactory {
  privateRouteList = []

  constructor(store) {
    this.store = store

    Object.keys(allContainers).forEach(name => {
      this.buildRoute(name)
    })
  }

  buildUrl = (container, name) => {
    let url = ''
    switch(container) {
      case 'default': 
        url = `/:lang/${name}/`
        break;
      case 'view': 
        url = `/:lang/${name}/:item`
        break;
      case 'book': 
        url = `/:lang/${name}/:item/book`
        break;
      case 'edit': 
        url = `/:lang/${name}/:item/edit`
        break;
      default: 
        url = `/:lang/${name}/`
        break;
    }

    return url
  }

  buildRoute = name => {
    const store = this.store

    Object.keys(allContainers[name].containers).forEach((container, index) => {
      let path = this.buildUrl(container, name)

      const DefinedRoute = ({ history, match }) => (
        <BaseRoute
          component={allContainers[name].containers[container]}
          history={history}
          match={match}
          title={allContainers[name].title}
        />
      );
      DefinedRoute.propTypes = {
        history: PropTypes.objectOf(Object).isRequired,
        match: PropTypes.objectOf(Object).isRequired,
      };
      
      this.privateRouteList.push(
        <PrivateRoute
          exact
          path={path}
          component={connect()(DefinedRoute)}
          store={store}
          key={`${name}-${index}`}
        />
      )
    })

  }
}