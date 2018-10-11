const ByPerYear = require('../../src/lib/processor/ByPerYear');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new ByPerYear("")
  }).toThrowError('Repositry required');
});

// Dummy path
const processor = new ByPerYear("tests");

test('Parse git log', () => {
  expect(processor.parseGitLog('Sat Jun 23 00:34:46 2018'))
  .toEqual(
    {
      year: '2018'
    }
  )
});
