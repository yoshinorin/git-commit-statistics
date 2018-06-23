const CommitStatistics = require('../index');

test('commandBuilder', () => {
  let cs = new CommitStatistics("/test/example/.git");
  expect(cs.commandBuilder()).toBe("git --git-dir /test/example/.git");
});
