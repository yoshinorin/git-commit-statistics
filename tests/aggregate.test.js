const aggregate = require('../src/lib/aggregate');
const BaseProcessor = require('../src/lib/processor/baseProcessor');

// Dummy path
const baseProcessor = new BaseProcessor("tests");

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
  testData.push(baseProcessor.parseGitLog(log))
});

test('Git log group by month', () => {
  expect(aggregate.groupBy(testData, 'month'))
  .toEqual(
    [
      { month: 'Jun', count: 3 },
      { month: 'Nov', count: 2 },
      { month: 'Dec', count: 2 }
    ]
  )
});

test('Git log group by day of month', () => {
  expect(aggregate.groupBy(testData, 'day'))
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
  expect(aggregate.groupBy(testData, 'dayOfWeek'))
  .toEqual(
    [
      { dayOfWeek: 'Sat', count: 3 },
      { dayOfWeek: 'Sun', count: 2 },
      { dayOfWeek: 'Mon', count: 2 }
    ]
  )
});

test('Git log group by year', () => {
  expect(aggregate.groupBy(testData, 'year'))
  .toEqual(
    [
      { year: '2017', count: 2 },
      { year: '2018', count: 4 },
      { year: '2016', count: 1 }
    ]
  )
});
