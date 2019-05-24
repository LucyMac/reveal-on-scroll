import { 
  getPaginationItems
} from '../pagination';

import { initialState } from '../../reducers/AdminsReducer';

describe("Pagination Selectors", () => {

  test('getPaginationItems', () => {
    
    const pagItem = getPaginationItems(initialState);
    
    expect(pagItem).not.toBeNull();
    expect(pagItem).toEqual(expect.any(Object));
    expect(pagItem.count).toEqual(0);
    expect(pagItem.limit).toEqual(0);
    expect(pagItem.page).toEqual(0);
    expect(pagItem.hasMore).toEqual(true);
  })

});