const CommitStatistics = require('../src/index');

test('Repositry required Exception', () => {
  expect(ex = () => {
    new CommitStatistics("")
  }).toThrowError('Repositry required');
});

test('Command executer test', () => {
  // Dummy path
  let cs = new CommitStatistics("tests");
  expect(cs.commandExecuter('echo test command').toString()).toContain('test command');
});

test('Command result to array', () => {
  // Dummy path
  let cs = new CommitStatistics("tests");
  expect(
    cs.commandExecuteResultToArray(
      'Sat Jun 23 00:34:46 2018 +0900\n' +
      'Sun Jun 24 01:06:52 2018 +0900\n' +
      'Sun Jun 24 01:28:58 2018 +0900\n' +
      'Sun Jun 24 01:29:36 2018 +0900'
    )
  ).toHaveLength(4)
});

