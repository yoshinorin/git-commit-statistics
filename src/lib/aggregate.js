'use strict';

function groupBy(list, field) {
  return list.reduce((result, current) => {
    const y = result.find((x) => x[field] === current[field]);
    if (y) {
      y.count ++;
    } else {
      result.push({
        [field]: current[field],
        count: 1
      });
    }
    return result;
  }, []);
}

module.exports = {
  groupBy: groupBy
};
