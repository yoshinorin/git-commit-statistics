'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');

class ByPerWeekDay extends BaseProcessor {

  constructor(path, commandType, options) {
    super(path, commandType, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'dayOfWeek');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      dayOfWeek: arr[0]
    }
  }

}

module.exports = ByPerWeekDay;
