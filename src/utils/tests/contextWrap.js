import { BrowserRouter } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';

import { shape } from 'prop-types';

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
});

export function mountWrap(node) {
  return mount(node, createContext());
}

export function shallowWrap(node) {
  return shallow(node, createContext());
}


export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

export const mountWithStore = (component, store) => {
  const context = {
    store,
  };
  return mount(component, { context });
};