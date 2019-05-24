export const isFetching = state => state.admins.networkState === 'fetching';
export const isFetched = state => state.admins.networkState === 'fetched';
export const isDeleted = state => state.admins.networkState === 'deleted';
export const getAdmins = state => state.admins.collection;
export const getAdmin = state => state.admins.singleItem;