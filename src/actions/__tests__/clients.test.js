import * as actionTypes from '../../constants/ActionTypes';
import * as clientActions from '../clients';

const testClientId = 1;

describe('client actions', () => {

  /**
   * Get clients
   */
  test('get clients action', () => {
    const action = clientActions.getClients();

    expect(action).toEqual({
      type: actionTypes.CLIENTS.FETCH_CLIENTS,
      payload: {
        client: 'default',
        request: {
          method: 'GET',
          url: `/clients`,
          params: undefined,
          data: {},
        },
      },
    });
  });
  
  /**
   * Get client
   */
  test('get a single client action', () => {
    const action = clientActions.getClients(1);

    expect(action).toEqual({
      type: actionTypes.CLIENTS.FETCH_CLIENT,
      payload: {
        client: 'default',
        request: {
          method: 'GET',
          url: `/clients/${1}`,
          params: undefined,
          data: {},
        },
      },
    });
  });

  /**
   * Create
   */
  test('create clients action', () => {
    const testClientData = {
      firstName: 'Gary',
      lastName: 'Nigel'
    }

    const action = clientActions.createClient(testClientData);

    expect(action).toEqual({
      type: actionTypes.CLIENTS.CREATE_CLIENT,
      payload: {
        client: 'default',
        request: {
          method: 'POST',
          url: `/client`,
          params: undefined,
          data: testClientData,
        },
      },
    });
  })
  
  /**
   * Update
   */
  test('update clients action', () => {
    const testClientData = {
      firstName: 'Gary',
      lastName: 'Nigel'
    }

    const clientId = 1;

    const action = clientActions.updateClient(testClientData, clientId);

    expect(action).toEqual({
      type: actionTypes.CLIENTS.UPDATE_CLIENT,
      payload: {
        client: 'default',
        request: {
          method: 'PATCH',
          url: `/client/${clientId}`,
          params: undefined,
          data: testClientData,
        },
      },
    });
  })

  /**
   * Delete
   */
  test('delete clients action', () => {

    const clientId = 1;
    const action = clientActions.deleteClient(clientId);

    expect(action).toEqual({
      type: actionTypes.CLIENTS.DELETE_CLIENT,
      payload: {
        client: 'default',
        request: {
          method: 'DELETE',
          url: `/client/${clientId}`,
          params: undefined,
          data: {}
        }
      }
    })

  });

});