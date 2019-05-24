import { CLIENTS } from '../constants/ActionTypes';

/**
 * Actions
 */
const {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAIL,
  FETCH_CLIENT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAIL,
  CREATE_CLIENT,
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_FAIL,
  UPDATE_CLIENT,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAIL,
  DELETE_CLIENT,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL
} = CLIENTS;

export const defaultClient = {
  companyName: '',
  email: '',
  phone: '',
  website: '',
  parentCompany: '',
  headOffice: {
    address1: '',
    address2: '',
    city: '',
    county: '',
    postcode: ''
  }
}

/**
 * Initial State
 */
export const initialState = {
  networkState: 'fresh',
  collection: [],
  singleItem: defaultClient
}

/**
 * ClientsReducer
 * 
 * @param {*} state 
 * @param {*} action 
 */

const ClientsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {

    /**
     * FETCH_CLIENTS
     */

    case FETCH_CLIENTS: {
      return Object.assign({}, state, {
        networkState: 'fetching',
        collection: []
      })
    }

    case FETCH_CLIENTS_SUCCESS: {
      const data = action.payload.data;
      return Object.assign({}, state, {
        networkState: 'fetched',
        collection: data
      })
    }

    case FETCH_CLIENTS_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }
    
    /**
     * FETCH_CLIENT
     */

    case FETCH_CLIENT: {
      return Object.assign({}, state, {
        networkState: 'fetching',
        singleItem: null
      })
    }

    case FETCH_CLIENT_SUCCESS: {
      const data = action.payload.data;

      return Object.assign({}, state, {
        networkState: 'fetched',
        singleItem: data
      })
    }

    case FETCH_CLIENT_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }

    /**
     * CREATE_CLIENT
     */

    case CREATE_CLIENT: {
      return Object.assign({}, state, {
        networkState: 'creating'
      })
    }
    
    case CREATE_CLIENT_SUCCESS: {
      const client = action.payload.data;

      return Object.assign({}, state, {
        networkState: 'created',
        singleItem: client
      })
    }

    case CREATE_CLIENT_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }
    
    /**
     * UPDATE_CLIENT
     */

    case UPDATE_CLIENT: {
      return Object.assign({}, state, {
        networkState: 'updating'
      })
    }
    
    case UPDATE_CLIENT_SUCCESS: {
      const client = action.payload.data;

      return Object.assign({}, state, {
        networkState: 'updated',
        singleItem: client
      })
    }

    case UPDATE_CLIENT_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }
    
    /**
     * DELETE_CLIENT
     */

    case DELETE_CLIENT: {
      return Object.assign({}, state, {
        networkState: 'deleting'
      })
    }
    
    case DELETE_CLIENT_SUCCESS: {
      return Object.assign({}, state, {
        networkState: 'deleted',
      })
    }

    case DELETE_CLIENT_FAIL: {
      return Object.assign({}, state, {
        networkState: 'failed'
      })
    }

    /**
     * Default
     */

    default:
      return state;
  }
};

export default ClientsReducer;