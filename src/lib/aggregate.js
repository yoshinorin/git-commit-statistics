'use strict';

function groupBy(list, field) {
  const result = [];

  for (const e of list) {
    const target = result.find(x => x[field] === e[field]);
    if (target) {
      target.count++;
      continue;
    }
    result.push({
      [field]: e[field],
      count: 1
    });
  }
  return result;
}

module.exports = {
  groupBy
};
