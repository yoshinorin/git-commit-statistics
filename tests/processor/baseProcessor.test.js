const BaseProcessor = require('../../src/lib/processor/baseProcessor');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new BaseProcessor("")
  }).toThrowError('Repositry required');
});

// Dummy path
const baseProcessor = new BaseProcessor("tests");

test('Parse git log', () => {
  expect(baseProcessor.parseGitLog('Sat Jun 23 00:34:46 2018'))
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
