const command = require('../src/lib/command');

test('Create basic command', () => {
  expect(command.create(command.type.byPerWeekDay, '/test/example/.git'))
    .toBe("git --git-dir /test/example/.git log --oneline --pretty=format:\"%cd\" --reverse");
});

test('Create basic command with option', () => {
  expect(
    command.create(
      command.type.byPerWeek,
      '/test/example/.git',
      {
        author: "YoshinoriN",
        since: '2017-01-01',
        after: '2018-01-01',
        n: 10,
        noMerges: true
      }
    )
  ).toBe("git --git-dir /test/example/.git log --author=\"YoshinoriN\" --since=\"2017-01-01\" --after=\"2018-01-01\" -n=\"10\" --no-merges --oneline --pretty=format:\"%cd\" --reverse");
});

test('Create basic command with noMerges false', () => {
  expect(
    command.create(
      command.type.byPerWeek,
      '/test/example/.git',
      {
        author: "YoshinoriN",
        since: '2017-01-01',
        after: '2018-01-01',
        n: 10,
        noMerges: false
      }
    )
  ).toBe("git --git-dir /test/example/.git log --author=\"YoshinoriN\" --since=\"2017-01-01\" --after=\"2018-01-01\" -n=\"10\" --oneline --pretty=format:\"%cd\" --reverse");
});

test('Create basic shortlog command', () => {
  expect(command.create(command.type.summaryByAuthor, '/test/example/.git'))
    .toBe("git --git-dir /test/example/.git shortlog -s -n");
});

test('Create basic shortlog command with option', () => {
  expect(command.create(command.type.summaryByCommitter, '/test/example/.git', {c: true}))
    .toBe("git --git-dir /test/example/.git shortlog -s -n -c");
});

test('Execute command', () => {
  expect(command.execute('echo test command').toString()).toContain('test command');
});
