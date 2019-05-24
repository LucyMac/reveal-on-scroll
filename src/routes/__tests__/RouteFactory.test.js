import React, { Component } from 'react';
import { createMockStore } from 'redux-test-utils';

import { shallowWithStore } from '../../utils/tests/contextWrap';

import RouteFactory from './../RouteFactory';

describe("RouteFactory", () => {
  
  test('buildUrl returns default route correctly', () => {
    const container = 'default'
    const name = 'admins'
    const factory = new RouteFactory(createMockStore)
    const buildUrl = factory.buildUrl(container, name)

    expect(buildUrl).toEqual('/admins/');

  });

  test('buildUrl returns create route correctly', () => {
    const container = 'create'
    const name = 'admins'
    const factory = new RouteFactory(createMockStore)
    const buildUrl = factory.buildUrl(container, name)

    expect(buildUrl).toEqual('/admins/new');

  });

  test('buildUrl returns view route correctly', () => {
    const container = 'view'
    const name = 'admins'
    const factory = new RouteFactory(createMockStore)
    const buildUrl = factory.buildUrl(container, name)

    expect(buildUrl).toEqual('/admins/:item');

  });

  test('buildUrl returns edit route correctly', () => {
    const container = 'edit'
    const name = 'clients'
    const factory = new RouteFactory(createMockStore)
    const buildUrl = factory.buildUrl(container, name)

    expect(buildUrl).toEqual('/clients/:item/:option');

  });

  test('privateRouteList is being populated successfully', () => {
    const factory = new RouteFactory(createMockStore)
    const { privateRouteList } = factory

    expect(privateRouteList.length).toBeGreaterThan(0);
  });
});