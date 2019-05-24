import * as actionTypes from '../../constants/ActionTypes';

import ClientsReducer, { initialState } from '../ClientsReducer';

const mockClients = [
  {
    "id": 122,
    "companyName": "Amazon",
    "warehouses": [
      {
        "id": 13,
        "name": "Wrexham"
      },
      {
        "id": 14,
        "name": "Coleshill"
      }
    ],
    "status": 1
  }
];

describe('client reducer', () => {

  /**
   * FETCH_CLIENTS
   */
  describe('get clients requests', () => {
    test('FETCH_CLIENTS', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENTS
      });

      expect(state.networkState).toEqual('fetching')
    });
    
    test('FETCH_CLIENTS_SUCCESS', () => {
      const response = {
        data: mockClients
      }

      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENTS_SUCCESS,
        payload: response
      });

      expect(state.networkState).toEqual('fetched');
      expect(state.collection).toEqual(mockClients);
      expect(state.collection.length).toBeGreaterThan(0);
    });

    test('FETCH_CLIENTS_FAIL', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENTS_FAIL
      });

      expect(state.networkState).toEqual('failed')
    });
  });
  
  /**
   * FETCH_CLIENT
   */
  describe('get client requests', () => {
    test('FETCH_CLIENT', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENT
      });

      expect(state.networkState).toEqual('fetching')
    });
    
    test('FETCH_CLIENT_SUCCESS', () => {
      const singleItem = mockClients[0];

      const response = {
        data: singleItem
      }

      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENT_SUCCESS,
        payload: response
      });

      expect(state.networkState).toEqual('fetched');
      expect(state.singleItem).toEqual(singleItem);
      expect(state.singleItem).toBeTruthy(state.singleItem !== null);
    });

    test('FETCH_CLIENT_FAIL', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.FETCH_CLIENT_FAIL
      });

      expect(state.networkState).toEqual('failed')
    });
  });

  /**
   * CREATE_CLIENT
   */
  describe('create client requests', () => {
    test('CREATE_CLIENT', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.CREATE_CLIENT
      });

      expect(state.networkState).toEqual('creating')
    });
    
    test('CREATE_CLIENT_SUCCESS', () => {

      const response = {
        data: mockClients[0]
      };

      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.CREATE_CLIENT_SUCCESS,
        payload: response
      });

      expect(state.networkState).toEqual('created')
      expect(state.singleItem).toEqual(response.data)
    });

    test('CREATE_CLIENT_FAIL', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.CREATE_CLIENT_FAIL
      });

      expect(state.networkState).toEqual('failed')
    });
  });

  /**
   * UPDATE_CLIENT
   */
  describe('update client requests', () => {
    test('UPDATE_CLIENT', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.UPDATE_CLIENT
      });

      expect(state.networkState).toEqual('updating')
    });
    
    test('UPDATE_CLIENT_SUCCESS', () => {

      const response = {
        data: mockClients[0]
      };

      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.UPDATE_CLIENT_SUCCESS,
        payload: response
      });

      expect(state.networkState).toEqual('updated')
      expect(state.singleItem).toEqual(response.data)
    });

    test('UPDATE_CLIENT_FAIL', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.UPDATE_CLIENT_FAIL
      });

      expect(state.networkState).toEqual('failed')
    });
  });

  /**
   * DELETE_CLIENT
   */
  describe('delete client request', () => {
    test('DELETE_CLIENT', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.DELETE_CLIENT
      });

      expect(state.networkState).toEqual('deleting')
    });
    
    test('DELETE_CLIENT_SUCCESS', () => {

      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.DELETE_CLIENT_SUCCESS
      });

      expect(state.networkState).toEqual('deleted')
    });

    test('DELETE_CLIENT_FAIL', () => {
      const state = ClientsReducer(initialState, {
        type: actionTypes.CLIENTS.DELETE_CLIENT_FAIL
      });

      expect(state.networkState).toEqual('failed')
    });
  });

});