import { 
  commaSeparate
} from '../helpers';

describe("Helper functions", () => {
  
  test('commaSeparate', () => {
  
    const testArray = [
      {
        title: 'warehouse 1'
      },
      {
        title: 'warehouse 2'
      },
      {
        title: 'warehouse 3'
      },
      {
        title: 'warehouse 4'
      }
    ];

    const commaSeparatedList = testArray.map((item, i) => commaSeparate(item, i, 'title'));
    const lastItem = commaSeparatedList[commaSeparatedList.length - 1];

    expect(commaSeparatedList).toContain(', warehouse 2');
    expect(lastItem.charAt(0)).toEqual(',');
    expect(lastItem.charAt(-1)).not.toEqual(',');
  });

});