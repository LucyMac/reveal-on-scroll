import * as actionTypes from '../../constants/ActionTypes';
import * as modalActions from '../modal';

describe('modal actions', () => {

  test('sets rolesModal to visible', () => {
    const action = modalActions.toggleModal('roles', true);

    expect(action).toEqual({
      type: actionTypes.MODAL.TOGGLE_MODAL,
      payload: {
        modal: 'roles',
        isVisible: true
      },
    });
  });
  
  test('sets rolesModal to invisible', () => {
    const action = modalActions.toggleModal('roles', false);

    expect(action).toEqual({
      type: actionTypes.MODAL.TOGGLE_MODAL,
      payload: {
        modal: 'roles',
        isVisible: false
      },
    });
  });

});