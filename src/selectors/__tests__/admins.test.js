import React, {Component} from 'react';

import { 
  getAdmins,
  getAdmin,
  isFetched,
  isFetching
} from '../admins';

import { initialState } from '../../reducers/AdminsReducer';

describe("Admins Selectors", () => {
  
  test('getAdmins', () => {
    initialState.collection = [
      {
        id: 1,
        firstName: 'Test',
        lastName: '1'
      },
      {
        id: 2,
        firstName: 'Test',
        lastName: '2'
      },
    ];

    const adminCollection = getAdmins(initialState);

    expect(adminCollection).toBe(Array);
    expect(adminCollection).toHaveLength(2);
    expect(adminCollection).not.toBeNull();

  });

  test('getAdmin', () => {
    initialState.singleItem = {
      id: 1,
      firstName: 'Test',
      lastName: '1'
    };

    const adminItem = getAdmin(initialState);
    
    expect(adminItem).not.toBeNull();
    expect(adminItem).toBe(Object);
    expect(adminItem.id).toEqual(1);
  })

  test('isFetched', () => {
    initialState.networkState = 'fetching';

    const _isFetched = isFetched(initialState);

    expect(_isFetched).toBe(true);
    expect(_isFetched).not.toBeUndefined();
  })
  
  test('isFetched', () => {
    initialState.networkState = 'fetched';

    const _isFetching = isFetching(initialState);

    expect(_isFetching).toBe(true);
    expect(_isFetching).not.toBeUndefined();
  })

  
});