// Define axios middleware actionTypes within here

export const CALL_API = 'CALL_API';
export const ERROR_SERVER_THROW = 'ERROR_SERVER_THROW';


/**
 * Abstracts AxiosReactMiddleware calls to single function
 *
 * N.B - AxiosReactMiddleware automatically creates SUCCESS & FAIL actions
 *       That can be picked up by the reducer, so no need to chain these
 *       into the redux actions.
 *
 * @param {String} method - GET | PUT | POST
 * @param {String} type - Creates action to hit reducer, appends _SUCCESS & _FAIL accordingly.
 *                        e.g FETCH_RESOURCES will created FETCH_RESOURCES_SUCCESS etc.
 * @param {*} url
 * @param {*} params
 * @param {String} client - whether our backend api or external which is configured
 */
export function callAPI(method, type, url, params = {}, client='default') {
  return {
    type: type || CALL_API,
    payload: {
      client,
      request: {
        method: method || 'GET',
        url: url,
        params: params.params || undefined,
        data: params.payload || {},
      },
    },
  };
}

/**
 * Throw server error
 *
 * @param {*} error
 */
export function throwServerError(error) {
  return {
    type: ERROR_SERVER_THROW,
    payload: {
      error,
    },
  };
}
