export const isFetching = state => state.clients.networkState === 'fetching';
export const isFetched = state => state.clients.networkState === 'fetched';

export const isLoaded = state => state.clients.networkState === 'updated' 
  || state.clients.networkState === 'fetched';

export const isLoading = state => state.clients.networkState === 'updating' 
|| state.clients.networkState === 'fetching';


export const getClients = state => state.clients.collection;
export const getClient = state => state.clients.singleItem;