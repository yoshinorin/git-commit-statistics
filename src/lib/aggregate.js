'use strict';

function groupBy(list, field) {
  let result = [];

  for (let e of list) {
    let target = result.find(x => x[field] === e[field]);
    if (target) {
      target.count++;
      continue;
    }
    result.push({
      [field]: e[field],
      count: 1
    });
  }
  return result
}

module.exports = {
  groupBy: groupBy
};
