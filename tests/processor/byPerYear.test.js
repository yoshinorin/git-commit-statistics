const ByPerYear = require('../../src/lib/processor/byPerYear');

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
      year: 2018
    }
  )
});

const years = [
  { year: 2017, count: 1945 },
  { year: 2011, count: 2323 },
  { year: 2013, count: 2362 }
]

test('byPerYear sort', () => {
  expect(processor.sort(years))
  .toEqual(
    [
      { year: 2011, count: 2323 },
      { year: 2013, count: 2362 },
      { year: 2017, count: 1945 }
    ]
  )
});
