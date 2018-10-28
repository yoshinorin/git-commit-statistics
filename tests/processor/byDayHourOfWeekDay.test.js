const ByPerDayHourOfWeek = require('../../src/lib/processor/byPerDayHourOfWeekDay');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerDayHourOfWeek("");
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerDayHourOfWeek("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 01:34:46 2018'))
  .toEqual(
    {
      dayOfWeek: 'Sat',
      hour: 1
    }
  );
});
