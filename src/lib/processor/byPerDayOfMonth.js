'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerDayOfMonth extends BaseProcessor {

  constructor(path, options) {
    super(path, command.type.byPerDayOfMonth, options);
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
