const util = require('../src/lib/utils');

test('Command result to array', () => {
  expect(
    util.toArray(
      'Sat Jun 23 00:34:46 2018 +0900\n' +
      'Sun Jun 24 01:06:52 2018 +0900\n' +
      'Sun Jun 24 01:28:58 2018 +0900\n' +
      'Sun Jun 24 01:29:36 2018 +0900',
      '\n'
    )
  ).toEqual(
    [
      'Sat Jun 23 00:34:46 2018 +0900',
      'Sun Jun 24 01:06:52 2018 +0900',
      'Sun Jun 24 01:28:58 2018 +0900',
      'Sun Jun 24 01:29:36 2018 +0900'
    ]
  );
});

test('Command result to array only whitespace', () => {
  expect(util.toArray(' ', '\n')).toEqual([]);
});
