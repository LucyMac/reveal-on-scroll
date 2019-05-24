import axios from 'axios';

const client = axios.create({
  baseURL:
    // `${process.env.REACT_APP_API_URL}/api/` || 'http://localhost:8080/api/',
    'http://localhost:8080/api',
  responseType: 'json'
});

const options = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      ({ getState, dispatch }, config) => {
        const auth = localStorage.getItem('auth') || null;

        // Inject Auth Token if set in the cookie
        if (auth != null && !config.url.includes('windows.net')) {
          const token = JSON.parse(auth).accessToken;
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        // IE11 needs no-cache
        // config.headers['Cache-Control'] = 'no-cache';
        // config.headers['Pragma'] = 'no-cache';
        // config.headers['Access-Control-Allow-Origin'] = false;

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

const defaultClient = {
  client,
  options
};

export default defaultClient;