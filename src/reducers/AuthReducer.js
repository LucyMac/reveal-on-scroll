import {
  AUTH
} from '../constants/ActionTypes';

const AuthReducer = (
  state = {
    networkState: 'fresh',
    details: null,
    roles: null,
    adminData: null,
  },
  action
) => {
  switch (action.type) {
    case AUTH.FETCH_AUTH_CREDENTIALS:
      return Object.assign({}, state, { networkState: 'fetching' });
    case AUTH.FETCH_AUTH_CREDENTIALS_SUCCESS:
      return Object.assign({}, state, { details: action.payload.data });
    case AUTH.FETCH_AUTH_ROLES:
      return Object.assign({}, state, { networkState: 'fetching' });
    case AUTH.FETCH_AUTH_ROLES_SUCCESS:
      return Object.assign({}, state, { roles: action.payload.data });
    case AUTH.FETCH_AUTH_ROLES_FAIL:
      return Object.assign({}, state, {
        fetching: false,
        networkState: 'error',
      });
    case AUTH.SET_ADMIN_DATA:
      return Object.assign({}, state, { adminData: action.payload.adminData });
    default:
      return state;
  }
};

export default AuthReducer;
