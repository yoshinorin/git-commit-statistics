'use strict';

const weekday = [
  {
    key: 'Sun',
    value: 0
  },
  {
    key: 'Mon',
    value: 1
  },
  {
    key: 'Tue',
    value: 2
  },
  {
    key: 'Wed',
    value: 3
  },
  {
    key: 'Thu',
    value: 4
  },
  {
    key: 'Fri',
    value: 5
  },
  {
    key: 'Sat',
    value: 6
  }
];

function getKeyNames() {
  let arr = [];
  weekday.forEach((x) => {
    arr.push(x.key);
  });
  return arr;
};

function getValueByKeyName(name) {
  return weekday.find(x => x.key === name)['value'];
}

module.exports = {
  weekday,
  getKeyNames,
  getValueByKeyName
};
