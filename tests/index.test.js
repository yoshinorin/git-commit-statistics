const CommitStatistics = require('../src/index');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new CommitStatistics("")
  }).toThrowError('Repositry required');
});

// Dummy path
const cs = new CommitStatistics("tests");

test('Command executer test', () => {
  expect(cs.commandExecuter('echo test command').toString()).toContain('test command');
});

test('Command result to array', () => {
  expect(
    cs.commandExecuteResultToArray(
      'Sat Jun 23 00:34:46 2018 +0900\n' +
      'Sun Jun 24 01:06:52 2018 +0900\n' +
      'Sun Jun 24 01:28:58 2018 +0900\n' +
      'Sun Jun 24 01:29:36 2018 +0900'
    )
  ).toEqual(
    [
      'Sat Jun 23 00:34:46 2018 +0900',
      'Sun Jun 24 01:06:52 2018 +0900',
      'Sun Jun 24 01:28:58 2018 +0900',
      'Sun Jun 24 01:29:36 2018 +0900'
    ]
  )
});

test('Command result to array only whitespace', () => {
  expect(cs.commandExecuteResultToArray(' ')).toEqual([]);
});

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

// Group by tests
const logs = [
  'Sat Jun 1 00:34:46 2017 +0900',
  'Sun Jun 1 01:06:52 2018 +0900',
  'Sat Nov 10 01:28:58 2017 +0900',
  'Mon Dec 2 01:29:36 2018 +0900',
  'Sat Jun 2 00:34:46 2016 +0900',
  'Sun Dec 11 01:06:52 2018 +0900',
  'Mon Nov 10 01:06:52 2018 +0900',
]

let testData = [];
logs.forEach(log => {
  testData.push(cs.parseGitLogByLine(log))
});

test('Git log group by month', () => {
  expect(cs.groupBy(testData, 'month'))
  .toEqual(
    [
      { month: 'Jun', count: 3 },
      { month: 'Nov', count: 2 },
      { month: 'Dec', count: 2 }
    ]
  )
});

test('Git log group by day of month', () => {
  expect(cs.groupBy(testData, 'day'))
  .toEqual(
    [
      { day: '1', count: 2 },
      { day: '10', count: 2 },
      { day: '2', count: 2 },
      { day: '11', count: 1 }
    ]
  )
});

test('Git log group by day of week', () => {
  expect(cs.groupBy(testData, 'dayOfWeek'))
  .toEqual(
    [
      { dayOfWeek: 'Sat', count: 3 },
      { dayOfWeek: 'Sun', count: 2 },
      { dayOfWeek: 'Mon', count: 2 }
    ]
  )
});

test('Git log group by year', () => {
  expect(cs.groupBy(testData, 'year'))
  .toEqual(
    [
      { year: '2017', count: 2 },
      { year: '2018', count: 4 },
      { year: '2016', count: 1 }
    ]
  )
});
