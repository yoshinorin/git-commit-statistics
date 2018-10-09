const CommitStatistics = require('../src/index');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new CommitStatistics("")
  }).toThrowError('Repositry required');
});

// Dummy path
const cs = new CommitStatistics("tests");

test('Parse git log', () => {
  expect(cs.parseGitLogByLine('Sat Jun 23 00:34:46 2018'))
  .toEqual(
    {
      year: '2018',
      month: 'Jun',
      day: '23',
      hour: '00',
      dayOfWeek: 'Sat'
    }
  )
});

test('Parse git shortlog with double whitespace', () => {
  expect(cs.parseGitShortLogByLine('52  YoshinoriN')).toEqual({ author: 'YoshinoriN', commits: '52' })
});

test('Parse git shortlog with single whitespace', () => {
  expect(cs.parseGitShortLogByLine('52 YoshinoriN')).toEqual({ author: 'YoshinoriN', commits: '52' })
});

test('Parse git shortlog with triple whitespace and both ends spaces', () => {
  expect(cs.parseGitShortLogByLine(' 52   YoshinoriN ')).toEqual({ author: 'YoshinoriN', commits: '52' })
});

