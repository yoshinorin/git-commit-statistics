'use strict';

function toArray(line, separator) {
  const str = line.toString().trim();
  if (str.length === 0) {
    return [];
  }
  return str.split(separator);
}

function typeMapper(list, key, types) {
  return list.map((x) => {
    const obj = types.find(t => t.key === x[key]);
    x.id = obj.value;
    return x;
  });
}

module.exports = {
  toArray,
  typeMapper
};
