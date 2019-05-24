import { 
  getClients,
  getClient,
  isFetched,
  isFetching
} from '../clients';

import { initialState } from '../../reducers/ClientsReducer';

describe("Clients Selectors", () => {
  
  test('getClients', () => {
    const clientStore = {};
    clientStore.clients = {...initialState};
    clientStore.clients.collection = [
      {
        id: 1,
        companyName: 'Test',
      },
      {
        id: 2,
        companyName: 'Test',
      },
    ];

    const clientCollection = getClients(clientStore);

    expect(clientCollection).toEqual(expect.any(Array));
    expect(clientCollection).toHaveLength(2);
    expect(clientCollection).not.toBeNull();
  });

  test('getClient', () => {
    const clientStore = {};
    clientStore.clients = {...initialState};
    clientStore.clients.singleItem = {
      id: 1,
      companyName: 'Test'
    };

    const clientItem = getClient(clientStore);
    
    expect(clientItem).not.toBeNull();
    expect(clientItem).toEqual(expect.any(Object));
    expect(clientItem.id).toEqual(1);
  })

  test('isFetched', () => {
    const clientStore = {};
    clientStore.clients = {...initialState};
    clientStore.clients.networkState = 'fetched';

    const _isFetched = isFetched(clientStore);

    expect(_isFetched).toBe(true);
    expect(_isFetched).not.toBeUndefined();
  })

  test('isFetched', () => {
    const clientStore = {};
    clientStore.clients = {...initialState};
    clientStore.clients.networkState = 'fetching';

    const _isFetching = isFetching(clientStore);

    expect(_isFetching).toBe(true);
    expect(_isFetching).not.toBeUndefined();
  })

});