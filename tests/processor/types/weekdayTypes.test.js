const weekdayTypes = require('../../../src/lib/types/weekdayTypes');

test('Get weekday key names', () => {
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

test('Get weekday value by names', () => {
  expect(weekdayTypes.getValueByKeyName('Sun')).toEqual(0);
  expect(weekdayTypes.getValueByKeyName('Thu')).toEqual(4);
  expect(weekdayTypes.getValueByKeyName('Sat')).toEqual(6);
});
