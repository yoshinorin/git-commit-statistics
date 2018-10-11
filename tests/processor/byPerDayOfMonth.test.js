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
      day: '23'
    }
  )
});
