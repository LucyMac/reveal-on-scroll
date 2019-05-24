
import { APP } from '../constants/ActionTypes'

/**
 * Toggles the fullwidth nav overlay
 *
 * @param {Boolean} showNavOverlay 
 */
export const toggleNavOverlay = (showNavOverlay) => {
  return {
    type: APP.TOGGLE_NAV_OVERLAY,
    payload: {
      showNavOverlay
    },
  }
};

/**
 * Sets region or country selected in nav
 */
export const setNavRegion = (region) => {
  console.log('region set:', region);
  return {
    type: APP.SET_NAV_REGION,
    payload: {
      navRegion: region
    },
  }
};

/**
 * Sets region or country selected in nav
 */
export const setNavCountry = (country) => {
  console.log('country set:', country);
  return {
    type: APP.SET_NAV_COUNTRY,
    payload: {
      navCountry: country
    },
  }
};