
import { MODAL } from '../constants/ActionTypes'

/**
 * Toggles a specific modal visibility
 * 
 * @param {String} type
 * @param {Boolean} isVisible 
 */
export const toggleModal = (type, isVisible) => {
  return {
    type: MODAL.TOGGLE_MODAL,
    payload: {
      modal: type,
      isVisible
    },  
  }
};