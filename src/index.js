import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { store } from './store/configureStore';
import { unregister as unregisterServiceWorker } from './serviceWorker';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Base styles 
import './styles/index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

unregisterServiceWorker();