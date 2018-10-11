const ByPerMonth = require('../../src/lib/processor/byPerMonth');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerMonth("")
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
  )
});
