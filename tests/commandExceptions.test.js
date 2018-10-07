const command = require('../src/lib/command');

// Exceptions tests
test('Throw Unknown command base exception', () => {
  expect(ex = () => {command.create(999, '/test/example/.git')}).toThrowError('Unknown command base.');
});

test('Throw Unknown option c is invalid', () => {
  expect(ex = () => {
    command.create(
      command.type.byPerWeek,
      '/test/example/.git',
      {
        c: true
      }
    )
  }).toThrowError('Option c is invalid.');
});
