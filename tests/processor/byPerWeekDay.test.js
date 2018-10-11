const ByPerWeekDay = require('../../src/lib/processor/byPerWeekDay');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerWeekDay("")
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
  )
});
