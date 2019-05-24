import { callAPI } from '../common/apiMiddleware';

import { CLIENTS } from '../constants/ActionTypes'

/**
 * Retrieves a list of clients
 * 
 * @param {*} offset 
 * @param {*} limit 
 */
export const getClients = (offset, limit) => {
  return callAPI(
    'GET',
    CLIENTS.FETCH_CLIENTS,
    `/clients`
  );
};

/**
 * Retrieves a single client
 * 
 * @param {number} clientId 
 */
export const getClient = (clientId) => {
  return callAPI(
    'GET',
    CLIENTS.FETCH_CLIENT,
    `/clients/${clientId}`
  );
};

/**
 * Creates a client
 * 
 * @param {array} values 
 */
export const createClient = (values) => {
  
  return callAPI(
    'POST',
    CLIENTS.CREATE_CLIENT,
    `/client`,
    { 
      payload: values
    }
  );
}

/**
 * Updates a client
 * 
 * @param {array} values 
 * @param {number} clientId
 */
export const updateClient = (values, clientId) => {
  
  return callAPI(
    'PATCH',
    CLIENTS.UPDATE_CLIENT,
    `/client/${clientId}`,
    { 
      payload: values
    }
  );
}

/**
 * Deletes a client
 * 
 * @param {number} clientId
 */
export const deleteClient = clientId => {
  return callAPI(
    'DELETE', 
    CLIENTS.DELETE_CLIENT,
    `/client/${clientId}`
  )
}