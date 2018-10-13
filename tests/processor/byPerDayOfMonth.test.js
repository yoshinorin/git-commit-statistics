const ByPerDayOfMonth = require('../../src/lib/processor/byPerDayOfMonth');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerDayOfMonth("")
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerDayOfMonth("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 00:34:46 2018'))
  .toEqual(
    {
      day: 23
    }
  )
});

const days = [
  { day: 2, count: 2 },
  { day: 1, count: 2 },
  { day: 10, count: 2 },
  { day: 20, count: 2 },
]

test('byPerYear sort', () => {
  expect(processor.sort(days))
  .toEqual(
    [
      { day: 1, count: 2 },
      { day: 2, count: 2 },
      { day: 10, count: 2 },
      { day: 20, count: 2 },
    ]
  )
});
