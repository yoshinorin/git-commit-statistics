const command = require('../src/lib/command');

test('Create basic command', () => {
  expect(command.create(command.type.byPerWeekDay, '/test/example/.git'))
    .toBe("git --git-dir /test/example/.git log --oneline --pretty=format:\"%cd\" --reverse");
});

let opts = {
  author: "YoshinoriN",
  since: '2017-01-01',
  after: '2018-01-01',
  n: 10,
  noMerges: true
}

test('Create basic command with option', () => {
  expect(command.create(command.type.byPerWeek, '/test/example/.git', opts))
    .toBe("git --git-dir /test/example/.git log --author=\"YoshinoriN\" --since=\"2017-01-01\" --after=\"2018-01-01\" -n=\"10\" --no-merges --oneline --pretty=format:\"%cd\" --reverse");
});
