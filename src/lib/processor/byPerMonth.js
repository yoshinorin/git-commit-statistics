'use strict';

const aggregate = require('../aggregate');
const BaseProcessor = require('./baseProcessor');
const command = require('../command');

class ByPerMonth extends BaseProcessor {

  constructor(path, commandType, options) {
    super(path, command.type.byPerMonth, options);
  }

  createResult() {
    return aggregate.groupBy(this.createObjects(), 'month');
  }

  parseGitLog(line) {
    const arr = line.match(/\S+/g);
    return {
      month: arr[1]
    }
  }

}

module.exports = ByPerMonth;
