'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');

class ByPerDayOfMonth extends BaseProcessor {

  constructor(path, commandType, options) {
    super(path, commandType, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'day');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      day: arr[2]
    }
  }

}

module.exports = ByPerDayOfMonth;
