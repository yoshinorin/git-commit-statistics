const weekdayTypes = require('../../../src/lib/types/weekdayTypes');

test('Command result to array', () => {
  expect(
    weekdayTypes.getKeyNames()
  ).toEqual(
    [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ]
  );
});
