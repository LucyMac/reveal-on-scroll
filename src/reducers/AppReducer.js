import { LOCATION_CHANGE } from 'react-router-redux';
import { get } from 'lodash';
import { APP } from '../constants/ActionTypes';

/**
 * Actions
 */
const {
  TOGGLE_NAV_OVERLAY,
  SET_NAV_REGION,
  SET_NAV_COUNTRY,
} = APP;

const AppReducer = (
  state = {
    showNavOverlay: false,
    prevPath: null,
    navRegion: null,
    navCountry: null
  },
  action
) => {
  switch (action.type) {

    case TOGGLE_NAV_OVERLAY:
    // const { data } = action.payload;
      return Object.assign({}, state, {
        showNavOverlay: get(action, 'payload.showNavOverlay'),

      });

    case SET_NAV_REGION:
    // const { data } = action.payload;
      return Object.assign({}, state, {
        navRegion: get(action, 'payload.navRegion'),
      });

    case SET_NAV_COUNTRY:
    // const { data } = action.payload;
      return Object.assign({}, state, {
        navCountry: get(action, 'payload.navCountry'),
      });

    // case LOCATION_CHANGE:
    //   return Object.assign({}, state, {
    //     prevPath: get(action, 'payload.pathname'),
    //   });


    default:
      return state;
  }
};

export default AppReducer;
