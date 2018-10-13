const ByPerWeekDay = require('../../src/lib/processor/byPerWeekDay');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerWeekDay("");
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerWeekDay("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 00:34:46 2018'))
  .toEqual(
    {
      dayOfWeek: 'Sat'
    }
  );
});

const months = [
  { dayOfWeek: 'Mon', count: 3899 },
  { dayOfWeek: 'Fri', count: 3765 },
  { dayOfWeek: 'Sat', count: 1950 },
  { dayOfWeek: 'Sun', count: 1891 },
  { dayOfWeek: 'Tue', count: 4179 },
  { dayOfWeek: 'Wed', count: 4146 },
  { dayOfWeek: 'Thu', count: 4108 }
];

test('byPerWeekDay sort', () => {
  expect(processor.sort(months))
  .toEqual(
    [
      { dayOfWeek: 'Sun', count: 1891, id: 0 },
      { dayOfWeek: 'Mon', count: 3899, id: 1 },
      { dayOfWeek: 'Tue', count: 4179, id: 2 },
      { dayOfWeek: 'Wed', count: 4146, id: 3 },
      { dayOfWeek: 'Thu', count: 4108, id: 4 },
      { dayOfWeek: 'Fri', count: 3765, id: 5 },
      { dayOfWeek: 'Sat', count: 1950, id: 6 }
    ]
  );
});
