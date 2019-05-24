import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import app from './AppReducer';
import auth from './AuthReducer';
import modal from './ModalReducer';
import clients from './ClientsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  app,
  auth,
  modal,
  clients
});

export default rootReducer;
