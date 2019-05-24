import { MODAL } from '../constants/ActionTypes';

/**
 * Actions
 */
const {
  TOGGLE_MODAL
} = MODAL;

/**
 * Initial State
 */
export const initialState = {
  roles: {
    isVisible: false
  },
  confirm: {
    isVisible: false
  },
  adminPortalSwitch: {
    isVisible: false
  },
  resourcingPortalSwitch: {
    isVisible: false
  },
}

/**
 * ModalReducer
 * 
 * @param {*} state 
 * @param {*} action 
 */
const ModalReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {

    /** 
     * Toggle visibility of specified modal
     */
    case TOGGLE_MODAL: {
      const data = action.payload;

      let modal = Object.assign({}, state[data.modal], {
        isVisible: data.isVisible
      });


      return Object.assign({}, state, {
        [data.modal]: modal
      })
    }

    /**
     * Default
     */

    default:
      return state;
  }
};

export default ModalReducer;