import * as actionTypes from '../../constants/ActionTypes';

import ModalReducer, { initialState } from '../ModalReducer';

describe('Modal Reducer', () => {

  describe('roles modal', () => {

    test('roles is not visible by default', () => {
      expect(initialState.roles.isVisible).toEqual(false);
    });
    
    test('toggleModal makes rolesModal visible', () => {
      const response = {
        modal: 'roles',
        isVisible: true
      }

      const state = ModalReducer(initialState, {
        type: actionTypes.MODAL.TOGGLE_MODAL,
        payload: response
      });

      expect(state.roles.isVisible).toEqual(true);
    });
    
    test('toggleModal makes rolesModal hidden', () => {
      const response = {
        modal: 'roles',
        isVisible: false
      }

      const state = ModalReducer(initialState, {
        type: actionTypes.MODAL.TOGGLE_MODAL,
        payload: response
      });

      expect(state.roles.isVisible).toEqual(false);
    });
  });


});