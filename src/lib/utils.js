'use strict';

function toArray(line, separator) {
  const str = line.toString().trim();
  if (str.length === 0) {
    return [];
  }
  return str.split(separator);
}

module.exports = {
  toArray: toArray
};
