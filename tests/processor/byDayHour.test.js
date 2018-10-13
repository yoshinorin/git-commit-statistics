const ByPerDayHour = require('../../src/lib/processor/byPerDayHour');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerDayHour("");
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerDayHour("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 01:34:46 2018'))
  .toEqual(
    {
      hour: 1
    }
  );
});

const hours = [
  { hour: 1, count: 671 },
  { hour: 16, count: 1737 },
  { hour: 17, count: 1572 },
  { hour: 21, count: 967 },
  { hour: 18, count: 1115 },
  { hour: 13, count: 1661 },
  { hour: 2, count: 527 }
];

test('byPerYear sort', () => {
  expect(processor.sort(hours))
  .toEqual(
    [
      { hour: 1, count: 671 },
      { hour: 2, count: 527 },
      { hour: 13, count: 1661 },
      { hour: 16, count: 1737 },
      { hour: 17, count: 1572 },
      { hour: 18, count: 1115 },
      { hour: 21, count: 967 }
    ]
  );
});
