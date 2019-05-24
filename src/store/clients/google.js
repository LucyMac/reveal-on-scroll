import axios from 'axios';

const client = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  // baseURL: `${process.env.REACT_APP_API_URL}/googleproxy` || 'http://localhost:3000/googleproxy',
  // baseURL: 'http://localhost:3000/googleapi',
  responseType: 'json',
  crossdomain: true,
  withCredentials: false,
});

const options = {
  headers: {
	  'Access-Control-Allow-Origin': '*',
  },
  mode: 'no-cors',
  proxy: {
	  host: 'localhost',
	  port: 3000
  },
  crossdomain: true,
  returnRejectedPromiseOnError: true,
  withCredentials: false,
  interceptors: {
    request: [
      ({ getState, dispatch }, config) => {
        
        return config;
      },
    ],
    response: [
      {
        // Response interception
        success: ({ dispatch }, response) => response,
        // Response Error Interception
        error: ({ dispatch }, error) => Promise.reject(error),
      },
    ],
  },
};

export default {
  client,
  options
};