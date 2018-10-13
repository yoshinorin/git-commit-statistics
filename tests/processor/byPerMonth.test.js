const ByPerMonth = require('../../src/lib/processor/byPerMonth');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerMonth("");
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerMonth("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 00:34:46 2018'))
  .toEqual(
    {
      month: 'Jun'
    }
  );
});

const months = [
  { month: 'Feb', count: 2147 },
  { month: 'Mar', count: 2195 },
  { month: 'Apr', count: 1995 },
  { month: 'May', count: 1952 },
  { month: 'Jun', count: 1932 },
  { month: 'Jul', count: 1712 },
  { month: 'Aug', count: 2133 },
  { month: 'Sep', count: 1968 },
  { month: 'Oct', count: 2039 },
  { month: 'Nov', count: 1631 },
  { month: 'Dec', count: 2110 },
  { month: 'Jan', count: 2124 }
];

test('byPerMonth sort', () => {
  expect(processor.sort(months))
  .toEqual(
    [
      { month: 'Jan', count: 2124, id: 1 },
      { month: 'Feb', count: 2147, id: 2 },
      { month: 'Mar', count: 2195, id: 3 },
      { month: 'Apr', count: 1995, id: 4 },
      { month: 'May', count: 1952, id: 5 },
      { month: 'Jun', count: 1932, id: 6 },
      { month: 'Jul', count: 1712, id: 7 },
      { month: 'Aug', count: 2133, id: 8 },
      { month: 'Sep', count: 1968, id: 9 },
      { month: 'Oct', count: 2039, id: 10 },
      { month: 'Nov', count: 1631, id: 11 },
      { month: 'Dec', count: 2110, id: 12 }
    ]
  );
});
