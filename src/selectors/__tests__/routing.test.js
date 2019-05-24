import { 
  getEntityId,
  isEditRoute,
  isViewRoute,
  getEditRoute,
  getViewRoute
} from '../routing';

describe("Routing Selectors", () => {

  const ownPropsEdit = {
    match: {
      params: {
        item: '122',
        option: 'edit'
      },
      url: 'clients/123/edit'
    }
  }

  const ownPropsView = {
    match: {
      params: {
        item: '123',
      },
      url: 'clients/123'
    }
  }

  test('getEntityId', () => {

    const entityId = getEntityId(ownPropsEdit);

    expect(entityId).toBe(122);
    expect(entityId).not.toBeNull();
  });

  test('isEditRoute', () => {

    const isEditMode = isEditRoute(ownPropsEdit);
    const isViewMode = isViewRoute(ownPropsEdit);

    expect(isEditMode).toBe(true);
    expect(isViewMode).toBe(false);
  });

  test('isViewRoute', () => {

    const isViewMode = isViewRoute(ownPropsView);
    const isEditMode = isEditRoute(ownPropsView);


    expect(isViewMode).toBe(true);
    expect(isEditMode).toBe(false);

  });

  test('getEditRoute', () => {

    const editRoute = getEditRoute(ownPropsView);

    expect(editRoute).toContain('edit');
    expect(editRoute).not.toContain('new');
  });

  test('getViewRoute', () => {

    const viewRoute = getViewRoute(ownPropsEdit);

    expect(viewRoute).toContain('123');
    expect(viewRoute).not.toContain('edit');
    expect(viewRoute).not.toContain('new');

  });
});