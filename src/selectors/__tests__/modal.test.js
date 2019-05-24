import React, {Component} from 'react';

import { 
  isModalVisible
} from '../modal';

import { initialState } from '../../reducers/ModalReducer';

describe("Modal Selectors", () => {

  test('isModalVisible is not visible', () => {
    // initialState.networkState = 'fetched';

    const _isModalVisible = isModalVisible(initialState);

    expect(_isModalVisible).toBe(false);
    expect(_isModalVisible).not.toBeUndefined();
  })

  test('isModalVisible is visible with confirm', () => {
    initialState['confirm'] = {
      isVisible: true
    };

    const _isModalVisible = isModalVisible(initialState, 'confirm');

    expect(_isModalVisible).toBe(true);
    expect(_isModalVisible).not.toBeUndefined();
  })

  test('isModalVisible is visible with roles', () => {
    initialState['roles'] = {
      isVisible: true
    };

    const _isModalVisible = isModalVisible(initialState, 'roles');

    expect(_isModalVisible).toBe(true);
    expect(_isModalVisible).not.toBeUndefined();
  })

  test('isModalVisible is visible with adminPortalSwitch', () => {
    initialState['adminPortalSwitch'] = {
      isVisible: true
    };

    const _isModalVisible = isModalVisible(initialState, 'adminPortalSwitch');

    expect(_isModalVisible).toBe(true);
    expect(_isModalVisible).not.toBeUndefined();
  })

});